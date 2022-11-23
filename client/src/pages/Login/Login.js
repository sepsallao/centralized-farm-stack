import React from "react";
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  return (
    <Container className="login-card" fluid>
      <Card className="card-size">
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/500x75?text=Featured+Banner"
        />
        <Card.Header>
          <img
            src="https://via.placeholder.com/300x75?text=Logo"
            style={{
              margin: "10px auto",
              width: "50%",
              display: "block",
            }}
            alt=""
          />
          <h3 style={{ textAlign: "center" }}>Welcome to Information System</h3>
        </Card.Header>
        <Card.Body className="card-body">
          <Form className="form-body">
            <Form.Group className="mb-3">
              <FloatingLabel label="Email address">
                <Form.Label visuallyHidden="true">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </FloatingLabel>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Password">
                <Form.Label visuallyHidden="true">Password</Form.Label>
                <Form.Control type="Password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me?" />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
