import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết
Chart.register(ArcElement, Tooltip, Legend);

export function PieChart({ vehicleTripData }) {
    if (!Array.isArray(vehicleTripData) || vehicleTripData.length === 0) {
        return <p>No data available</p>;
    }

    const data = {
        labels: vehicleTripData.map(item => item.vehicleName),
        datasets: [
            {
                data: vehicleTripData.map(item => item.tripCount),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#33CC33',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Biểu đồ doanh thu</Card.Title>
                <div className="chart-container" style={{ height: '381px', width: '100%' }}>
                    <Pie data={data} options={options}/>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PieChart;
