import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GOOGLE_MAPS_JS_API_KEY from '../config/config';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_JS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`}} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log(props.earthquakes);
  return(
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 0, lng: 0}}>
    <Marker position={{ lat: 0, lng: 0}} />
  ></GoogleMap>
)});

export default Map;
