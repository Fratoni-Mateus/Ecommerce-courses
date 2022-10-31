import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function InputUserEmail() {
  return (
    <InputGroup>
      <InputGroup.Text>Endereço de e-mail</InputGroup.Text>
      <Form.Control
        as="input"
        type="email"
        required
        placeholder="Digite seu e-mail"
        aria-label="With textarea"
      />
    </InputGroup>
  );
}
