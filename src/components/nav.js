import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';

class nav extends Component {
  // handleSubmit = () => {
  //   window.location.href = "http://localhost:3000/ticker"
  // }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="home">Quick Bids</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="orders">Orders</Nav.Link>
                        <Nav.Link href="ticker">Quote</Nav.Link>
                      </Nav>
                      <Form inline onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Ticker Symbol</Button>
                      </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default nav;