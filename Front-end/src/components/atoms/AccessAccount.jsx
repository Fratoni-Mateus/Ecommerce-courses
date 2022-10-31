import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AccessAccount() {
  return (
    <Button
      as={Link}
      to="/logged/4"
      className="col-md-12 mx-auto mt-4"
      variant="primary"
      type="submit"
    >
      Acessar conta
    </Button>
  );
}
