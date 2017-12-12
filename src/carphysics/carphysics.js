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


            // console.log(datas)
            //window.convertToRotation(datas)
            window.rotateMesh(datas)

            // this.setState((prevState,props)=>({
            //     datas : prevState.datas.concat(datas)
            // }));
            // //
            // this.setState((prevState,props)=>({
            //     print_data : prevState.datas.map((data)=> <li>{JSON.stringify(data)}</li> )
            // }));
            // console.log(datas);

        });

        window.init();
        window.render1();

        


    }

    componentWillUnmount(){

    }





    render() {
        return (
            <div id="carphysicsContainer">
 
                    <div>Time : <span id="time"></span></div>
                    <div>Yaw Angle : <span id="angle"></span></div>
                    <div>Pitch Angle : <span id="pitch"></span></div>
                    <div>Roll Angle : <span id="roll"></span></div>
                    <div>Latitude : <span id="latitude"></span></div>
                    <div>Longitude : <span id="longitude"></span></div>
                    <div>Speed : <span id="speed"></span></div>
                    <div>Altitude : <span id="altitude"></span></div>

            </div>

        );
    }
}

export default CarPhysics
