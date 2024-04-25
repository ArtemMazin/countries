import * as React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../utils/url-config';
import styles from './logo.module.css';

export function Logo() {
  return (
    <Link to={URL.MAIN} className={styles.logo}>
      <h1>Where in the world</h1>
    </Link>
  );
}
