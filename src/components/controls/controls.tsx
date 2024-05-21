import * as React from 'react';
import { Search } from '../search/search';
import { Select } from '../select/select';
import styles from './controls.module.css';

export function Controls() {
  return (
    <div className={styles.controls}>
      <Search />
      <Select />
    </div>
  );
}
