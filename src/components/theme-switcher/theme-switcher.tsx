import * as React from 'react';
import styles from './theme-switcher.module.css';

interface IToggleTheme {
  toggleTheme: () => void;
}

export function ThemeSwitcher({ toggleTheme }: IToggleTheme) {
  return (
    <div className={styles.switcher} onClick={toggleTheme}>
      Dark Mode
    </div>
  );
}
