import React from "react";
import Alert from "react-bootstrap/Alert";

export default function PriceTag(props) {
  return (
    <Alert variant="info" className="button-icon">
      {props.price}
    </Alert>
  );
}
