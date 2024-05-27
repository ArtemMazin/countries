import * as React from 'react';
import styles from './detail.module.css';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { getBorders, getDetail } from '../../services/detail/detail-selectors';
import { ICountry } from '../../utils/interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountriesByCode, getCountryByName } from '../../services/detail/detail-slice';
import { MoveLeft } from 'lucide-react';

export function DetailPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const country: ICountry = useAppSelector(getDetail);
  const borders = useAppSelector(getBorders);

  const countryName = useParams()['name'];

  React.useEffect(() => {
    countryName && dispatch(getCountryByName(countryName.toLowerCase()));
  }, [countryName]);

  React.useEffect(() => {
    country && country.borders && dispatch(getCountriesByCode(country.borders));
  }, [country]);

  const handleClickCountry = (name: string) => {
    dispatch(getCountryByName(name.toLowerCase()));
    navigate(`/country/${name.toLowerCase()}`);
  };

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
                  <b>Native Name:</b> {country.nativeName}
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
                  <b>Capital:</b> {country.capital}
                </li>
              </ul>
              <ul className={styles.list}>
                <li>
                  <b>Top Level Domain:</b> {country.tld[0]}
                </li>
                <li>
                  <b>Currency:</b> {country.currency}
                </li>
                <li>
                  <b>Languages:</b> {country.languages.join(', ')}
                </li>
              </ul>
            </div>
            <div className={styles.borders_wrapper}>
              <b style={{ textWrap: 'nowrap' }}>Border Countries:</b>
              <ul className={styles.borders_list}>
                {country.borders && borders ? (
                  borders.map((border: string) => (
                    <li key={border}>
                      <button
                        onClick={() => handleClickCountry(border)}
                        className={styles.border_button}
                      >
                        {border}
                      </button>
                    </li>
                  ))
                ) : (
                  <span>There is no border countries</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
