import React from "react";
import { Link } from "react-router-dom";

export default function AppFooter() {
  return (
    <footer className="bg-success text-white d-flex p-2 justify-content-center">
      <p>
        <Link className="text-white" to="https://www.linkedin.com/in/fratoni/">
          Criado por Mateus Fratoni Souza em 2022.
        </Link>
      </p>
    </footer>
  );
}
