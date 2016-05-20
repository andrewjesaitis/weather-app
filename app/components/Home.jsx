var React = require('react');
var LocationWidget = require('./LocationWidget');
var styles = require('../styles/styles');

function Home() {
  return (
    <div className="row" style={styles.verticalCenter}>
      <div className="col-sm-6 col-sm-offset-3 text-center" >
        <h1 style={{color: "white"}}>Enter a city</h1>
        <LocationWidget />
      </div>
    </div>
  );
}

module.exports = Home;
