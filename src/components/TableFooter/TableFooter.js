import React from 'react';
import styles from './TableFooter.module.css';
import TablePagination from '../TablePagination/TablePagination';

const TableFooter = () => {
  return(
    <div className={styles.tableFooter}>
      <TablePagination />
    </div>
  );
};

export default TableFooter;
