import { Card } from '@mui/material'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
ChartJs.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

export const Linechart = () => {

  const data = {
    labels: ["Jan", "", "Mar", "", "May", "", "Jul", "", "Sep", "", "Nov", ""],
    datasets: [{
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 1,
      fill: true,
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
    }],
  }
  const options = {
    scales: {
      x: {
        grid: {
          color: false,
          borderColor: grey,
        }
      },
      y: {
        borderColor: false,
      }
    }
  }

  return (
    <div className='charts'>
      <Card className='line-charts'>
        <div className='line-chart-head'><p className='line-chart-heading'>Earnings Overview</p><button className='line-chart-headbtn'><MoreVertIcon /></button></div>
        <div>
          <Line className='line' data={data}
            options={options}>
          </Line>
        </div>
      </Card>
    </div>


  )
};

export const PieChart = () => {
  const data = {
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      hoverOffset: 4,
      cutout : "83%"
    }],

  }
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    }
  }

  return (
    <Card className='piechart'>
      <div className='line-chart-head'><p className='line-chart-heading'>Revenue Source</p><button className='line-chart-headbtn'><MoreVertIcon /></button></div>
      <div></div>
      <Pie className='pie'
        data={data}
        options={options}>
      </Pie>
    </Card>
  )
}