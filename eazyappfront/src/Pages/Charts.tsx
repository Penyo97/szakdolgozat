import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options: any = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [20,300,123,200,34,120,400],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const Charts = () => {

    return (
        <div>
            {/*// @ts-ignore*/}
        <Bar data={data} title={"DataSet"} options={options} style={{height:"200px",width:"500px"}}/>
        </div>
    );
};



export default Charts;