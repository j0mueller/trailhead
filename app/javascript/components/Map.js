import React, { Component } from 'react';
// import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const mapContainer = <div className='mapContainer'></div>

    // const markers = this.props.markers.map((marker, i) => {
    //   const marker = {
    //     position: {
    //       lat: marker.location.lat,
    //       lon: marker.location.lon
    //     }
    //   }
    //   return <Marker key={i} {...marker} />
    // })
    return (

      <div>
        This is the map component
        <li>Props passed down</li>
        <li>Latitude: {this.props.location.latitude}</li>
        <li>Longitude: {this.props.location.longitude}</li>
      </div>
      // <GoogleMapLoader
      //   containerElement = { mapContainer }
      //   googleMapElement = {
      //     <GoogleMap
      //       defaultZoom={15}
      //       defaultCenter={this.props.location}
      //       options={{streetViewControl: false, mapTypeControl: false}}>
      //       { markers }
      //     </GoogleMap>
      //   }
      // />

    )
  }
}

export default Map;
