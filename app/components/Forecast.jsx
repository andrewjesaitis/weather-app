var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var ForecastDayContainer = require('../containers/ForecastDayContainer');
var styles = require('../styles/styles');

function Forecast(props) {
  if (props.isLoading === true) {
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
      <div className="row" style={styles.currentIcon}>
        <ForecastDayContainer
          city={props.city}
          day={props.current} />
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center">
          <h3>Five Day Forecast</h3>
        </div>
      </div>
      <br />
      <div className="row">
        {props.forecast.map(function (day, index) {
          return (
            <ForecastDayContainer
              city={props.city}
              index={index}
              day={day}
              key={day.dt}
            />
          )
         })}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.array.isRequired,
};

module.exports = Forecast;
