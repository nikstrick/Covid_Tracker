import React,{Component}from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Container} from 'reactstrap'



class DoughnutDisplay extends Component{
  
  render(){
    // console.log(this.props.graphData)
    return (
      <Container>
        <Doughnut
          data={this.props.graphData}
          options={{
            title:{
              display:true,
              text:'Total Cases',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <Doughnut
          data={this.props.graphData2}
          options={{
            title:{
              display:true,
              text:'New Cases Today',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </Container>
    );
  }
    
  }

export default DoughnutDisplay