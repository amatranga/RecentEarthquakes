import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GOOGLE_MAPS_JS_API_KEY from '../config/config';

const findCenter = (geoLocationsArray, idx) => {
  let total = 0;
  let length = geoLocationsArray.length;
  geoLocationsArray.forEach(location => {
    total += location.geometry.coordinates[idx];
  });
  return total / length;
}

const click = () => {
  console.log('why');
}

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
  return(
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: findCenter(props.earthquakes, 1), lng: findCenter(props.earthquakes, 0)}} 
  >
    {props.earthquakes.map((earthquake, idx) => 
      <Marker
        key={idx}
        position={{ lat: earthquake.geometry.coordinates[1], lng: earthquake.geometry.coordinates[0]}} 
        defaultLabel={'' + earthquake.properties.mag}
      />
    )}
  ></GoogleMap>
)});

export default Map;
