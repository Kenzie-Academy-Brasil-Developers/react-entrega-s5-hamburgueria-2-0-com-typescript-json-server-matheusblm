import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router";
import api from "../../Services";
import { useAuth } from "../Auth";

interface CartProps {
  children: ReactNode;
}

interface Product {
  id?: number;
  title: string;
  categorie: string;
  image: string;
  price: string;
  userId: string;
}

interface CartProviderData {
  authToken: string;
  cart: Product[];
  addToCart: (Product: Product) => void;
  removeFromCart: (Product: Product) => void;
  getCart: (Product: Product) => void;
  removeAll: (Product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const { userId, authToken } = useAuth();

  const [cart, setCart] = useState<Product[]>([]);

  const getCart = useCallback(() => {
    api
      .get(`/cart?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => setCart(response.data))
      .catch((err) => console.log(err));
  }, [userId]);

  const addToCart = (item: Product) => {
    api
      .post("/cart/", item, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        getCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeFromCart = ({ id }: Product) => {
    api
      .delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(() => console.log("excluido com sucesso"))
      .catch((err) => console.log(err));
  };
  const removeAll = () => {
    cart.map(async (item) => {
      await api
        .delete(`/cart/${item.id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(() => {
          getCart();
        });
    });
  };

  useEffect(() => {
    getCart();
  }, [cart]);
  return (
    <CartContext.Provider
      value={{ authToken, cart, addToCart, removeFromCart, getCart, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
