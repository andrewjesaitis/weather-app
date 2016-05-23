var React = require('react');
var styles = require('../styles/styles');
var LocationWidgetContainer = require('../containers/LocationWidgetContainer');

function Main(props) {
  return (
    <div className="main-container" style={styles.mainComponent}>
      <Navbar />
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            weather-app <i className="wi wi-day-lightning"></i>
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <LocationWidgetContainer />
        </div>
      </div>
    </nav>
  );
}

module.exports = Main;

