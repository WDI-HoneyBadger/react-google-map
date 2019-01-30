import React, { Component } from 'react';
import './App.css';
import { MapContainer } from './components/MapContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      markerLocation: {
        lat: 24.716408358798944,
        lng: 46.6750039301636
      }
    }
  }

  updateLocation(lat, lng){
    this.setState({
      markerLocation: {
        lat: lat,
        lng: lng
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Lat: {this.state.markerLocation.lat}</p>
          <p>Lng: {this.state.markerLocation.lng}</p>
        </header>
        <MapContainer google={window.google} 
          markerLocation={this.state.markerLocation} 
          updateLocation={this.updateLocation.bind(this)} />
      </div>
    );
  }
}

export default App;
