import Button from "../Button/index";
import { MainContainer, Container, Text } from "./style";
import { useCart } from "../../Providers/Cart";

import { FaWindowClose } from "react-icons/fa";
import CardCart from "../CardCart";

interface CartProps {
  closeModal: () => void;
}
const Cart = ({ closeModal }: CartProps) => {
  const { cart, removeAll } = useCart();

  return (
    <MainContainer>
      {
        <Container>
          <div className="bar">
            <div>Carrinhos de compras</div>
            <FaWindowClose onClick={() => closeModal()} />
          </div>
          <>
            {cart.map((item) => (
              <CardCart item={item} />
            ))}
          </>
          {cart.length > 0 ? (
            <>
              <div className="price">
                <p>Total</p>
                <p>
                  {cart
                    .reduce((acc, vl) => acc + Number(vl.price), 0)
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>

              <div className="button">
                <Button greenColor={true} onClick={removeAll}>
                  Remover todos
                </Button>
              </div>
            </>
          ) : (
            <Text>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </Text>
          )}
        </Container>
      }
    </MainContainer>
  );
};

export default Cart;
