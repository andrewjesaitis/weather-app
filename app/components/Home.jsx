var React = require('react');
var LocationWidgetContainer = require('../containers/LocationWidgetContainer');
var styles = require('../styles/styles');

function Home() {
  return (
    <div className="row">
      <div className="col-xs-12 text-center">
        <h2>Enter a city</h2>
        <LocationWidgetContainer />
      </div>
    </div>
  );
}

module.exports = Home;
