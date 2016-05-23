var React = require('react');
var PropTypes = React.PropTypes;
var Detail = require('../components/Detail');
var utils = require('../helpers/utils');

var DetailContainer = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: false,
      weatherCode: null,
      day: {},
      title: '',
    };
  },
  componentWillMount() {
    var title;
    var index = this.props.location.state.index;
    if (index >= 0) {
      title = `Forcast for ${utils.formatDateString(this.props.location.state.day.dt)}`;
    } else {
      title = 'Current Conditions';
    }
    this.setState({ title });
  },
  onClose(e) {
    e.preventDefault();
    this.context.router.push(`/forecast/${this.props.location.state.city}`);
  },
  render() {
    return (
      <div>
        <Detail
          isLoading={this.state.isLoading}
          handleClose={this.onClose}
          title={this.state.title}
          iconClass={utils.getWeatherIconClass(this.props.location.state.day.weatherCode)}
          day={this.props.location.state.day}
        />
      </div>
    );
  },
});

module.exports = DetailContainer;
