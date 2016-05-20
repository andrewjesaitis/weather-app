var React = require('react');
var LocationWidgetContainer = require('../containers/LocationWidgetContainer');
var styles = require('../styles/styles');

function Home() {
  return (
    <div className="row" style={styles.verticalCenter}>
      <div className="col-sm-6 col-sm-offset-3 text-center" >
        <h1 style={{color: "white"}}>Enter a city</h1>
        <LocationWidgetContainer />
      </div>
    </div>
  );
}

module.exports = Home;
