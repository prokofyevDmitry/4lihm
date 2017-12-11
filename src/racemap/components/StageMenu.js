import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class StageMenu extends React.Component {

  /** when the component mounts, it'll trigger the download of stages informations **/

  componentDidMount() {
    this.props.fetchStages();
  }

  handleRequestClose(stageId) {
    this.props.updateStageId(stageId);
    this.props.requestGpsPoints();
  }

  render() {
    return (
      <div>
        <Button aria-owns={ this.props.open ? 'simple-menu' : null }
                aria-haspopup="true"
                onClick={ this.props.handleClick }>
          Choisir l'étape
        </Button>
        <Menu id="simple-menu"
              anchorEl={ this.props.anchorEl }
              open={ this.props.open }
              onRequestClose={ this.handleRequestClose }>
          { this.props.stages.map((stage, index) => (
              <MenuItem key={ stage.id }
                        onClick={ event => this.handleRequestClose(stage.id) }>
                { stage.depart } --
                { stage.arrivee }
              </MenuItem>
            )) }
        </Menu>
      </div>
      );
  }
}

export default StageMenu;
