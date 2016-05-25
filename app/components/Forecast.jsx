import React, { PropTypes } from 'react';
import Loading from './Loading';
import ForecastDayContainer from '../containers/ForecastDayContainer';
import * as styles from '../styles/styles';

function Forecast({ isLoading, city, current, forecast }) {
  if (isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center">
          <h2>Current Conditions</h2>
        </div>
      </div>
      <br />
      <div className="row" style={styles.currentIcon}>
        <ForecastDayContainer
          city={city}
          day={current}
        />
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center">
          <h3>Five Day Forecast</h3>
        </div>
      </div>
      <br />
      <div className="row">
        {forecast.map((day, index) => (
          <ForecastDayContainer
            city={city}
            index={index}
            day={day}
            key={day.dt}
          />
          )
         )}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

export default Forecast;
