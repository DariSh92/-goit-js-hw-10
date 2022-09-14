// export default class NewsCountriesApiService {
//   constructor() {
//     this.searchQuery = '';
//   }

//   fetchCountries() {
//     const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,capital,population,flags,languages`;
//     return fetch(url).then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         return Promise.reject('error 404');
//       }
//     });
//     //   .catch(error => console.log(error));
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const fields = 'fields=name,capital,population,flags,languages';

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}${name}?${fields}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }
export { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
