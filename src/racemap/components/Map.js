import React, { Component, PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => (<div>
                                         { text }
                                       </div>);

class Polyline extends PureComponent {

  componentWillUpdate() {
    this.line.setMap(null)
  }
  componentWillUnmount() {
    this.line.setMap(null)
  }

  getPaths() {
    const {origin, destination} = this.props

    return [
      {
        lat: Number(origin.lat),
        lng: Number(origin.lng)
      },
      {
        lat: Number(destination.lat),
        lng: Number(destination.lng)
      }
    ];
  }

  render() {
    const Polyline = this.props.maps.Polyline

    const renderedPolyline = this.renderPolyline()
    const paths = {
      path: this.getPaths()
    }

    this.line = new Polyline(Object.assign({}, renderedPolyline, paths))

    this.line.setMap(this.props.map)

    return null
  }
  renderPolyline() {
    return {
      geodesic: true,
      strokeColor: this.props.color || '#ffffff',
      strokeOpacity: 1,
      strokeWeight: 4
    }
  }
}



class Map extends Component {

  /**
   * setting default center, zoom and empty array for gpsPoints
   */
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 5,
    gpsPoints: []
  };


  constructor(props) {
    super(props);
    this.state = {};
  }

  updateMapBounds = (bounds) => {
    this.props.mapBoundsChanged(bounds);
    this.props.reloadGpsPoints();
  }

  render() {
    console.log('in map');
    console.log(this.props.gpsPoints);
    console.log(typeof this.props.gpsPoints);
    const Markers = this.props.gpsPoints.map((gpsPoint, index) => (
      <AnyReactComponent key={ index }
                         lat={ parseFloat(gpsPoint.lat) }
                         lng={ parseFloat(gpsPoint.lng) } />));

    // constructing polylines for each point
    const polylines = []
    if (this.props.gpsPoints.length > 1 && this.state.mapLoaded)
      for (let _i = 1; _i < this.props.gpsPoints.length; _i++)
        polylines.push(<Polyline key={ _i }
                                 map={ this.state.map }
                                 maps={ this.state.maps }
                                 destination={ this.props.gpsPoints[_i] }
                                 origin={ this.props.gpsPoints[_i - 1] } />);


    return (
      <GoogleMapReact bootstrapURLKeys={ { key: "AIzaSyA7-7O7ojeYIOmsfIh_ajX1DND0n8UAomA", language: 'fr', } }
                      onGoogleApiLoaded={ ({map, maps}) => {
                                            this.setState({
                                              map: map,
                                              maps: maps,
                                              mapLoaded: true
                                            })
                                          } }
                      onChange={ this.updateMapBounds }
                      yesIWantToUseGoogleMapApiInternals
                      defaultCenter={ this.props.center }
                      defaultZoom={ this.props.zoom }>
        { Markers }
        { polylines }
      </GoogleMapReact>
      );
  }
}


export default Map;
