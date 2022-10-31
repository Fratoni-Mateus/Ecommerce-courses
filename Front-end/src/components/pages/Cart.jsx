import React from "react";
import Default from "../templates/Default";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartCourseCard } from "../organisms";

export default function Cart() {
  return (
    <Default>
      <main>
        <Row>
          <Col>
            <h1 className="d-flex justify-content-center">
              Itens no carrinho:
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CartCourseCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="d-flex justify-content-center">
              Valor total do carrinho - R$ 20,00.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="d-flex justify-content-center">
              Favor enviar um documento de identidade para concluir a compra.
            </h3>
          </Col>
        </Row>
        <Row className="half mx-auto">
          <form>
            <Col sm={9} md={10} lg={10} xl={10}>
              <div class="mb-3 ml-4">
                <input
                  accept=".jpg, .jpeg, .gif, .bmp, .webp, .pdf"
                  required
                  class="form-control"
                  type="file"
                  id="formFile"
                />
              </div>
            </Col>
            <Col sm={3} md={2} lg={2} xl={2}>
              <Button
                type="submit"
                variant="success"
                span={2}
                className="mb-4 justify-content-center"
                onClick={() => console.log("Clicou")}
                // href="/logged"
                //
              >
                Comprar
              </Button>
            </Col>
          </form>
        </Row>
      </main>
    </Default>
  );
}
