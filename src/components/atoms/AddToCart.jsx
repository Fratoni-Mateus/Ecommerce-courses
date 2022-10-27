import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Basket from "../../assets/Basket.png";

export default function AddToCart() {
  return (
    <Button
      className="mb-1 icone-botao"
      aria-label="Adicionar ao carrinho"
      variant="primary"
    >
      <Image
        fluid="true"
        className="w-50"
        src={Basket}
        alt="Adicionar ao carrinho"
      />
    </Button>
  );
}
