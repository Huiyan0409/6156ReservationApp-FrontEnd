import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Tables.css";
import Button from 'react-bootstrap/Button';


export default function CheckReservation() {
  const [res, setRes] = useState([]);

  const fetchData = () => {
    const req ="https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/reservation/example@gmail.com"
    axios
      .get(req)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  },[])

  const handleClick = () => {
    console.log('this is:');
    const req = "https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/reservation/example@gmail.com"
    console.log(req)
    axios.delete(req)
      .then((res) => {
        setRes("-1");
      })
      .catch((err) => {
        console.log(err);
      });
  };

if (res != "NOT FOUND" && res != "-1" && res != null) {
  console.log(res)
  return (
    <main>
      <h1>Your Reservation</h1>

      <tbody>
          <tr>
            <th>Email</th>
            <th>Reservation Time</th>
            <th>Table ID</th>
          </tr>
          {res.map((item, i) => (
            <tr key={i}>
              <td>{item.email}</td>
              <td>{item.reservetime}</td>
              <td>{item.table_id}</td>
            </tr>
          ))}
    </tbody>
    <Button onClick={() => handleClick()} variant="outline-primary">Delete My Reservation</Button>{' '}
    </main>
  );
  }else{
    return(
      <h1>You don't have a reservation now.</h1>
    );
  }
}
