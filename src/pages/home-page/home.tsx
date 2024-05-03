import * as React from 'react';
import styles from './home.module.css';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { setCountries } from '../../services/countries/countries-selectors';
import { getCountries } from '../../services/countries/countries-slice';
import { Country } from '../../components/country/country';

export function HomePage() {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(setCountries);

  React.useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <ul className={styles.list}>
      {countries &&
        countries.length > 0 &&
        countries.map((item) => {
          return (
            item &&
            item.capital &&
            item.capital.length > 0 &&
            item.region &&
            item.name &&
            item.name.common &&
            item.population && (
              <li key={item.name.official}>
                <Country item={item} />
              </li>
            )
          );
        })}
    </ul>
  );
}
