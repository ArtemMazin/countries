import * as React from 'react';
import styles from './search.module.css';
import { SearchIcon } from 'lucide-react';

export function Search({ setSearchQuery }: { setSearchQuery: (value: string) => void }) {
  return (
    <label className={styles.search_container}>
      <SearchIcon className={styles.search_icon} />
      <input
        type="search"
        placeholder="Search for a country..."
        className={styles.search_input}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </label>
  );
}
