import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../Services";
import { useHistory } from "react-router";
import { useProducts } from "../Products";

interface UserProps {
  children: ReactNode;
}
interface UserData {
  name?: string;
  email: string;
  password: string;
  id?: number;
  user?: any;
}

interface UserProvider {
  authToken: string;
  userId: string;
  signIn: (UserData: UserData) => void;
  Login: (UserData: UserData) => void;
  Logout: () => void;
}

const AuthContext = createContext<UserProvider>({} as UserProvider);

export const AuthProvider = ({ children }: UserProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const { getProducts } = useProducts();
  const [userId, setUserId] = useState(() => localStorage.getItem("id") || "");
  const signIn = (userData: UserData) => {
    api
      .post("/signup", userData)
      .then((response) => {
        console.log("Sucesso na criacao de conta");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  const Login = (userData: UserData) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuthToken(response.data.token);
        localStorage.setItem("id", response.data.user.id);
        setUserId(response.data.user.id);
      })
      .catch((err) => console.log(err));
  };
  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
  };

  return (
    <AuthContext.Provider value={{ authToken, Login, Logout, signIn, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
