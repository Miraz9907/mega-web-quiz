import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie,BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, LineChart,Line } from "recharts";

const Statistic = () => {
    const topic = useLoaderData();
    const {data} = topic;
    // console.log(data);
    return (
      <div className="flex flex-col justify-center lg:mx-10 sm:mx-0">
        <h2>This is statistis component</h2>
        <div
          style={{ width: "100%", height: 300 }}
          className="my-4 "
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="total" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
          <h5 className="text-center mb-6 text-2xl font-bold">PieChart</h5>
        </div>

        <div
          style={{ width: "100%", height: 300 }}
          className="mt-10  "
        >
          <ResponsiveContainer>
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
          <h5 className="text-center mb-6 text-2xl font-bold">BarChart</h5>
        </div>

        <div
          style={{ width: "100%", height: 300 }}
          className="mt-10  "
        >
          <ResponsiveContainer>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <h5 className="text-center mb-6 text-2xl font-bold">LineChart</h5>
        </div>
      </div>
    );
};

export default Statistic;