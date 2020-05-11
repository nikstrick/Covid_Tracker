import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import {Container} from 'reactstrap'
class LineChart extends Component {
    
    render() {
        console.log(this.props.lineChartData.datasets[0].data)
        return (
          <Container style={{backgroundColor:'white',marginTop:'10px'}}>
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
          </Container>
        );
      }
}

export default LineChart
