import React, { Component } from "react";

/**
 * Componennt containing logging and status components used to analyse the health state of the system
 */
class SystemStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            datas : [],
            print_data : []
        };
    }

    render() {
        return (
            <div>

                <Paper style={style} zDepth={2}>
                    <h2>Car Physics info</h2>
                    <ul>{this.state.print_data}</ul>
                </Paper>
            </div>
        );
    }

}