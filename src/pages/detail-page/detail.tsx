import * as React from 'react';
import styles from './detail.module.css';
import { useAppSelector } from '../../redux-hooks';
import { getDetail } from '../../services/detail/detail-selectors';

export function DetailPage() {
  const country = useAppSelector(getDetail);

  return <div>{country && country.name.common}</div>;
}
