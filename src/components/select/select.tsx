import * as React from 'react';
import styles from './select.module.css';
import { IRegion } from '../../utils/interfaces';

export function Select({ setRegion }: { setRegion: (value: IRegion['region']) => void }) {
  return (
    <div className={styles.select_wrapper}>
      <select
        className={styles.select}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setRegion(e.target.value as IRegion['region'])
        }
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
