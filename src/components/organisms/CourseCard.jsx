import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Basket from "../../assets/Basket.png";

export default function CourseCard() {
  return (
    <div>
      <Card border="secondary" className="m-3 p-2">
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Card.Img
                  className=""
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Col>
              <Col sm={6}>
                <Card.Title>Curso de programação</Card.Title>
                <Card.Text>
                  Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra
                  quem é amistosis quis leo. Não sou faixa preta cumpadi, sou
                  preto inteiris, inteiris. Mais vale um bebadis conhecidiss,
                  que um alcoolatra anonimis.
                </Card.Text>
              </Col>
              <Col sm={2}>
                <Badge bg="secondary" className="w-100">
                  R$ 20,00
                </Badge>
                <Button variant="primary">
                  <img
                    className="w-50"
                    src={Basket}
                    alt="Adicionar ao carrinho"
                  />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card border="secondary" className="m-3 p-2">
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Card.Img
                  className=""
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Col>
              <Col sm={6}>
                <Card.Title>Curso de programação</Card.Title>
                <Card.Text>
                  Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra
                  quem é amistosis quis leo. Não sou faixa preta cumpadi, sou
                  preto inteiris, inteiris. Mais vale um bebadis conhecidiss,
                  que um alcoolatra anonimis.
                </Card.Text>
              </Col>
              <Col sm={2}>
                <Badge bg="secondary" className="w-100">
                  R$ 20,00
                </Badge>
                <Button variant="primary">
                  <img
                    className="w-50"
                    src={Basket}
                    alt="Adicionar ao carrinho"
                  />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card border="secondary" className="m-3 p-2">
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Card.Img
                  className=""
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Col>
              <Col sm={6}>
                <Card.Title>Curso de programação</Card.Title>
                <Card.Text>
                  Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra
                  quem é amistosis quis leo. Não sou faixa preta cumpadi, sou
                  preto inteiris, inteiris. Mais vale um bebadis conhecidiss,
                  que um alcoolatra anonimis.
                </Card.Text>
              </Col>
              <Col sm={2}>
                <Badge bg="secondary" className="w-100">
                  R$ 20,00
                </Badge>
                <Button variant="primary">
                  <img
                    className="w-50"
                    src={Basket}
                    alt="Adicionar ao carrinho"
                  />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
