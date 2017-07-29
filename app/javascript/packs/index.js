import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function() {
  let reactElement = document.getElementById('app');
  if (reactElement) {
    ReactDOM.render(
      <App />,
      reactElement
    )
  }
})
