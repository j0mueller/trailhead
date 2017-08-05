import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';



document.addEventListener('DOMContentLoaded', function() {
  let mapPage = document.getElementById('map');
  if (mapPage) {
    ReactDOM.render(
      <App />,
      mapPage
    )
  }

  let initialHikes = document.getElementById('initialHikes')
  

})
