import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Dialog, { DialogActions, DialogContent, DialogTitle,
} from 'material-ui/Dialog';

export default class StageDialog extends React.Component {

  // constructor is needed since the dialog has it's own state for button
  constructor(props) {
    super(props);
    this.state = {
      departure: '',
      arrival: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  static defaultProps() {
    return {
      open: false,
      stageName: ""
    }
  }


  /**
   * handleChange - change handler for TextField stage name input
   *
   * @param  {type} event description
   * @return {null}       description
   */
  handleChange(event) {
    this.setState({
      stageName: event.target.value
    });
    return;
  }

  render() {
    return (
      <div>
        <Dialog open={ this.props.open }
                onRequestClose={ this.handleRequestClose }>
          <DialogTitle>
            { "Entrez le nom de la nouvelle étape" }
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <TextField id="departure"
                         label="départ"
                         onChange={ this.handleChange }
                         value={ this.state.departure }
                         margin="normal" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="name"
                         label="Name"
                         onChange={ this.handleChange }
                         value={ this.state.stageName }
                         margin="normal" />
            </FormControl>
          </DialogContent>
          <DialogActions>
            { /* this button is disabled if the this.props.stageName is an empty string */ }
            <Button onClick={ () => this.props.handleRequestClose(this.state.stageName) }
                    color="primary"
                    disabled={ this.state.stageName.length == 0 }
                    autoFocus>
              Démarrer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      );
  }
}
