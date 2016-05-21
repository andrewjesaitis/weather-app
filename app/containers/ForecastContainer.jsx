var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

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
      forecast: {},
    };
  },
  componentDidMount() {
    var location = this.props.routeParams.location;
    api.getForecastWeather(location, 5)
       .then(function(data) {
         this.setState({
           forecast: data,
         });
         this.setState({
           isLoading: false,
         });
       }.bind(this));
  },
  render() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
      />
    );
  },
});

module.exports = ForecastContainer;
