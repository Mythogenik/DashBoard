import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './LineChart.css'

const ChartComponent = () => {
  const data = [
    { month: 'January', sales: 12 },
    { month: 'February', sales: 10 },
    { month: 'March', sales: 3 },
    { month: 'April', sales: 15 },
    { month: 'May', sales: 5 },
    { month: 'June', sales: 8 },
    { month: 'January', sales: 12 },
    { month: 'February', sales: 10 },
    { month: 'March', sales: 8 },
    { month: 'April', sales: 17 },
    { month: 'May', sales: 2 },
    { month: 'June', sales: 3 },
    { month: 'January', sales: 12 },
    { month: 'February', sales: 10 },
    { month: 'March', sales: 3 },
    { month: 'April', sales: 15 },
    { month: 'May', sales: 5 },
    { month: 'June', sales: 8 },
    { month: 'January', sales: 12 },
    { month: 'February', sales: 10 },
    { month: 'March', sales: 8 },
    { month: 'April', sales: 17 },
    { month: 'May', sales: 2 },
    { month: 'June', sales: 3 },
    
  ];

  return (
    <div>
      <LineChart width={90} height={90} data={data} className='lineChart'  >
        <Line type="monotone" className='line' dataKey="sales" stroke="white" strokeWidth={1} dot={false} />
      </LineChart>
    </div>
  );
};

export default ChartComponent;


