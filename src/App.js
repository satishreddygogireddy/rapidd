import React, { useEffect, useState } from "react";
import Arr from "./data";
import FindTime from "./commponents/findTime";
import Table from "./commponents/Table";
import Pchart from "./commponents/Pchart";
let App = () => {
  let [data, setData] = useState([...Arr]);
  let [amap, setamap] = useState([]);
  let totalTime = [];

  let obj = {};

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (obj[data[i].EmployeeName]) {
        obj[data[i].EmployeeName].push(data[i]);
      } else {
        obj[data[i].EmployeeName] = [data[i]];
      }
    }

    for (let key in obj) {
      let cdata = obj[key];
      let ttime = 0;
      for (let i = 0; i < cdata.length; i++) {
      ttime += FindTime(cdata[i]);}
      ttime /= 60;
      console.log(Math.floor(ttime));
      
      totalTime.push({ key, ttime});
      
      // console.log(totalTime);
      
      setamap(totalTime);
      // console.log(totalTime);
      setData(ttime);
    }
  });

  return (
    <div>
      <table border='2'>
        <thead>
          <th>S.No</th>
          <th>Emp Name</th>
          <th>Time in hrs</th>
        </thead>
        <tbody> {amap.map((item, index) => 
        <Table item={item} ind={index} key={index }/>)} </tbody>
      </table>

    <Pchart amap={amap} />


    </div>
  );
};

export default App;