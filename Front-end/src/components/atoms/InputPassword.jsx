import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function InputPassword() {
  return (
    <InputGroup>
      <InputGroup.Text>Senha</InputGroup.Text>
      <Form.Control
        as="input"
        type="password"
        required
        placeholder="Digite sua senha"
        aria-label="With textarea"
      />
    </InputGroup>
  );
}
