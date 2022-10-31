import React from "react";
import Col from "react-bootstrap/Col";
import { AddToCart, PriceTag } from "../atoms";
import "../../styles/index.css";

export default function SellBadge(props) {
  return (
    <Col>
      <PriceTag price={props.price} />
      <AddToCart />
    </Col>
  );
}
