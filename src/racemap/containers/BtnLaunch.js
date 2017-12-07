
import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import { BtnLaunchClicked } from '../actions/index';

let BtnLaunch = ({onClick, liveLogging}) => {
  return <Button raised
                 onClick={ onClick }>
           { (liveLogging ? "Arrêter" : "Demarrer") } un element sur la carte
         </Button>

}

const mapStateToProps = state => {
  return {
    liveLogging: state.globalState.liveLogging
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
