// import React, { Component } from 'react';
// import OrderTable from './orders.js'

// class API extends Component {
//     componentDidMount() {
//         const Alpaca = require('@alpacahq/alpaca-trade-api')
//         const alpaca = new Alpaca({
//             keyId: 'PKT89ZPCZGV1X6V8H7JX',
//             secretKey: 'FC0EOE4sP3cszqYftMMWyYvUOAXabuQNiPcHhkTO',
//             paper: true,
//             usePolygon: false
//         })
//         alpaca.getAccount().then(account => {
//             this.setState({account: account})
//          })
//          alpaca.getAsset("ZOM").then((asset) => {
//             this.setState({asset: asset})
//           })
//           alpaca.getPositions().then((positions) => {
//             this.setState({positions: positions})
//         })
//           alpaca.getOrders({
//             status: 'all',
//             after: Date,
//             until: Date,
//             limit: 100,
//             direction: 'desc'
//           }).then((orders) => {
//             this.setState({orders: orders})
//         })
          
//     }
//     constructor() {
//      super() 
//         this.state = {
//             account: [],
//             asset: [],
//             orders: [],
//             positions: []
//         }
//     }

//     render() {     
//         const equity = this.state.account.equity
//         const buyingPower = this.state.account.buying_power
//         const asset = this.state.asset
//         const orders = this.state.orders
//         const positions = this.state.positions
//         console.log(positions);
                
//         return (          
//             <div>
//                 {/* <h1>Ticker: {asset.symbol}</h1> */}
//                 <h2>Investing: ${equity}</h2>
//                 <h2>Buying Power: ${buyingPower}</h2>
//                 {/* <h1>Exchange: {asset.exchange}</h1> */}
//                 {/* <h2>{asset.shortable ? "Easy To Borrow" : "Hard To Borrow"}</h2> */}
//                 {/* <OrderTable positions={positions} orders={orders}/> */}
//             </div>
//         )
//     }
// }

// export default API;