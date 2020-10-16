import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <header className={styles.mainPageHeader}>
        <h1>react-editable-table</h1>
      </header>
      <main className={styles.mainPageBody}>
        <table>
          <tr>
            <th>Header cell 1</th>
            <th>Header cell 2</th>
            <th>Header cell 3</th>
          </tr>
          <tr>
            <td>Data cell 1 row 1</td>
            <td>Data cell 2 row 1</td>
            <td>Data cell 3 row 1</td>
          </tr>
          <tr>
            <td>Data cell 1 row 2</td>
            <td>Data cell 2 row 2</td>
            <td>Data cell 3 row 2</td>
          </tr>
        </table>
      </main>
      <footer className={styles.mainPageFooter}>
        2020 Moscow
      </footer>
    </div>
  )
};

export default MainPage;
