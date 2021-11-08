import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { AuthProvider } from "./Auth";

interface ProviderProps {
  children: ReactNode;
}
const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
