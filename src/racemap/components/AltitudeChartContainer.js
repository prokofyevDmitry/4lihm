import { connect } from 'react-redux'
import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


class AltitudeChart extends React.Component {
  render() {

    // separate altitudes and order


    const altitudes = this.props.gpsPoints.map((gpsPoint) => {
      return {
        name: String(gpsPoint.id),
        altitude: gpsPoint.altitude
      }
    })




    console.log(altitudes);
    // const ids = this.props.gpsPoints.map((gpsPoint) => {
    //   return gpsPoint.id
    // })


    return (<AreaChart width={ 700 }
                       height={ 250 }
                       data={ altitudes }
                       margin={ { top: 10, right: 30, left: 0, bottom: 0 } }>
              <defs>
                <linearGradient id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                  <stop offset="5%"
                        stopColor="#8884d8"
                        stopOpacity={ 0.8 } />
                  <stop offset="95%"
                        stopColor="#8884d8"
                        stopOpacity={ 0 } />
                </linearGradient>
                <linearGradient id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                  <stop offset="5%"
                        stopColor="#82ca9d"
                        stopOpacity={ 0.8 } />
                  <stop offset="95%"
                        stopColor="#82ca9d"
                        stopOpacity={ 0 } />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone"
                    dataKey="altitude"
                    stroke="#8884d8"
                    fillOpacity={ 1 }
                    fill="url(#colorUv)" />
              <Area type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={ 1 }
                    fill="url(#colorPv)" />
            </AreaChart>)
  }
}







const mapStateToProps = (state) => {
  return {
    gpsPoints: state.gpsPointsApi.gpsPoints
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


const AltitudeChartContainer = connect(mapStateToProps, mapDispatchToProps)(AltitudeChart);

export default AltitudeChartContainer;
