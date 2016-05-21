var React = require('react');
var PropTypes = React.PropTypes;
var Detail = require('../components/Detail');
var api = require('../helpers/api');
var utils = require('../helpers/utils');

function puke(obj) {
  return JSON.stringify(obj, null, 2);
}

var DetailContainer = React.createClass({
  propTypes: {},
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      weatherCode: null,
      conditions: {},
    };
  },
  componentDidMount() {
    var location = this.props.routeParams.location;
    api.getCurrentWeather(location)
       .then(function(data) {
         this.setState({
           weatherCode: data.weather[0].id,
           weatherDescription: data.weather[0].description,
           temperature: data.main.temp,
           pressure: data.main.pressure,
           humidity: data.main.humidity,
           sunrise: utils.formatUTCTime(data.sys.sunrise),
           sunset: utils.formatUTCTime(data.sys.sunset),
           wind: data.wind,
           isLoading: false,
         });
       }.bind(this));
  },
  render() {
    return (
      <div>
      <Detail
        isLoading={this.state.isLoading}
        iconClass={utils.getWeatherIconClass(this.state.weatherCode)}
        weatherDescription={this.state.weatherDescription}
        temperature={this.state.temperature}
        pressure={this.state.pressure}
        weatherDescription={this.state.weatherDescription}
        humidity={this.state.humidity}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        wind={this.state.wind}
      />
      </div>
    );
  },
});

module.exports = DetailContainer;

