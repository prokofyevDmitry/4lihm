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
            datas : {}
        };
    }



    componentDidMount(){
        this.socket = openSocket('http://localhost:8000');
        this.socket.on('info', datas => {
            this.setState((prevState)=>({
                datas : datas
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


blabal


    render() {

        const date = new Date(Date.now()).toISOString()

        return (
            <div id="carphysicsContainer">
 
                    <div>Time : {date}</div>
                    <div>Pitch Angle :{this.state.datas.pitch}  </div>
                    <div>Roll Angle :{this.state.datas.roll} </div>
                    <div>Yaw Angle :{this.state.datas.yaw} </div>
                    <div>Latitude : </div>
                    <div>Longitude : </div>
                    <div>Speed : </div>
                    <div>Altitude : </div>

            </div>

        );
    }
}

export default CarPhysics
