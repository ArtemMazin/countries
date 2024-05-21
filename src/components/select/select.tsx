import * as React from 'react';
import styles from './select.module.css';

export function Select() {
  return (
    <select className={styles.select}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
