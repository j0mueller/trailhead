import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from '../components/Map';
import Places from '../components/Places';

class App extends Component {

  componentDidMount(){
    console.log('componentDidMount')
  }

  render(){
    const location = {
      lat: 42.3601,
      lon: 71.0589
    }

    const markers = [
      {
        location: {
          lat: 42.3601,
          lon: 71.0589
        }
      }
    ]

    return (
      <div className="small-6 small-centered columns">
        This is the REACT APP!
        <div className='mapdiv'>
          <Map location={location} markers={markers} />
        </div>
        <Places />
      </div>
    )
  }
}

export default App;
