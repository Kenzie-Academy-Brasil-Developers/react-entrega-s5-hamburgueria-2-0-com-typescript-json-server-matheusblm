import { TextField } from "@material-ui/core";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
import { Redirect, useHistory } from "react-router";
import logo from "../../assets/burgerKenzie.png";
import circles from "../../assets/circles.png";

import {
  BigContainer,
  Container,
  RigthContainer,
  LeftContainer,
} from "./styles";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });
  const { Login } = useAuth();

  const handleSubmitForm = (data: UserData) => {
    Login(data);
    console.log(data);
  };
  const history = useHistory();

  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <BigContainer>
        <Container>
          <LeftContainer onSubmit={handleSubmit(handleSubmitForm)}>
            <h3>Login</h3>

            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              {...register("email")}
              helperText={errors.email?.message}
            />

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              {...register("password")}
              helperText={errors.password?.message}
            />

            <Button greenColor={true} type="submit">
              Entrar
            </Button>
            <span>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </span>
            <Button
              greenColor={false}
              onClick={() => history.push("/register")}
            >
              Cadastrar
            </Button>
          </LeftContainer>
          <RigthContainer>
            <img src={logo} alt="kenzieBurguer" />
            <div className="smallBox">
              <div className="greenBox"></div>
              <span>
                A vida é como um sanduíche, é preciso recheá-la com os melhores
                ingredientes.
              </span>
            </div>
            <img src={circles} alt="circles" />
          </RigthContainer>
        </Container>
      </BigContainer>
    </div>
  );
};

export default Login;
