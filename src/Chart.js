import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css'

const ChartComponent = () => {
  const [data, setData] = useState([
    { month: 'February', NetProfit: 22, Sales: 42 },
    { month: 'March', NetProfit: 34, Sales: 50 },
    { month: 'April', NetProfit: 56, Sales: 70 },
    { month: 'May', NetProfit: 37, Sales: 57 },
    { month: 'June', NetProfit: 35, Sales: 55 },
    { month: 'July', NetProfit: 21, Sales: 58 },
    { month: 'August', NetProfit: 34, Sales: 43 },
    { month: 'September', NetProfit: 60, Sales: 80 },
    { month: 'November', NetProfit: 78, Sales: 21 },
    { month: 'December', NetProfit: 53, Sales: 34 },
    { month: 'Net Profit:', NetProfit: 89, Sales: 77 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = prevData.map(item => {
          const updatedNetProfit = item.NetProfit * (Math.random()*0.25 +0.91); 
          const updatedSales = item.Sales * (Math.random()*0.25 +0.91);
          return { ...item, NetProfit: Math.round(updatedNetProfit), Sales: Math.round(updatedSales) };
        });
        return newData;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SALES ACTIVITY</h5>
      <BarChart width={1020} height={350} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" axisLine={false} tickLine={false}/>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="NetProfit" barSize={10} fill="#0d6efd"  />
        <Bar dataKey="Sales" barSize={10} fill="rgb(70, 218, 127)" />
      </BarChart>
    </div>
  );
};

export default ChartComponent;