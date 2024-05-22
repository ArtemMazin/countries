const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,region,flags,population`;

export const COUNTRY_BY_NAME = (name: string) => `${BASE_URL}name/${name}`;
