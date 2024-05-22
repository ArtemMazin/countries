import * as React from 'react';
import styles from './select.module.css';

export function Select({ setRegion }: { setRegion: (value: string) => void }) {
  return (
    <div className={styles.select_wrapper}>
      <select className={styles.select} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
