import React from "react";
import Row from "react-bootstrap/Row";
import { OrderDropDown, HomeTitle } from "../atoms";

export default function HomeTitleWrapper() {
  return (
    <Row md={12}>
      <HomeTitle />
      <OrderDropDown />
    </Row>
  );
}
