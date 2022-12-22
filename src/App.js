import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function App() {
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
    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        Reservation Application
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                      <Nav activeKey={window.location.pathname}>
                      <LinkContainer to="/reservation">
                         <Nav.Link>Make a Reservation</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/checkReservation">
                        <Nav.Link>Check Reservations</Nav.Link>
                    </LinkContainer>
                        <NavDropdown title="Tables" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                        <LinkContainer to="/tables">
                            <Nav.Link>ALL Tables</Nav.Link>
                        </LinkContainer>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <LinkContainer to="/availableTables">
                            <Nav.Link>Available Tables</Nav.Link>
                        </LinkContainer>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <LinkContainer to="/addTables">
                            <Nav.Link>Add Tables</Nav.Link>
                        </LinkContainer>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <LinkContainer to="/deleteTables">
                            <Nav.Link>Delete Tables</Nav.Link>
                        </LinkContainer>
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Logged in as {email}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes />
        </div>
    );
}

export default App;
