import React from "react";
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

export function RevenueChart({ doanhThuThang }) {
  // Dữ liệu cho biểu đồ đường
  const data = {
    labels: Array.from({ length: 12 }, (_, index) => `Tháng ${index + 1}`), // Tên tháng
    datasets: [
      {
        label: 'Doanh thu',
        data: doanhThuThang,
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
        beginAtZero: true, // Bắt đầu trục Y từ 0
      },
    },
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Biểu đồ doanh thu</Card.Title>
        <div className="chart-container">
          <Line data={data} options={options} /> {/* Hiển thị biểu đồ đường */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default RevenueChart;
