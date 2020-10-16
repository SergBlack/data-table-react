import React from 'react';
import styles from './MainPage.module.css';
import Table from '../../components/Table/Table';

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <header className={styles.mainPageHeader}>
        <h1>react-editable-table</h1>
      </header>
      <main className={styles.mainPageBody}>
        <Table />
      </main>
      <footer className={styles.mainPageFooter}>
        2020 Moscow
      </footer>
    </div>
  )
};

export default MainPage;
