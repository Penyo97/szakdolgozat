import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
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

interface dwInt {
    sum: number,
    name: string,
}


const Charts = () => {
    const [load,setLoad] = useState<boolean>(false)
    const [dwData,setDwData] = useState<Array<dwInt>>([]);
    let dwArray: Array<dwInt> = [];
    const getDatas = async () => {
        await axios.get("http://localhost:8080/api/getProductNameAndSum").then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const data:dwInt = {
                    sum: res.data[i].sum,
                    name: res.data[i].name
                }
                dwArray.push(data);
                setDwData(dwArray)
                setLoad(true)
            }
        }).catch(err => console.log(err));
    }

    useEffect(() =>{
        getOrders();
        getDatas();
    },[])

    if (!load) {
        return (
            <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        )
    }
    else {
        {/* let arr =  dwData.filter(item => item.month === 11).map(i => i.price).reduce(function(acc, val) { return acc + val; },0);
        const labels = ['Szeptember', 'Október', 'November', 'December'];
        let lineArr = [0,0,arr,0]
        const linedata = {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: lineArr,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };*/}

        // @ts-ignore
        let names = dwData.map(i => i.name)
         const piedata = {
            labels: names,
            datasets: [
                {
                    label: '# of Votes',
                    data: dwData.map(i=> i.sum),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        return (
            <div >
                {/*// @ts-ignore*/}

                <Pie data={piedata}  style={{height: "300px", width: "300px"}}/>
            </div>
        );
    }
};



export default Charts;