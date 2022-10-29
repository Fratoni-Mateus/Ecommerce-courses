import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { CourseCard, SellBadge } from "../molecules/";

export default function PricedCourseCard(props) {
  return (
    <Card border="secondary" className="m-3 p-2">
      <Card.Body>
        <Accordion>
          <Row>
            <Col sm={9} md={10} lg={10} xl={10}>
              <CourseCard
                src={props.src}
                courseTitle={props.courseTitle}
                shortText={props.shortText}
                moreText={props.moreText}
              />
            </Col>
            <Col sm={3} md={2} lg={2} xl={2}>
              <SellBadge price={props.price} />
            </Col>
          </Row>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
