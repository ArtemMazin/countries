import * as React from 'react';
import styles from './header.module.css';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return <header className={styles.header}>header</header>;
}
