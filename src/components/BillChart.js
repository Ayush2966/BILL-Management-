import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './BillChart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BillChart = ({ bills }) => {
    const data = {
        labels: bills.map((bill) => bill.date),
        datasets: [
            {
                label: 'Total Billed Amount',
                data: bills.map((bill) => bill.amount),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div className="bill-chart">
            <Line data={data} />
        </div>
    );
};

export default BillChart;