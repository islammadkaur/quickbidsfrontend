// import './App.scss';
import './App.css';
// import OrderTable from './components/orders'
import React, { Component } from 'react';
// import Candlestick from './components/Candlestick'
// import Alpacas from './components/alpaca'
import Home from './pages/home'
import Orders from './pages/orders'
import Account from './pages/account'
import Ticker from './pages/ticker'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Calculator from './pages/Calculator'
// import Nav from './components/nav'
import {
  BrowserRouter as Router,
  Route,
  Switch, Link
} from "react-router-dom";




const API = "http://127.0.0.1:5000/"

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      stock: [],
      sym: '',
      account: [],
      asset: [],
      orders: [],
      positions: [],
      data: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(stk => 
    this.setState({stock: stk})
    )
    const Alpaca = require('@alpacahq/alpaca-trade-api')
    const alpaca = new Alpaca({
        keyId: 'PKT89ZPCZGV1X6V8H7JX',
        secretKey: 'FC0EOE4sP3cszqYftMMWyYvUOAXabuQNiPcHhkTO',
        paper: true,
        usePolygon: false
    })
    alpaca.getAccount().then(account => {
        this.setState({account: account})
     })
     alpaca.getAsset("ZOM").then((asset) => {
        this.setState({asset: asset})
      })
      alpaca.getPositions().then((positions) => {
        this.setState({positions: positions})
    })
      alpaca.getOrders({
        status: 'all',
        after: Date,
        until: Date,
        limit: 100,
        direction: 'desc'
      }).then((orders) => {
        this.setState({orders: orders})
    })
    
  }

  
      


  handleSubmit = () => {
    window.location.href = "/ticker"
  }


render() {
    const equity = this.state.account.equity
    const bp = this.state.account.buying_power

    // const asset = this.state.asset
    const orders = this.state.orders
    const positions = this.state.positions
    const data = this.state.data
    // console.log(data);
   
      return (
        <Router>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="/">Quick Bids</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="orders">Orders</Nav.Link>
                        <Nav.Link href="calculator">Stock Calculator</Nav.Link>
                        <Nav.Link href="ticker">Quote</Nav.Link>
                      </Nav>
                      <Form inline onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Ticker Symbol</Button>
                      </Form>
                    </Navbar.Collapse>
                </Navbar>
        <Switch>
        <Route path="/account">
            <Account />
          </Route>
          <Route path="/ticker">
            <Ticker data={data}/>
          </Route>
          <Route path="/orders">
            <Orders positions={positions} orders={orders}/>
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home equity={equity} bp={bp} positions={positions} orders={orders}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
    //   <div>

        
        
        
    //   </div>
    // );
  }
}

export default App;
