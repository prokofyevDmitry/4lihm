import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import { connect } from 'react-redux'





const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
});


class Loarder extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styles=" root: {
                                              width: '100%',
                                            }">
        { this.props.showLoader ?
          <LinearProgress mode="query"
                          color="accent" />
          
          : null }
      </div>
    )
  }
}




const mapStateToProps = state => {
  return {
    showLoader: state.apiCallsStatus.isFetching
  }
}


const LoarderContainer = connect(mapStateToProps)(Loarder);
export default LoarderContainer;
