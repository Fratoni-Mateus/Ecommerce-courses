import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";

export default function OrderDropDown() {
  return (
    <Col md={{ offset: 5 }}>
      <DropdownButton
        id="dropdown-basic-button"
        title="Ordenar itens"
        size="sm"
      >
        <Dropdown.Item eventKey="1">Ordem alfabética</Dropdown.Item>
        <Dropdown.Item eventKey="2">Preço crescente</Dropdown.Item>
        <Dropdown.Item eventKey="3">Preço decrescente</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
}
