// import React from 'react';

import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 80,
    "math": 89
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 78,
    "chemistry": 82,
    "math": 94
  },
  {
    "id": 3,
    "name": "Sakib",
    "physics": 92,
    "chemistry": 90,
    "math": 77
  },
  {
    "id": 4,
    "name": "Tamim",
    "physics": 88,
    "chemistry": 75,
    "math": 85
  },
  {
    "id": 5,
    "name": "Nayeem",
    "physics": 74,
    "chemistry": 88,
    "math": 90
  },
  {
    "id": 6,
    "name": "Fahim",
    "physics": 81,
    "chemistry": 79,
    "math": 72
  },
  {
    "id": 7,
    "name": "Rifat",
    "physics": 69,
    "chemistry": 84,
    "math": 88
  },
  {
    "id": 8,
    "name": "Hasan",
    "physics": 95,
    "chemistry": 91,
    "math": 96
  },
  {
    "id": 9,
    "name": "Jahid",
    "physics": 87,
    "chemistry": 73,
    "math": 81
  },
  {
    "id": 10,
    "name": "Shuvo",
    "physics": 76,
    "chemistry": 86,
    "math": 87
  }
]

const Chart = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics"></Line>
                <Line dataKey={"chemistry"} stroke="green"></Line>
                <Line dataKey={'math'} stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default Chart;