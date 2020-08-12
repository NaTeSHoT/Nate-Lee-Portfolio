import React, {Component} from 'react';
import './App.css';
import {Navigation, Drawer} from 'react-mdl' 
import Main from "./components/main"
import {Link} from 'react-router-dom'
import './components/styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'
class App extends Component {
  
  render () {
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="/">Nate's Portfolio</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">      
              </ReactBootStrap.Nav>
            <ReactBootStrap.Nav >
              <ReactBootStrap.Nav.Link href="/resume">Resume</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
          <Drawer  title= {<Link style = {{textDecoration: 'none', color: 'black'}} to = "/">MyPortfolio</Link>}>
              <Navigation>
                  <Link to ="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
              <div className="" />
              <Main/>
    </div>
    );
  }
}

export default App;
