import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableCell.module.css';

const TableCell = () => {
  return(
    <div className={styles.cell}>
      {'value'}
    </div>
  );
};

TableCell.propTypes = {
  value: PropTypes.string,
  width: PropTypes.number,
};

export default TableCell;
