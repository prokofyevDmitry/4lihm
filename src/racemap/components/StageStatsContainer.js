

import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';


const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});


class StageStats extends React.Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;
  }

  render() {

    /**
    various calculations

    distance     
    
    average speed 

    elevation 

    **/




    return (
      <div>
        <Card className={ this.classes.card }>
          <CardContent>
            <Typography className={ this.classes.title }>
              Word of the Day
            </Typography>
            <Typography type="headline"
                        component="h2">
            </Typography>
            <Typography className={ this.classes.pos }>
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              { '"a benevolent smile"' }
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {

  }
}


const StageStatsContainer = connect(mapStateToProps)(withStyles(styles)(StageStats))
export default StageStatsContainer;
