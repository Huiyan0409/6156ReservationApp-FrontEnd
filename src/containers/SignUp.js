import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormFields } from "../lib/hooksLib";
import "./SignUp.css";
import Button from "react-bootstrap/Button";

export default function Signup() {
    const [fields, handleFieldChange] = useFormFields({
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [newUser, setNewUser] = useState(null);

    function validateForm() {
        return (
            fields.firstName.length > 0 &&
            fields.lastName.length > 0 &&
            fields.phone.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setNewUser(fields);
    }

    function renderForm() {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" size="lg">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={fields.firstName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="lastName" size="lg">
                    <Form.Label>last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fields.lastName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone" size="lg">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        value={fields.phone}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" size="lg">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                </Form.Group>
                <br/>
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Sign up
                </Button>
            </Form>
        );
    }

    return (
        <div className="Signup">
            {renderForm()}
        </div>
    );
}