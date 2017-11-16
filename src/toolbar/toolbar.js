import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {NavLink}   from "react-router-dom";


export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar>
                {/*<ToolbarGroup firstChild={true}>*/}
                    {/*<DropDownMenu value={this.state.value} onChange={this.handleChange}>*/}
                        {/*<MenuItem value={1} primaryText="All Broadcasts" />*/}
                        {/*<MenuItem value={2} primaryText="All Voice" />*/}
                        {/*<MenuItem value={3} primaryText="All Text" />*/}
                        {/*<MenuItem value={4} primaryText="Complete Voice" />*/}
                        {/*<MenuItem value={5} primaryText="Complete Text" />*/}
                        {/*<MenuItem value={6} primaryText="Active Voice" />*/}
                        {/*<MenuItem value={7} primaryText="Active Text" />*/}
                    {/*</DropDownMenu>*/}
                {/*</ToolbarGroup>*/}


                <ToolbarGroup>


                    <RaisedButton  containerElement={<NavLink to="/carphysics"></NavLink> } label="Car Physics"  primary={true} disableTouchRipple={false}/>
                    <ToolbarSeparator />
                    <RaisedButton href={'/racemap'} label="Race Map" primary={true} disableTouchRipple={false}/>
                    <ToolbarSeparator />
                    <RaisedButton containerElement={<NavLink to="/camera"></NavLink> } label="Camera" primary={true} disableTouchRipple={false}/>
                    <ToolbarSeparator />
                    <RaisedButton href={'/systemstatus'} label="System Status" primary={true} disableTouchRipple={false}/>


                </ToolbarGroup>
            </Toolbar>
        );
    }
}