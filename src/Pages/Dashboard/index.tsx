import Navbar from "../../Components/NavBar";
import { useProducts } from "../../Providers/Products";
import { useAuth } from "../../Providers/Auth";
import Card from "../../Components/Card";
import { useState } from "react";
import Cart from "../../Components/Cart";
import { Redirect } from "react-router";
import { Container } from "./style";

const Dashboard = () => {
  const { products } = useProducts();
  const { userId } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal);
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Navbar closeModal={closeModal} />
      <Container>
        {products.map((product) => {
          const newProduct = { ...product, userId };
          return <Card item={newProduct} />;
        })}
      </Container>
      {showModal && <Cart closeModal={closeModal} />}
    </div>
  );
};

export default Dashboard;
