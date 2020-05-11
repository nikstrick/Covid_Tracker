import React, { useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import {Container} from 'reactstrap'
import DoughnutDisplay from './DoughnutDisplay';
import LineChart from './LineChart';
import Cards from './Cards';

const Tab =props=> {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
        return (
            <div style={{marginRight:'10px',marginLeft:'10px',backgroundColor:'#f1f1f1'}}>
              <Nav style={{color:'red',backgroundColor:'rgb(255,220,193)'}} tabs>
                <NavItem style={{paddingLeft:'5px',paddingRight:'5px'}}>
                  <NavLink style={{backgroundColor:'#f1f1f1'}}
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                  >
                    Aggregate Comparision
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink style={{backgroundColor:'#f1f1f1'}}
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                  >
                    Individual Day Chart
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Cards graphData={props.graphData}/>
                  <DoughnutDisplay Global={props.Global} Country={props.Country} graphData={props.graphData} graphData2={props.graphData2}/>
                </TabPane>
                <TabPane tabId="2">
                <LineChart lineChartData={props.lineChartData}/>
                </TabPane>
              </TabContent>
              <Container style={{marginTop:'50px'}}>
              <p style={{fontWeight:'bold',marginLeft:'20px',marginRight:'20px',backgroundColor:'#ccc'}}>
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.
                </p>
                <p style={{marginLeft:'20px'}}>
                HOW IT SPREADS-
                The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
              </p>
              </Container>
            </div>
          );
    
}

export default Tab