import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { IUserDataSignIn, IUserDataSignUp } from "../../types/types";
import { NavigateFunction } from "react-router";
import { toast } from "react-toastify";
import api from "../../services";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  userId: string;
  authToken: string;
  SignUp: (userData: IUserDataSignUp, navigate: NavigateFunction) => void;
  SignIn: (userData: IUserDataSignIn, navigate: NavigateFunction) => void;
  Logout: (navigate: NavigateFunction) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@HamburgueriaKenzie:token") || ""
  );

  const [userId, setUserId] = useState(
    () => localStorage.getItem("@HamburgueriaKenzie:userId") || ""
  );

  const SignUp = (userData: IUserDataSignUp, navigate: NavigateFunction) => {
    api
      .post("users", userData)
      .then((_) => {
        toast.success("Sucesso ao criar a conta!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const SignIn = (userData: IUserDataSignIn, navigate: NavigateFunction) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem(
          "@HamburgueriaKenzie:token",
          response.data.accessToken
        );
        localStorage.setItem(
          "@HamburgueriaKenzie:userId",
          response.data.user.id
        );
        setAuthToken(response.data.accessToken);
        setUserId(response.data.user.id);
        toast.success("Sucesso ao fazer Login!");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  const Logout = (navigate: NavigateFunction) => {
    localStorage.clear();
    setAuthToken("");
    navigate("/");
  };

  const value = useMemo(
    () => ({
      authToken,
      userId,
      Logout,
      SignIn,
      SignUp,
    }),
    [authToken, userId]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
