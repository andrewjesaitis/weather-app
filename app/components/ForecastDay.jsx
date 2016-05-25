import React, { PropTypes } from 'react';
import * as styles from '../styles/styles';

function ForecastDay({ containerClass, iconClass, onClick, caption }) {
  return (
    <div className={containerClass} onClick={onClick} style={styles.forcastDay}>
      <div><i className={iconClass}></i></div>
      <br />
      <h4>{caption}</h4>
    </div>
  );
}

ForecastDay.propTypes = {
  containerClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

export default ForecastDay;
