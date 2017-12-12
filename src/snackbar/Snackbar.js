import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Snackbar from 'material-ui/Snackbar';
import { retryRequest } from "../racemap/actions/index";
import { connect } from 'react-redux';


class ErrorSnackbar extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {


    return (


      <Snackbar anchorOrigin={ { vertical: 'bottom', horizontal: 'left', } }
                open={ this.props.open }
                autoHideDuration={ 6000 }
                onRequestClose={ this.props.handleRequestClose }
                SnackbarContentProps={ { 'aria-describedby': 'message-id', } }
                message={ <span id="message-id">{ this.props.error }</span> }
                action={ [<Button key="undo" color="accent" dense onClick={ this.props.handleRequestClose }> RECHARGER </Button>] } />

    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    callback: state.apiErrors.lastCalledFunction,
    open: state.apiErrors.active,
    error: String(state.apiErrors.error)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRequestClose: () => {
      dispatch(retryRequest());
    }
  }
}


const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);

export default SnackbarContainer;

