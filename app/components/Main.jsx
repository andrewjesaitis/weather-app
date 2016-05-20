var React = require('react');
var styles = require('../styles/styles');
var LocationWidget = require('./LocationWidget');

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <form className="navbar-form navbar-right" role="search">
          <LocationWidget />
        </form>
      </div>
    </nav>
  );
}

var Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render: function() {
    return (
      <div className="main-container" style={styles.bg}>
        <Navbar />
       {this.props.children}
      </div>
    );
  },
});

module.exports = Main;

