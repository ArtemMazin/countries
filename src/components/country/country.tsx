import * as React from 'react';
import styles from './country.module.css';
import { ICountry } from '../../utils/interfaces';

export function Country({ item }: { item: ICountry }) {
  return (
    <div className={styles.country}>
      <img src={item.flags.png} alt={item.flags.alt} className={styles.flag} />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.name.common}</h3>
        <p>
          <b>Population: </b>
          {item.population}
        </p>
        <p>
          <b>Region: </b>
          {item.region}
        </p>
        <p>
          <b>Capital: </b>
          {item.capital[0]}
        </p>
      </div>
    </div>
  );
}
