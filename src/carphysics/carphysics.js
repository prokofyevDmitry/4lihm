import React, { Component } from "react";

import Paper from 'material-ui/Paper';

import openSocket from 'socket.io-client';

const style = {
    margin: 50,

    textAlign: 'center',
    display: 'inline-block',
};

class CarPhysics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            datas : [],
            print_data : []
        };
    }

    componentDidMount(){
        this.socket = openSocket('http://localhost:8000');
        this.socket.on('info', datas => {
            this.setState((prevState,props)=>({
                datas : prevState.datas.concat(datas)
            }));
            //
            console.log(this.state.datas);
            this.setState((prevState,props)=>({
                print_data : prevState.datas.map((data)=> <li>{JSON.stringify(data)}</li> )
            }));
            console.log(datas);
        });
    }

    componentWillUnmount(){

    }





    render() {
        return (
            <div id="carphysicsContainer">

                <Paper style={style} zDepth={2}>
                    <h2>Car Physics info</h2>
                    <ul>{this.state.print_data}</ul>
                </Paper>
            </div>
        );
    }
}

export default CarPhysics