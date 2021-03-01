

import React from 'react';
import Table from 'react-bootstrap/Table'


const OrderTable = (props) => {
   const order = props.orders.map(obj => {
    return <tbody>
    <tr>
      <td>{obj.symbol}</td>
      <td>{obj.qty}</td>
      <td>{obj.filled_qty}</td>
      <td>{obj.filled_avg_price}</td>
      <td>{obj.status}</td>
    </tr>
  </tbody>
  }) 
   const position = props.positions.map(obj => {
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

  return (
    <div style={{marginTop: '4%'}}>
      <h1 style={{textAlign: 'center', textDecoration: 'underline', color: '#65a346'}}>Open Positions</h1>
      
            <Table style={{marginTop: '2%', marginLeft: "15%", width: '70%'}} striped bordered hover variant="dark">
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
                {position}
           </Table>
           <h1 style={{marginTop: '4%', textAlign: 'center', textDecoration: 'underline' , color: '#65a346'}}>All Orders</h1>
            <Table style={{marginTop: '2%', marginLeft: "15%", width: '70%'}} striped bordered hover variant="dark">
               <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>Symbol</th>
                    <th>Quantity</th>
                    <th>Filled Quantity</th>
                    <th>Limit Price</th>
                    <th>Status</th>
                  </tr>
              </thead>
                {order}
           </Table>
          </div>
  );
};

export default OrderTable;

