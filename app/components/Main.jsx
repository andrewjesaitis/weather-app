var React = require('react');
var styles = require('../styles/styles');
var LocationWidgetContainer = require('../containers/LocationWidgetContainer');

var Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
      <div className="main-container" style={styles.mainComponent}>
        <Navbar />
        {this.props.children}
      </div>
    );
  },
});

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">weather-app <i className="wi wi-day-lightning"></i></a>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <LocationWidgetContainer />
        </div>
      </div>
    </nav>
  );
}

module.exports = Main;

