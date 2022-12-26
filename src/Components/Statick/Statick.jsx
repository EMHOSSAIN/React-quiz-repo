import {CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import React from 'react';
import './style.css'



const Statick = () => {
  // const data=useLoaderData([])
  // console.log(data.data)
  // const {name,total}=data.data
 
  const data = [
    {
      "name": "React",
      
      "total": 9,
      
    },
    {
      "name": "JavaScript",
     
      "total": 8,
      
    },
    {
      "name": "CSS",
     
      "total":9,
      
    },
    {
      "name": "Github",
      
      "total": 6,
      
    },
   
  ]
  
  return (
  
    <div className='statick'>
      <AreaChart width={730} height={350} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey='name' />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey='total' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
   
  </AreaChart>
    </div>
  )
};

export default Statick;