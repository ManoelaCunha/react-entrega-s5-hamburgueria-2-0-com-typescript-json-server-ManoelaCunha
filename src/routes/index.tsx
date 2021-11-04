import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface RouteProps {
  isPrivate?: boolean;
}

const Routes = ({ isPrivate = false }: RouteProps) => {
  const { authToken } = useAuth();

  return (
    <Switch>
      {isPrivate === !!authToken ? (
        <>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Redirect to="/home" />
        </>
      )}
    </Switch>
  );
};

export default Routes;
