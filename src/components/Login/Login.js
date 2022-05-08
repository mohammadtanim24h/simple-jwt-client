import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="w-50 mx-auto mt-3 shadow p-3 rounded bg-light">
            <h4 className="mx-auto">Please Login</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" className="w-25" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
