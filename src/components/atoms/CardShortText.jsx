import React from "react";
import Card from "react-bootstrap/Card";

export default function CardShortText(props) {
  return <Card.Text>{props.shortText}</Card.Text>;
}
