import * as React from 'react';
import { Search } from '../search/search';
import { Select } from '../select/select';
import styles from './controls.module.css';
import { IRegion } from '../../utils/interfaces';

export function Controls({
  setSearchQuery,
  setRegion,
}: {
  setSearchQuery: (value: string) => void;
  setRegion: (value: IRegion['region']) => void;
}) {
  return (
    <div className={styles.controls}>
      <Search setSearchQuery={setSearchQuery} />
      <Select setRegion={setRegion} />
    </div>
  );
}
