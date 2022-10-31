import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { CourseCard, CartBadge } from "../molecules/";

export default function CartCourseCard() {
  return (
    <Card border="secondary" className="m-3 p-2">
      <Card.Body>
        <Accordion>
          <Row>
            <Col sm={9} md={10} lg={10} xl={10}>
              <CourseCard />
            </Col>
            <Col sm={3} md={2} lg={2} xl={2}>
              <CartBadge />
            </Col>
          </Row>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
