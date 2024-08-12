import SignUp from "../../components/SignUp";
import { ContainerRegister } from "./styles";
import { Box } from "@material-ui/core";
import img from "../../assets/Mask Group.png";

const Register = () => {
  return (
    <ContainerRegister>
      <div style={{ margin: "30px" }}>
        <img src={img} alt="logo" width="200" />
      </div>
      <SignUp />
    </ContainerRegister>
  );
};

export default Register;
