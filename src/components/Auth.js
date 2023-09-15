import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../collections/firebase";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Auth() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const loginSubmit = async (e) => {
        e.preventDefault();

        if (isLogin) {
            // Login
            await signInWithEmailAndPassword(auth, email, password);
        } else {
            // Register
            await createUserWithEmailAndPassword(auth, email, password);
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
        >
            <Row className="justify-content-center">
                <Col
                    md={4}
                    style={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        minWidth: "400px",
                    }}
                >
                    <h1
                        className="text-center mb-3"
                        style={{ fontSize: "28px", color: "#007bff" }}
                    >
                        {isLogin ? "Login" : "Create an account"}
                    </h1>
                    <Form onSubmit={loginSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-2">
                            Submit
                        </Button>
                        <div>
                            <p>
                                {isLogin
                                    ? "Don't have an account? "
                                    : "Already have an account? "}
                                <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ? "Create an account" : "Login"}
                                </Button>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Auth;
