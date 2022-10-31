import React from "react";
import Col from "react-bootstrap/Col";
import { PriceTag, RemoveItem } from "../atoms";
import "../../styles/index.css";

export default function CartBadge() {
  return (
    <Col>
      <PriceTag />
      <RemoveItem />
    </Col>
  );
}
