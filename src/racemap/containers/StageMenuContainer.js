import { connect } from 'react-redux'
import StageDialog from '../components/StageMenu'
import { fetchStages, openStageMenu, fetchGpsPoints, selectedStage } from '../actions/index'

const mapStateToProps = state => {
  return {
    open: state.stageMenuReducer.open,
    anchorEl: state.stageMenuReducer.anchorEl,
    stages: state.statgesApi.stages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // handling the oppenning of the
    handleClick: event => {
      dispatch(openStageMenu(event));
    },
    updateStageId: stageId => {
      dispatch(selectedStage(stageId))
    },

    requestGpsPoints: () => {
      dispatch(fetchGpsPoints());

    },
    fetchStages: () => {
      dispatch(fetchStages());
    }

  }
}

const StageMenuContainer = connect(mapStateToProps, mapDispatchToProps)(StageDialog);
export default StageMenuContainer;

