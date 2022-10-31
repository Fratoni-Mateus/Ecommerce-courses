import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Check from "../../assets/Check.png";

export default function AccessCourse() {
  return (
    <Button
      className="mb-1 button-icon"
      aria-label="Acessar curso"
      variant="success"
    >
      <Image fluid="true" className="w-50" src={Check} alt="Acessar curso" />
    </Button>
  );
}
