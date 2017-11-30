import React from 'react';
import Button from 'material-ui/Button';
import './toolbar.css';
import Toolbar from 'material-ui/Toolbar';
import {NavLink}   from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';




export default class ToolbarExamplesSimple extends React.Component {

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <AppBar position={'static'}>
            <Toolbar>
            <Grid container justify="center">
                <Grid item ><NavLink to="/carphysics" ><Button raised     color="accent" >Car Physics</Button></NavLink> </Grid>
                <Grid item ><NavLink to="/racemap" ><Button raised     color="accent" >Race Map</Button></NavLink></Grid>
                <Grid item ><NavLink to="/camera" ><Button raised     color="accent" >Camera</Button></NavLink></Grid>
                <Grid item ><NavLink to="/systemstatus" ><Button raised     color="accent" >Status Système</Button></NavLink></Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        );
    }
}
