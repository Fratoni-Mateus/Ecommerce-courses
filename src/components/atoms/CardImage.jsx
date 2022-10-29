import React from "react";
import Card from "react-bootstrap/Card";

export default function CardImage(props) {
  return <Card.Img className="card-image" src={props.src} alt="" />;
}
