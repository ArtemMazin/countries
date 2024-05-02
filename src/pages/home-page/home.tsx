import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { setCountries } from '../../services/countries/countries-selectors';
import { getCountries } from '../../services/countries/countries-slice';

export function HomePage() {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(setCountries);

  React.useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <ul>
      {countries &&
        countries.length > 0 &&
        countries.map((item) => <li key={item.name.official}>{item.name.official}</li>)}
    </ul>
  );
}
