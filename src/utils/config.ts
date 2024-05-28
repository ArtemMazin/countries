const BASE_URL = 'http://localhost:3000/';

export const ALL_COUNTRIES = `${BASE_URL}countries`;

export const COUNTRY_BY_NAME = (name: string) => `${BASE_URL}country/${name}`;

export const BORDERS = `${BASE_URL}borders`;
