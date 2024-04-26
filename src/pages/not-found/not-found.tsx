import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>Страница не найдена</p>
      <button onClick={() => navigate(-1)} className={styles.button}>
        Назад
      </button>
    </div>
  );
};

export default NotFound;
