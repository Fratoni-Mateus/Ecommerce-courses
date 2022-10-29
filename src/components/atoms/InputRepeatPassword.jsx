import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function InputRepeatPassword() {
  return (
    <InputGroup>
      <InputGroup.Text>Repetir senha</InputGroup.Text>
      <Form.Control
        as="input"
        type="password"
        required
        placeholder="Digite novamente a sua senha"
        aria-label="With textarea"
      />
    </InputGroup>
  );
}
