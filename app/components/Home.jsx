import React from 'react';
import LocationWidgetContainer from '../containers/LocationWidgetContainer';

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

export default Home;
