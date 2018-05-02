import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import {Bar} from 'react-chartjs-2'


const data = {
  // labels: ["Apr", "Mar", "Feb", "Jan", "Dec", "Nov", "Oct", "Sep", "Aug", "Jul", "Jun"],
  datasets: [
    {
      label: '5-Year Average',
      type:'line',
      borderWidth: 1,
      fill: false,
      lineTension: 0.2,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      data: [603, 1011, 1105, 1151, 1258, 1307, 721, 935, 681, 555, 1109],
    },
    {
      label: "2018",
      backgroundColor: "#d6e9f9",
      borderColor: "#7bb3e3",
      borderWidth: 1,
      hoverBackgroundColor: "#0275d8",
      hoverBorderColor: "#0275d8",
      data: [752, 1466, 1538, 1129, 1528, 1735, 911, 1318, 1100, 906, 1501],
    },
    {
      label: "2017",
      backgroundColor: "#ffc0cb",
      borderColor: "#ff1493",
      borderWidth: 1,
      hoverBackgroundColor: "#800080",
      hoverBorderColor: "#4B0082",
      data: [552, 1266, 1138, 1290, 1328, 1535, 861, 1118, 780, 806, 1201],
    },
  ]
};

const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("", 100, 100);
    }
}];

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        position: 'left',
        gridLines: {
          display: false
        },
        labels: ["Apr", "Mar", "Feb", "Jan", "Dec", "Nov", "Oct", "Sep", "Aug", "Jul", "Jun"]
      }
    ],
    yAxes: [
      {
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const legendOptions = {
  "display": true,
  "position": "top",
  "fullWidth": true,
  "reverse": true,
  "labels": {
    "fontColor": "rgb(255, 99, 132)"
  }
}

const ProposalsChart = props => {
  {/* <HorizontalBar data={data} options={options} plugins={plugins} /> */}

  return <Bar data={data} options={options} plugins={plugins} legend={legendOptions} />
}

export default ProposalsChart;
