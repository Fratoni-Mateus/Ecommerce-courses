import React from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

export default function RemoveItem() {
  return (
    <Button
      className="mb-1 button-icon"
      aria-label="Remover item"
      variant="danger"
    >
      <CloseButton variant="white" aria-label="Remover item" />
    </Button>
  );
}
