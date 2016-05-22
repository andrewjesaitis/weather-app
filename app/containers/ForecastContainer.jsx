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
    var city = this.props.routeParams.city;
    axios.all([api.getCurrentWeather(city),
               api.getForecastWeather(city, 5)])
       .then(axios.spread(function(currentData, forecastData) {
         this.setState({
           current: utils.normalizeCurrentData(currentData),
           forecast: utils.normalizeForecastData(forecastData),
           isLoading: false,
         });
       }.bind(this)));
  },
  render() {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          current={this.state.current}
          forecast={this.state.forecast}
          city={this.props.routeParams.city}
        />
      </div>
    );
  },
});

module.exports = ForecastContainer;
