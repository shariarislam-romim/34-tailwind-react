// import React from 'react';

import { use } from "react";

const MarksChart = ({marksPromise}) => {
    const marksDataRes =use(marksPromise)
    // console.log(marksDataRes)
    const marksData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = marksData.map(studentData =>{
        const student = {
            id:studentData.id,
            name : studentData.name,
            physics :studentData.marks.physics,
            chemistry : studentData.marks.chemistry,
            math : studentData.marks.math
        }

        const avg =(student.physics + student.chemistry + student.math) / 3;
        student.avgMarks = avg;
        return student;
    })
    console.log(marksChartData)
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;