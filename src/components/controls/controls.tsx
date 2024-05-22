import * as React from 'react';
import { Search } from '../search/search';
import { Select } from '../select/select';
import styles from './controls.module.css';

export function Controls({
  setSearchQuery,
  setRegion,
}: {
  setSearchQuery: (value: string) => void;
  setRegion: (value: string) => void;
}) {
  return (
    <div className={styles.controls}>
      <Search setSearchQuery={setSearchQuery} />
      <Select setRegion={setRegion} />
    </div>
  );
}
