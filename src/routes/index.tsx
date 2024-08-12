import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface RouteProps {
  isPrivate?: boolean;
}

const AppRoutes = ({ isPrivate = false }: RouteProps) => {
  const { authToken } = useAuth();

  return (
    <Routes>
      {isPrivate === !!authToken ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
