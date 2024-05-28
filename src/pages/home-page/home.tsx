import * as React from 'react';
import styles from './home.module.css';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { setCountries } from '../../services/countries/countries-selectors';
import { getCountries } from '../../services/countries/countries-slice';
import { Country } from '../../components/country/country';
import { Controls } from '../../components/controls/controls';
import { ICountry, IRegion } from '../../utils/interfaces';

export function HomePage() {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(setCountries);

  const [filteredCountries, setFilteredCountries] = React.useState<ICountry[]>(countries);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [region, setRegion] = React.useState<IRegion['region']>('All');

  React.useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          (country.region === region || region === 'All') &&
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
              item && (
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
