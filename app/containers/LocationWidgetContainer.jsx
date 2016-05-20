var React = require('react');
var LocationWidget = require('../components/LocationWidget');
var api = require('../helpers/api');

var LocationWidgetContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      location: '',
    };
  },
  componentDidMount() {
    return null;
  },
  handleSubmitLocation(e) {
    e.preventDefault();
    api.getCurrentWeather(this.state.location);
  },
  handleUpdateLocation(e) {
    this.setState({
      location: e.target.value,
    });
  },
  render() {
    return (
      <LocationWidget
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location}
      />
    );
  },
});

module.exports = LocationWidgetContainer;
