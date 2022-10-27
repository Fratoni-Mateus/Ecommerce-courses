import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import {
  CardImage,
  CardMoreText,
  CardShortText,
  CardTitle,
  MoreInfo,
} from "../atoms";

export default function CourseCard() {
  return (
    <Container>
      <Row className="mb-2">
        <Col sm={4} md={4} lg={4} xl={4}>
          <CardImage />
        </Col>
        <Col sm={5} md={6} lg={6} xl={6}>
          <CardTitle />
          <CardShortText />
          <MoreInfo />
        </Col>
      </Row>
      <Accordion.Collapse eventKey="0">
        <CardMoreText />
      </Accordion.Collapse>
    </Container>
  );
}
