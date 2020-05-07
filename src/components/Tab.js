import React, { Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import DoughnutDisplay from './DoughnutDisplay';
import LineChart from './LineChart';

class Tab extends Component {
  constructor(props){
    super(props)
    this.state={
      activeTab:1,
      setActiveTab:1
    }
    this.toggle=this.toggle.bind(this)
  }
    

    toggle=(tab)=>{
        this.setState({
            activeTab:tab});
    }
    

    render() {
        
        return (
            <div>
              <Nav style={{color:'red'}} tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Aggregate Comparision
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Individual Day Chart
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                
                  <DoughnutDisplay Global={this.props.Global} Country={this.props.Country} graphData={this.props.graphData} graphData2={this.props.graphData2}/>
                </TabPane>
                <TabPane tabId="2">
                <LineChart lineChartData={this.props.lineChartData}/>
                </TabPane>
              </TabContent>
              <div style={{paddingTop:'60px'}}>
              <p style={{fontWeight:'bold',marginLeft:'20px',marginRight:'20px',backgroundColor:'#ccc'}}>
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.
                </p>
                <p style={{marginLeft:'20px'}}>
                HOW IT SPREADS-
                The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
              </p>
              </div>
            </div>
          );
    }
}

export default Tab