import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  

class AppNavbar extends Component {
    state={
        isOpen:false,
    }
    toggle = () => 
    this.setState({
        isOpen:!this.state.isOpen
    });

    
    render() {
        return (
            <div>
              <Navbar color="warning" light expand="md">
                <NavbarBrand href="/">COVID19-Tracker</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href='./About'>About</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Countries
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={()=>{this.props.setCountry('India')}}>
                        India
                        </DropdownItem>
                        <DropdownItem onClick={()=>{this.props.setCountry('Italy')}}>
                        Italy
                        </DropdownItem>
                        <DropdownItem onClick={()=>{this.props.setCountry('Pakistan')}}>
                        Pakistan
                        </DropdownItem>
                        <DropdownItem onClick={()=>{this.props.setCountry('United States of America')}}>
                        United States
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={()=>{this.props.setGlobal()}}>
                          Global
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <NavbarText>{this.props.simpleText}</NavbarText>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}

export default AppNavbar
