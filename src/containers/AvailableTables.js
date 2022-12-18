import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Tables.css";

export default function GetAvailableTables() {
  const [seat_num, setSeat_num] = useState("");
  const [table, setTable] = useState([]);

  useEffect(() => {
  if (seat_num != "") {
    console.log(seat_num)
    const req = 'https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/availabletables/'+seat_num
    console.log(req)
    axios.get(req)
      .then((res) => {
        console.log(res);
        setTable(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}, [seat_num]);

  const handleOnChange = (e) => {
    e.preventDefault()
    setSeat_num(e.target.value)
  }

  return (
    <div>
    <form>
      <label>Please enter your table size:<span>&nbsp;&nbsp;</span>
        <select onChange={(e) => handleOnChange(e)}>
          <option value="200">Select...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
    </form>
    <br></br>
      {table=="NOT FOUND" ? <h4>There is no available seat for your table size now.</h4>
      :
      <div>
      <h3>Available Tables List</h3>
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
      </div>
      }
    </div>
  )
}
