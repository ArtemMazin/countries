import * as React from 'react';
import styles from './home.module.css';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { setCountries } from '../../services/countries/countries-selectors';
import { getCountries } from '../../services/countries/countries-slice';
import { Country } from '../../components/country/country';
import { Controls } from '../../components/controls/controls';
import { ICountry } from '../../utils/interfaces';

export function HomePage() {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(setCountries);

  const [filteredCountries, setFilteredCountries] = React.useState<ICountry[]>(countries);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [region, setRegion] = React.useState('');

  React.useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          (country.region === region || region === '') &&
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery, region, countries]);

  React.useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <Controls setSearchQuery={setSearchQuery} setRegion={setRegion} />

      <ul className={styles.list}>
        {countries &&
          countries.length > 0 &&
          filteredCountries.map((item) => {
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
    </>
  );
}
