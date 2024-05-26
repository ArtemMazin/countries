import { ALL_COUNTRIES, COUNTRY_BY_CODE, COUNTRY_BY_NAME } from '../utils/config';
import { ICountry } from '../utils/interfaces';

export const checkReponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

interface IRequest {
  url: string;
  options?: RequestInit;
}

export async function request<T>({ url, options }: IRequest): Promise<T> {
  const res = await fetch(url, options);
  return checkReponse(res);
}

export function getCountriesApi(): Promise<ICountry[]> {
  return request({
    url: ALL_COUNTRIES,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}

export function getCountryByNameApi(name: string): any {
  return request({
    url: COUNTRY_BY_NAME(name),
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}

export function getCountriesByCodeApi(codes: string[]): any {
  return request({
    url: COUNTRY_BY_CODE(codes),
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}
