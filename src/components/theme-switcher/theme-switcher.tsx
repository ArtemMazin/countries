import * as React from 'react';
import styles from './theme-switcher.module.css';
import { Moon, Sun } from 'lucide-react';

interface IToggleTheme {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

export function ThemeSwitcher({ toggleTheme, theme }: IToggleTheme) {
  return (
    <div className={styles.switcher} onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <Moon /> Dark Mode
        </>
      ) : (
        <>
          <Sun /> Light Mode
        </>
      )}
    </div>
  );
}
