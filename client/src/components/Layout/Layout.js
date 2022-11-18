import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyRoutes from "../MyRoutes/MyRoutes";
import "./Layout.css";

export default function Layout() {
  return (
    <Container fluid>
      {/* <Row style={{ display: "none" }}> */}
      <Row>
        <Col style={{ backgroundColor: "red", textAlign: "center" }}>
          Col 1 of 2
        </Col>
        <Col style={{ backgroundColor: "red", textAlign: "center" }}>
          Col 2 of 2
        </Col>
      </Row>
      <Row className="main-content">
        <Col>
          <MyRoutes />
        </Col>
      </Row>
    </Container>
  );
}
