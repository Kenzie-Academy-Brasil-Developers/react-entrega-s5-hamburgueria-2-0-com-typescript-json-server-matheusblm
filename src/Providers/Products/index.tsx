import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../Services";

interface ProductProps {
  children: ReactNode;
}

interface Product {
  title: string;
  categorie: string;
  image: string;
  price: string;
}

interface ProductsProviderData {
  products: Product[];
  getProducts: () => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = () => {
    api
      .get("/itens")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
