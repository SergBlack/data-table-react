import React from 'react';
import styles from './TablePagination.module.css';

const TablePagination = () => {
  return(
    <div className={styles.pagination}>
      <button>Prev</button>
      1 2 3 4
      <button>Next</button>
    </div>
  );
};

export default TablePagination;
