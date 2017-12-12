import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Snackbar from 'material-ui/Snackbar';
import { voidDispatcher } from "../racemap/actions/index";
import { connect } from 'react-redux';


class ErrorSnackbar extends React.Component {





  render() {


    return (


      <Snackbar anchorOrigin={ { vertical: 'bottom', horizontal: 'left', } }
                open={ this.props.open }
                autoHideDuration={ 6000 }
                onRequestClose={ this.props.handleRequestClose }
                SnackbarContentProps={ { 'aria-describedby': 'message-id', } }
                message={ <span id="message-id">{ this.props.error }</span> }
                action={ [<Button key="undo" color="accent" dense onClick={ () => { this.props.handleRequestClose } }> UNDO </Button>, <IconButton key="close" aria-label="Close" color="inherit" onClick={ this.handleRequestClose }> <CloseIcon /> </IconButton>,] } />

    )
  }
}


const mapStateToProps = state => {
  return {
    callback: state.apiErrors.lastCalledFunction,
    open: state.apiErrors.active,
    error: String(state.apiErrors.error)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRequestClose: () => {
      dispatch(ownProps.callback);
    }
  }
}


const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);

export default SnackbarContainer;

