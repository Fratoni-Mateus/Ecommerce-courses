import React from "react";
import Button from "react-bootstrap/Button";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button variant="outline-success" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

export default function MoreInfo() {
  return <CustomToggle eventKey="0">Saiba mais!</CustomToggle>;
}
