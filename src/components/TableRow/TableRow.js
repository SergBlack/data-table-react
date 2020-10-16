import React from 'react';
import styles from './TableRow.module.css';
import TableCell from '../TableCell/TableCell';
import PropTypes from 'prop-types';

const TableRow = ({ columns }) => {
  let cells = [];
  for (let i = 1; i <= columns; i += 1) {
    cells = [...cells, i];
  }
  return(
    <div className={styles.tableRow}>
      {
        cells.map(cell => <TableCell key={cell} />)
      }
    </div>
  );
};

TableRow.propTypes = {
  columns: PropTypes.number,
};

export default TableRow;
