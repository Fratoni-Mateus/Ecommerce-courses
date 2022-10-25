import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function AppHeader() {
  return (
    <Nav fill className="p-2 justify-content-center" variant="pills">
      <Nav.Item>
        <Nav.Link href="/" eventKey="1">
          Início
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login" eventKey="2">
          Usuário
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Busque aqui"
            aria-label="Busque aqui"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Buscar
          </Button>
        </InputGroup>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4">Carrinho</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
