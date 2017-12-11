import { connect } from 'react-redux'
import Map from '../components/Map';
import { mapBoundsChanged, fetchGpsPoints } from '../actions/index'

const mapStateToProps = state => {
  return {
    gpsPoints: state.gpsPointsApi.gpsPointsPures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mapBoundsChanged: (bounds) => {
      console.log(bounds);
      dispatch(mapBoundsChanged(bounds.bounds));
    },
    reloadGpsPoints: () => {
      dispatch(fetchGpsPoints())
    }

  }

}

const MapContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Map)

export default MapContainer
