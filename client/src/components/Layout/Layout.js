import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyRoutes from "../MyRoutes/MyRoutes";

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
        <Col style={{ maxWidth: "75px", backgroundColor: "red" }}></Col>
        <Col>
          <MyRoutes />
        </Col>
      </Row>
    </Container>
  );
}
