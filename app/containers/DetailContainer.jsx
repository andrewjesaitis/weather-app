var React = require('react');
var PropTypes = React.PropTypes;
var Detail = require('../components/Detail');
var api = require('../helpers/api');

var DetailContainer = React.createClass({
  propTypes: {},
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      weather: {},
    };
  },
  componentDidMount() {
    var location = this.props.routeParams.location;
    api.getForecastWeather(location, 5)
       .then(function(data) {
         this.setState({
           isLoading: true,
         });
       }.bind(this));
  },
  render() {
    return (
      <Detail
        isLoading={this.state.isLoading}
      />
    );
  },
});

module.exports = DetailContainer;
