import * as React from 'react';
import styles from './search.module.css';

export function Search() {
  return (
    <label className={styles.search_container}>
      <input type="search" placeholder="Search for a country..." className={styles.search_input} />
    </label>
  );
}
