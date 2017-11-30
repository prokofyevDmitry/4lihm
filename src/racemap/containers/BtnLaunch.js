
import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import {BtnLaunchClicked} from '../actions/index';

let BtnLaunch = ({state,dispatch}) => {
  return (
    <Button raised onClick={()=>(dispatch(BtnLaunchClicked()))}  > Ajouter un element sur la carte</Button>
  )
}

BtnLaunch = connect()(BtnLaunch);
export default BtnLaunch;
