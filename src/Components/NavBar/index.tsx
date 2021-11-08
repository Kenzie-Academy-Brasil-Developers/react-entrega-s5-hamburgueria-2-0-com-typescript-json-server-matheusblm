import {
  AppBar,
  IconButton,
  Badge,
  Typography,
  InputBase,
  Paper,
} from "@material-ui/core";
import { ShoppingCart, ArrowBack, SearchOutlined } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import logo from "../../assets/burgerKenzie.png";
import { useCart } from "../../Providers/Cart";
import { Container } from "./style";
import { useAuth } from "../../Providers/Auth";

interface NavBarProps {
  closeModal: () => void;
}

const Navbar = ({ closeModal }: NavBarProps) => {
  const { cart } = useCart();
  const { Logout } = useAuth();
  const history = useHistory();
  return (
    <Container>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            onClick={() => history.push("/")}
          >
            <img src={logo} alt="Kenzie Burguer" />
          </Typography>
          <div className="flexContainer">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Digitar Pesquisa"
                inputProps={{ "aria-label": "Digitar Pesquisa" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchOutlined />
              </IconButton>
            </Paper>

            <IconButton arial-label="Logout" color="inherit">
              <ArrowBack
                sx={{ color: "var(--gray-300)" }}
                onClick={() => Logout()}
              />
            </IconButton>
            <IconButton arial-label="Cart" color="inherit">
              <Badge
                sx={{ color: "var(--primary)" }}
                badgeContent={cart.length}
                color="secondary"
              >
                <ShoppingCart
                  sx={{ color: "var(--gray-300)" }}
                  onClick={() => closeModal()}
                />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
