var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');


function puke(obj) {
  return JSON.stringify(obj, null, 2);
}

function Forecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <pre>{puke(props.forecast)}</pre>
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

module.exports = Forecast;
