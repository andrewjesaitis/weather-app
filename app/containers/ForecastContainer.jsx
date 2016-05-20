var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var LocationWidgetContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      forecast: '',
    };
  },
  componentDidMount() {
    var location =  this.props.routeParams.location;
    api.getForecastWeather(location)
       .then(function(data) {
         this.setState({
           forecast: data,
         });
         this.state.isLoading = false;
       }.bind(this));
  },
  render() {
    console.log(this.state);
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
      />
    );
  },
});

module.exports = LocationWidgetContainer;
