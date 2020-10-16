import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableHeader.module.css';
import TableRow from '../TableRow/TableRow';

const TableHeader = ({ columns }) => {
  return(
    <div className={styles.tableHeader}>
      <TableRow columns={columns} />
    </div>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.number,
};

export default TableHeader;
