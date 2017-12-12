
import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import { BtnLaunchClicked } from '../actions/index';

let BtnLaunch = ({onClick, liveLogging, disabled}) => {
  return <Button raised
                 onClick={ onClick }
                 disabled={ disabled }>
           { (liveLogging ? "Arrêter" : "Demarrer") } un element sur la carte
         </Button>

}

const mapStateToProps = state => {
  return {
    liveLogging: state.globalState.liveLogging,
    disabled: state.btnLaunchReducer.disabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(BtnLaunchClicked())
    }
  }
}


BtnLaunch = connect(mapStateToProps, mapDispatchToProps)(BtnLaunch);

export default BtnLaunch;
