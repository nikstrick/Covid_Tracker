import React from 'react';
import { Container,Row,Card, CardTitle, CardText, Col } from 'reactstrap';


const Cards= (props) => {
  return (
    <Container style={{backgroundColor:'grey'}}>
      <Row>
      <Col>
      <Card body inverse color="info" style={CardStyle}>
        <CardTitle>Active Cases- Till Now({Date().slice(0,11)})</CardTitle>
        <CardText style={{fontSize:'30px'}}>{props.graphData.datasets[0].data[0]}</CardText>
        
      </Card>
      </Col>
      <Col>
      <Card body inverse color="danger" style={CardStyle}>
        <CardTitle>Deaths Cases- Till Now({Date().slice(0,11)})</CardTitle>
        <CardText style={{fontSize:'30px'}}>{props.graphData.datasets[0].data[1]}</CardText>
        
      </Card>
      </Col>
      <Col>
      <Card body inverse color="success" style={CardStyle}>
        <CardTitle>Recovered Cases- Till Now({Date().slice(0,11)})</CardTitle>
        <CardText style={{fontSize:'30px'}}>{props.graphData.datasets[0].data[2]}</CardText>
        
      </Card>
      </Col>
      </Row>
    </Container>
  );
};
const CardStyle={
  marginLeft:'5px',
  marginTop:'20px',
  marginBottom:'10px',
  border:'solid',
  borderColor:'rgb(100,100,100)',
  borderWidth:'2px',
  
}

export default Cards;