import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function AppHeader() {
  return (
    <header>
      <Nav fill className="p-2 justify-content-center" variant="pills">
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="1">
            Início
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/login" eventKey="2">
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
            <Button
              as={Link}
              variant="outline-secondary"
              id="button-addon2"
              to="/"
            >
              Buscar
            </Button>
          </InputGroup>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/cart" eventKey="4">
            Carrinho
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
