import { useState } from "react";
import { useCart } from "../../Providers/Cart";

import Button from "../Button";
import { Container } from "./style";

interface ProductData {
  title: string;
  categorie: string;
  image: string;
  price: string;
  userId: string;
}

interface ProductProps {
  item: ProductData;
}
const Card = ({ item }: ProductProps) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Container>
      <div className="divImg">
        <img src={item.image} alt="" />
      </div>
      <div className="divContent">
        <h3>{item.title}</h3>
        <p>{item.categorie}</p>
        <h4>
          {Number(item.price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>

        <div>
          <Button
            greenColor={true}
            onClick={() => {
              addToCart(item);
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
