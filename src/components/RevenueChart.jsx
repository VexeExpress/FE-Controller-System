import React from "react";
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

export function RevenueChart({ revenueData }) {
  const data = {
    labels: Array.from({ length: 12 }, (_, index) => `Tháng ${index + 1}`), 
    datasets: [
      {
        label: 'Doanh thu',
        data: revenueData,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
    maintainAspectRatio: false, 
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Biểu đồ doanh thu của công ty</Card.Title>
        <div style={{ height: '381px', width: '100%' }} className="chart-container">
          <Line data={data} options={options} /> 
        </div>
      </Card.Body>
    </Card>
  );
}

export default RevenueChart;
