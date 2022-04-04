import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => setData(data))
        }
        , []);
    console.log(data);
    return (
        <div className="analytics">
            <h1>Business analytics</h1>
            <div className="dashboard-container">
            <div className="chart">
                <h1>Monthly Revenue and Sell</h1>
                <AreaChart width={400} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div className="chart">
            <h1>Investment</h1>
                <BarChart width={400} height={350} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="investment" barSize={20} fill="#8884d8" />
                </BarChart>
            </div>
            <div className="chart">
                <h1>Monthly Revenue and Sell</h1>
                <PieChart width={400} height={250}>
                    <Pie data={data} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
            <div className="chart">
                <h1>Monthly Investment and Revenue</h1>
                <LineChart width={400} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;