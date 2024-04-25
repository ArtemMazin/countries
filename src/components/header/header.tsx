import * as React from 'react';
import styles from './header.module.css';
import { Logo } from '../logo/logo';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

export function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}
