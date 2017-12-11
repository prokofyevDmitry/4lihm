import { connect } from 'react-redux'
import StageDialog from '../components/StageDialog'
import { startLiveLogging } from '../actions/index';
const mapStateToProps = state => {
  return {
    open: state.stageDialogReducer.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRequestClose: (departure, arrival) => {
      dispatch(startLiveLogging(dispatch, departure, arrival))
    }
  }
}

const StageDialogContainer = connect(mapStateToProps, mapDispatchToProps)(StageDialog);
export default StageDialogContainer;
