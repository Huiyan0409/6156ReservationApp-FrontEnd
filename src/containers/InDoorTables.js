import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Tables.css";
import Button from 'react-bootstrap/Button';


export default function GetInTables() {
  const [table, setTable] = useState([]);

  const fetchData = () => {
    axios
      .get("https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/tables/indoor")
      .then((res) => {
        console.log(res);
        setTable(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>All Tables List</h1>
      <Button href= "/outdoor" variant="outline-primary">Get Outdoor Tables</Button>{' '}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button href= "/tables" variant="outline-primary">Get All Tables</Button>{' '}
      <tbody>
          <tr>
            <th>Table ID</th>
            <th>Seat Capacity</th>
            <th>Indoor/Outdoor</th>
          </tr>
          {table.map((item, i) => (
            <tr key={i}>
              <td>{item.table_id}</td>
              <td>{item.seat_capacity}</td>
              <td>{item.indoor==1 ? "Indoor" : "Outdoor"}</td>
            </tr>
          ))}
    </tbody>

    </main>
  );
}
