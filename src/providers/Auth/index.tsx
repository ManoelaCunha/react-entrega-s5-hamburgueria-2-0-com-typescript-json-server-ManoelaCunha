import { createContext, useContext, useState, ReactNode } from "react";
import { History } from "history";
import api from "../../services";

interface IUserDataSignUp {
  name: string;
  email: string;
  password: string;
}
interface IUserDataSignIn {
  email: string;
  password: string;
}
interface AuthProviderProps {
  children: ReactNode;
}
interface AuthProviderData {
  authToken: string;
  SignUp: (userData: IUserDataSignUp, history: History) => void;
  SignIn: (userData: IUserDataSignIn, history: History) => void;
  Logout: (history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@HamburgueriaKenzie:token") || ""
  );

  const SignUp = (userData: IUserDataSignUp, history: History) => {
    api
      .post("users", userData)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const SignIn = (userData: IUserDataSignIn, history: History) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem(
          "@HamburgueriaKenzie:token",
          response.data.accessToken
        );
        setAuthToken(response.data.accessToken);
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  const Logout = (history: History) => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, SignIn, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
