import { ALL_COUNTRIES } from '../utils/config';
import { ICountries } from '../utils/interfaces';

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

export function getCountriesApi(): Promise<ICountries[]> {
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
