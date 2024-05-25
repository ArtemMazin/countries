import * as React from 'react';
import styles from './detail.module.css';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { getDetail } from '../../services/detail/detail-selectors';
import { IDetailCountry } from '../../utils/interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryByName } from '../../services/detail/detail-slice';
import { MoveLeft } from 'lucide-react';

export function DetailPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const country: IDetailCountry = useAppSelector(getDetail);

  const countryName = useParams()['name'];

  React.useEffect(() => {
    !country && countryName && dispatch(getCountryByName(countryName.toLowerCase()));
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)} className={styles.button}>
        <MoveLeft />
        Back
      </button>

      {country && (
        <div className={styles.wrapper}>
          <img src={country.flags.png} alt={country.flags.alt} className={styles.flag} />
          <div>
            <h1 className={styles.title}>{country.name.official}</h1>
            <div className={styles.list_group}>
              <ul className={styles.list}>
                <li>
                  <b>Native Name:</b>{' '}
                  {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
                </li>
                <li>
                  <b>Population:</b> {country.population}
                </li>
                <li>
                  <b>Region:</b> {country.region}
                </li>
                <li>
                  <b>Sub Region:</b> {country.subregion}
                </li>
                <li>
                  <b>Capital:</b> {country.capital[0]}
                </li>
              </ul>
              <ul className={styles.list}>
                <li>
                  <b>Top Level Domain:</b> {country.tld[0]}
                </li>
                <li>
                  <b>Currency:</b> {country.currencies[Object.keys(country.currencies)[0]].name}
                </li>
                <li>
                  <b>Languages:</b> {country.languages[Object.keys(country.languages)[0]]}
                </li>
              </ul>
            </div>
            <div className={styles.borders_wrapper}>
              <b>Border Countries:</b>
              <ul className={styles.list_borders}>
                {country.borders &&
                  country.borders.map((border) => <li key={border}>{border} </li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
