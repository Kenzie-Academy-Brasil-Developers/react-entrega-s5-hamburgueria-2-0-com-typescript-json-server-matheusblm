import { TextField } from "@material-ui/core";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import {
  BigContainer,
  Container,
  RigthContainer,
  LeftContainer,
} from "./styles";
import logo from "../../assets/burgerKenzie.png";
import circles from "../../assets/circles.png";

interface UserData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "O Nome deve conter apenas letras!"
      ),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatorio!")
      .oneOf([yup.ref("password"), null], "As senhas nao combinam"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const { signIn } = useAuth();
  const handleSubmitForm = (data: UserData) => {
    signIn(data);
    console.log(data);
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <BigContainer>
        <Container>
          <LeftContainer onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="backLogin">
              <h3>Cadastro</h3>
              <Link to="/" className="link">
                Retornar para o Login
              </Link>
            </div>

            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              {...register("name")}
              helperText={errors.name?.message}
            />
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
            <TextField
              id="outlined-basic"
              label="Confirme a senha"
              variant="outlined"
              {...register("passwordConfirm")}
              helperText={errors.passwordConfirm?.message}
            />
            <Button greenColor={false} type="submit">
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

export default Register;
