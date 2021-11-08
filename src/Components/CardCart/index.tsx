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
  id?: number;
}

interface ProductProps {
  item: ProductData;
}
const CardCart = ({ item }: ProductProps) => {
  const { removeFromCart } = useCart();
  console.log(item);
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
            // onClick={() => {
            //   removeFromCart(item.id);
            // }}
          >
            Remover
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CardCart;
