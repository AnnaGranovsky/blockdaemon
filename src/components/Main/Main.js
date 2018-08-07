import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Grid, Nav, NavItem, Navbar, Alert  } from 'react-bootstrap';

import BcList from '../BcList';
import CreateBcForm from '../CreateBcForm'
import Blockchain from '../Blockchain'

import './Main.css'


export default class Main extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      showAlert: false
    };

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({ showAlert: false });
  }

  componentWillReceiveProps(newprops) {
    this.setState({ showAlert: false });
    
    if (newprops.status === 'error') {
      this.setState({ showAlert: true });
    }
  }
  
  render () {
    return (
      <div>
        {this.state.showAlert?
        <div className="alert-container">
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <strong>You got an error!</strong>
            {this.props.error}
          </Alert>
        </div>
        : ""}
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
              <NavItem href="/create">Create New</NavItem>
          </Nav>
        </Navbar>

        <Grid>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={BcList}/>
              <Route exact path="/create" component={CreateBcForm}/>
              <Route path="/:id" component={Blockchain}/>
            </Switch>
          </BrowserRouter>
        </Grid>
      </div>
    )
  }
}