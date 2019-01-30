// USING google-maps-react
// URL: https://www.npmjs.com/package/google-maps-react

import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = "YOUR API KEY"

export class MapContainer extends Component {
  mapClicked(mapProps, map, clickEvent) {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    this.props.updateLocation(lat, lng);
  }

  render() {
    return (
      <Map google={this.props.google} initialCenter={this.props.markerLocation} 
           onClick={this.mapClicked.bind(this)} zoom={14} style={{height: "90vh"}}>
        <Marker onClick={this.onMarkerClick} position={this.props.markerLocation} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)