import React from "react";
import Default from "../templates/Default";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartCourseCard } from "../organisms";

export default function Cart() {
  return (
    <Default>
      <main className="">
        <Row>
          <Col>
            <h1>Itens no carrinho:</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CartCourseCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Valor total do carrinho - R$ 20,00.</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              Favor enviar um documento de identidade para concluir a compra.
            </h3>
            <Button variant="success" className="mb-4" href="/logged">
              Comprar
            </Button>
          </Col>
        </Row>
      </main>
    </Default>
  );
}
