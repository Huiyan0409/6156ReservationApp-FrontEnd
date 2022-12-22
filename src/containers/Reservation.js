import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AddTables.css";
import axios from 'axios';

export default function Reservation() {
    const [indoor, setIndoor] = useState("");
    const [seats, setSeats] = useState("");
    const [sent, setSent] = useState(false);
    const [res, setRes] = useState("");

    function validateForm() {
        return seats > 0 && indoor != "";
    }

    const [email, setEmail] = useState("");
    const fetchEmail = () => {
      axios
        .get("https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/email")
        .then((res) => {
          console.log(res);
          setEmail(res.data.email);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      fetchEmail();
    },[])


    function handleSubmit(event) {
        event.preventDefault();
        const req = 'https://0qdu9kfscl.execute-api.us-east-2.amazonaws.com/test/reservation/'+email+"/"+indoor+"/"+seats
        console.log(req)
        axios.put(req)
          .then((res) => {
            console.log(res);
            setRes(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
        setSent(true);
    }

    if (!sent) {
      return (
          <div className="AddTables">
          <h3>Please enter the following information to make reservations:</h3>
              <Form onSubmit={handleSubmit}>
                  <Form.Group size="lg" controlId="seats">
                      <Form.Label>Seat Capacity</Form.Label>
                      <select onChange={(e) => setSeats(e.target.value)}>
                        <option value="0">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                  </Form.Group>
                  <Form.Group size="lg" controlId="indoor">
                      <Form.Label>InDoor/OutDoor</Form.Label>
                      <select onChange={(e) => setIndoor(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                      </select>
                  </Form.Group>
                  <br/>
                  <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                      Submit
                  </Button>
              </Form>
          </div>
      );
    } else {
            return (
                <div style={{paddingLeft: '1vw',paddingTop: '1vh'}}>
                  <p>{res}</p>
                </div>
            )
        }
    }
