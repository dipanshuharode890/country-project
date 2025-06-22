import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

// HTTP get method

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
};


// HTTP get method for indivisual country full information

// export const getCountryFullData = (name) => {
//     return api.get(
//         `/name/${name}?fullText=true&fields=name,population,region, subregion, capital, tld, currencies, languages, borders, flags`
//     );
// };


export const getCountryFullData = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?
fullText=true`);
    const data = await response.json();
    return { status: response.status, data: data };
};


// In api/postApi.js
// export const getCountryFullData = async (countryName) => {
//   try {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return { status: response.status, data: data };
//   } catch (error) {
//     console.error('Error fetching country data:', error);
//     return { status: 500, data: null, error: error };
//   }
// };