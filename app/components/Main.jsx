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
        <div style={styles.vcenter}>
          {this.props.children}
        </div>
      </div>
    );
  },
});

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">weather-app <i className="wi wi-day-lightning"></i></a>
        </div>
        <div className="navbar-form navbar-right" role="search">
          <LocationWidgetContainer />
        </div>
      </div>
    </nav>
  );
}

module.exports = Main;

