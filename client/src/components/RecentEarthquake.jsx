import React from 'react';
import Map from './Map';
// import Earthquakes from './Earthquakes';

class RecentEarthQuake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: []
    };
  }

  componentWillMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
      .then(res => {
        res.json()
        .then(data => {
          let earthquakes = data.features;
          this.setState({earthquakes});
        });
      })
      .catch(err => {
        console.log(err, 'Error in fetch');
      });
  }

  render() {
    return (
      <Map earthquakes={this.state.earthquakes}/>
    );
  }
}

export default RecentEarthQuake;
