import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Basket from "../../assets/Basket.png";

export default function AddToCart() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <Button
      className="mb-1 button-icon"
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
