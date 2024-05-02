import * as React from 'react';
import styles from './header.module.css';
import { Logo } from '../logo/logo';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { switchTheme } from '../../services/theme/theme-slice';
import { switchedTheme } from '../../services/theme/theme-selectors';

export function Header() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(switchedTheme);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => dispatch(switchTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Logo />
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      </div>
    </header>
  );
}
