import React from "react";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "16px" }}
      />
      <AppRoutes />
      <GlobalStyles />
    </Container>
  );
};

export default App;
