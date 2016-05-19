var React = require('react');

var Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
      <div className="main-container">{this.props.children}</div>
    );
  },
});

module.exports = Main;

