import React, { Component } from "react";
import Chart from "react-apexcharts";

class Candlestick extends Component {
  constructor() {
    super()
    

    this.state = {
    //open high low close
        series: [{
          data: [{
              x: new Date(1609822800),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1609909200),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1609995600),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1610082000),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1610341200),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1610427600),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1610514000),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1610600400),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1610686800),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1611032400),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1611118800),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1611205200),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1611291600),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1611550800),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1611637200),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1611723600),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1611810000),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1611896400),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1612155600),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1612242000),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1612328400),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1612414800),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1612501200),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1612760400),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1612846800),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1612933200),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1613019600),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1613106000),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1613451600),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1613538000),
              y: [6587.81, 6592.73, 6567.14, 6578]
            }
          ]
        }],
        options: {
          chart: {
            type: 'candlestick'
          },
          title: {
            text: 'Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      };
    }

  render() {
    // const data = this.props.data.map(obj => {
    //   return <td>{obj}</td>
    // }) 
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              width="1000"
              height={700}
              style={{marginLeft: '25%'}}
            />
          </div>
        </div>
        {/* {data} */}
      </div>
    );
  }
}

export default Candlestick;