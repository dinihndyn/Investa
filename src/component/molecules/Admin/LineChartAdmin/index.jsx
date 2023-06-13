import React, { useState } from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const LineChartAdmin = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart
      width={700}
      className='bg-white rounded-lg'
      margin={{
        top: 30,
        right: 50,
        left: 20,
        bottom: 5,
      }}
      height={200} data={data}>
      <Line type="monotone" dataKey="proyek" stroke="#0B72B5" />
      <Line type="monotone" dataKey="investor" stroke="#D57415" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  </ResponsiveContainer>
);
