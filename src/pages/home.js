import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import OrdersTable from '../components/orders'

class home extends Component {
    render() {
        const currentposition = this.props.positions.map(obj => {
            return <tbody>
            <tr>
              <td>{obj.symbol}</td>
              <td>{obj.qty}</td>
              <td>{obj.avg_entry_price}</td>
              <td>{obj.current_price}</td>
              <td>{obj.unrealized_pl}</td>
            </tr>
          </tbody>
          }) 
        const position = this.props.positions.map(obj => {
            return <td>${obj.unrealized_pl}</td>
          }) 
        return (
            <div style={{ marginLeft: '5%'}}>
                <Card style={{ width: '18rem', marginLeft:'0%', float:'left' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/02/12/27/mountain-918442__340.jpg" />
  <Card.Body>
    <Card.Title>Welcome Back Islam,</Card.Title>
    <Card.Text>
      Heres the quote of the day: 
      <br/><span style={{fontStyle:'italic'}}>"Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble."</span>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Reminders:</ListGroupItem>
    <ListGroupItem>- Revenge trading will make you lose even more money</ListGroupItem>
    <ListGroupItem>- Take your time, backtest, and be patient</ListGroupItem>
  </ListGroup>

</Card>
<Table style={{marginTop: '4%', marginLeft: "15%", width: '70%'}} striped bordered hover variant="dark">
               <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>Symbol</th>
                    <th>Filled Quantity</th>
                    <th>Avg Filled Price</th>
                    <th>Current Price</th>
                    <th>Profit/Loss</th>
                  </tr>
              </thead>
                {currentposition}
</Table>

                <Table style={{marginTop: '0%', marginLeft: "0%", width: '70%', color: 'black'}} striped bordered hover>
                    <tbody>
                        <tr style={{backgroundColor: '#f5f5f5'}} >
                        <td>Equity: </td>
                        <td >${this.props.equity}</td>

                        </tr>
                        <tr style={{backgroundColor: "#bababa"}}>
                        <td>Buying Power: </td>
                        <td>${this.props.bp}</td>

                        </tr>
                        <tr style={{backgroundColor: '#f5f5f5'}}>
                        <td>Unrealized Profit/Loss: </td>
                        {position}

                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default home;