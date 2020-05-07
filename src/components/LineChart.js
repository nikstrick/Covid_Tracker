import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
class LineChart extends Component {
    
    render() {
        console.log(this.props.lineChartData.datasets[0].data)
        return (
          <div>
            <Line
              data={this.props.lineChartData}
              options={{
                title:{
                  display:true,
                  text:'Each Day Status',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'bottom'
                }
              }}
            />
          </div>
        );
      }
}

export default LineChart
