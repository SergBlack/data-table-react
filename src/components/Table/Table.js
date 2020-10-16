import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';
import TableFooter from '../TableFooter/TableFooter';

const Table = ({ columns, rows, width }) => {
  return(
    <div className={styles.table} style={{ width: width }}>
      <div className={styles.tableContainer}>
        <TableHeader columns={columns} />
        <TableBody columns={columns} rows={rows} />
        <TableFooter />
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  width: PropTypes.number,
};

export default Table;
