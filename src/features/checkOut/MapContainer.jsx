import React, { Component } from "react";
import { Map,  GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "600px", height: "200px" }}
        zoom={10}
        initialCenter={{
          lat: 12.95665144009087,
          lng: 77.71046827784936,
        }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyApEKKGk7rKSnfSdY5Ujqg2mpzd0dQR-D4",
})(MapContainer);

