import React,{useEffect} from 'react';
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
import axios from "axios";

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

interface rentsInterface {
    name: string,
    count: number,
    price: number
}

interface orderInterface {
    id: string,
    userName:string,
    mail:string,
    firstName:string,
    lastName:string,
    rents: Array<rentsInterface>
}

let ord: Array<orderInterface> = [];
const getOrders = async () => {
    await axios.get("http://localhost:4000/getOrders").then(res => {
            for (let i = 0; i < res.data.length; i++) {
                let rentArray: Array<rentsInterface> = [];
                for (let j = 0; j < res.data[i].Rents.length; j++) {
                    const rent: rentsInterface = {
                        name: res.data[i].Rents[j].Name,
                        count: res.data[i].Rents[j].Count,
                        price: res.data[i].Rents[j].Price
                    }
                    rentArray.push(rent)
                }
                const order: orderInterface = {
                    id: res.data[i]._id,
                    firstName: res.data[i].User.First_Name,
                    lastName:res.data[i].User.Last_Name,
                    mail:res.data[i].User.Email,
                    userName:res.data[i].User.User_Name,
                    rents: rentArray
                }
                ord.push(order)
            }
        }
    ).catch(err => console.log(err))
    await axios.post("http://localhost:8080/api/datawarehouse",
        {dataMartDatasList: ord}).then(e => console.log(e)).catch(err => console.log(err))
}
const Charts = () => {

    useEffect(() =>{
        getOrders();

    },[])

    return (
        <div>
            {/*// @ts-ignore*/}
        <Bar data={data} title={"DataSet"} options={options} style={{height:"200px",width:"500px"}}/>
        </div>
    );
};



export default Charts;