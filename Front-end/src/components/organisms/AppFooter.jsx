import React from "react";
import Alert from "react-bootstrap/Alert";

export default function AppFooter() {
  return (
    <footer>
      <Alert className="text-center" variant="dark">
        Criado por{" "}
        <Alert.Link target="_blank" href="https://www.linkedin.com/in/fratoni/">
          Mateus Fratoni Souza
        </Alert.Link>{" "}
        em 2022.
      </Alert>
    </footer>
  );
}
