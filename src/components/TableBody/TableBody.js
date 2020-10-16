import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableBody.module.css';
import TableRow from '../TableRow/TableRow';

const TableBody = ({ columns, rows }) => {
  let bodyRows = [];
  for (let i = 1; i <= rows; i += 1) {
    bodyRows = [...bodyRows, i];
  }

  return(
    <div className={styles.body}>
      {
        bodyRows.map(column => (
          <div className={styles.rowContainer} key={column}>
            <TableRow columns={columns} />
          </div>
        ))
      }
    </div>
  );
};

TableBody.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
};

export default TableBody;
