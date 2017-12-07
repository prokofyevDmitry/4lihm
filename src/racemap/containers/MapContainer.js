import { connect } from 'react-redux'
import Map from '../components/Map';

const mapStateToProps = state => {
  return {
    gpsPoints: state.globalState.gpsPoints
  }
}

const MapContainer = connect(
  mapStateToProps
)(Map)

export default MapContainer
