import React from "react";
import Card from "react-bootstrap/Card";

export default function CardTitle(props) {
  return <Card.Title>{props.courseTitle}</Card.Title>;
}
