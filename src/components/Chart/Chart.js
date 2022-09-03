import React from "react";
import ReactApexChart from "react-apexcharts";


  class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 67],
      options: {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: [ 'One Month', 'One week','Today' ],
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
</div>


    );
  }
}


export default ApexChart;
