import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps'
/*
* Use this component as a launching-pad to build your functionality.
*
*/

export default class YourComponent extends Component {
  render() {
    return (
      <GoogleMaps
      apiKey={"AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"}
      style={{height: "400px", width: "100%"}}
      zoom={6}
      center={{lat: 37.4224764, lng: -122.0842499}}
      markers={{lat: 37.4224764, lng: -122.0842499}} //optional
      />
    );
  }
}