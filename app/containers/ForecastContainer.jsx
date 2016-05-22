var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');
var utils = require('../helpers/utils');
var axios = require('axios');

function puke(obj) {
  return JSON.stringify(obj, null, 2);
}

var ForecastContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.object.isRequired,
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      forecast: [],
      current: {},
    };
  },
  componentDidMount() {
    var location = this.props.routeParams.location;
    axios.all([api.getCurrentWeather(location),
               api.getForecastWeather(location, 5)])
       .then(axios.spread(function(currentData, forecastData) {
         this.setState({
           current: utils.normalizeCurrentData(currentData),
           forecast: utils.normalizeForecastData(forecastData),
           isLoading: false,
         })}.bind(this)));
  },
  render() {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          current={this.state.current}
          forecast={this.state.forecast}
          location={this.props.routeParams.location}
        />
      </div>
    );
  },
});

module.exports = ForecastContainer;
