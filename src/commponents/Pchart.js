import React from 'react';
import { PieChart, Pie } from 'recharts';


const Pchart = (amap) => {

  
    const data = amap.amap
    


    return (
        <PieChart width={800} height={800}>

            <Pie
                data={data} dataKey="ttime" nameKey="key" label outerRadius={200}   />
        </PieChart>
    );
}

export default Pchart;