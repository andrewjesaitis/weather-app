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
    <div style={styles.verticalCenter}>
      <div className="clearfix row">
        {props.forecast.list.map(function (day, index) {
          return <ForecastDayContainer index={index} day={day} key={day.dt} />;
        })}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
};

module.exports = Forecast;
