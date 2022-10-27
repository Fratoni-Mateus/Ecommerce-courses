import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function InputUserEmail() {
  return (
    <InputGroup>
      <InputGroup.Text>Nome de usuário</InputGroup.Text>
      <Form.Control as="input" aria-label="With textarea" />
    </InputGroup>
  );
}
