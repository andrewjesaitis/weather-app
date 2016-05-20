var React = require('react');
var styles = require('../styles/styles');

function Loading() {
  return (
    <div style={styles.loading}>
      <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

module.exports = Loading;
