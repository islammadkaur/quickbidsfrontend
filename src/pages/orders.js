import React, { Component } from 'react';
import OrdersTable from '../components/orders'
// import Alpacas from "../components/alpaca";

class orders extends Component {
    render() {
        return (
            <div>
                <OrdersTable positions={this.props.positions} orders={this.props.orders}/>
            </div>
        );
    }
}

export default orders;