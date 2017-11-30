import React from "react";
import Grid from 'material-ui/Grid';
import BtnLaunch from '../containers/BtnLaunch';
import MapContainer from './Map';

class Racemap extends React.Component {
    constructor(props){
        super(props);
    }
    render() {

        return (

            <Grid container spacing={24} direction={'row'} >

                <Grid item  direction={'column'} xs={2}>
                    <Grid item xs={12} >
                        boutons 1
                    </Grid>
                    <Grid item xs={12} >

                        <BtnLaunch />

                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>

                <Grid item  direction={'column'} xs={10}>
                    <Grid item xs={12}>
                        selecteur
                    </Grid>
                    <Grid item xs={12}>
                      <div style={{height:"400px"}}>
                        <MapContainer/>
                        </div>
                    </Grid>
                </Grid>




            </Grid>

        );
    }
};


export default Racemap;
