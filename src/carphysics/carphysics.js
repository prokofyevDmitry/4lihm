import React from "react";

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
            this.setState((prevState)=>({
                datas : prevState.datas.concat(datas)
            }));
            //
            this.setState((prevState)=>({
                print_data : prevState.datas.map((data)=> <li>{JSON.stringify(data)}</li> )
            }));

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
