import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { IUserDataSignUp } from "../../types/types";

import {
  CssBox,
  CssButtonSignUp,
  CssEmailIcon,
  CssPaper,
  CssPersonIcon,
  CssTextField,
  CssTypographyText,
  CssTypographyTitle,
  CssVisibilityIcon,
  CssVisibilityOffIcon,
} from "./styles";

const SignUp = () => {
  const navigate = useNavigate();
  const { SignUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório*"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Informe um Email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataSignUp>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: IUserDataSignUp) => {
    SignUp(data, navigate);
  };

  return (
    <CssPaper elevation={3}>
      <CssBox>
        <CssTypographyTitle variant="h5">CADASTRO</CssTypographyTitle>
        <CssTypographyText variant="subtitle2">
          <Link to="/">Retornar para o Login</Link>
        </CssTypographyText>
      </CssBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Nome"
            margin="normal"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="email"
            size="small"
            label="Email"
            margin="normal"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              endAdornment: <CssEmailIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type={!showPassword ? "password" : "text"}
            size="small"
            label="Senha"
            margin="normal"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: showPassword ? (
                <CssVisibilityOffIcon onClick={handleShowPassword} />
              ) : (
                <CssVisibilityIcon onClick={handleShowPassword} />
              ),
            }}
          />
        </div>
        <div>
          <CssTextField
            type={!showPassword ? "password" : "text"}
            size="small"
            label="Confirmar Senha"
            margin="normal"
            variant="outlined"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              endAdornment: showPassword ? (
                <CssVisibilityOffIcon onClick={handleShowPassword} />
              ) : (
                <CssVisibilityIcon onClick={handleShowPassword} />
              ),
            }}
          />
        </div>
        <div>
          <CssButtonSignUp type="submit" size="large" variant="contained">
            Cadastrar
          </CssButtonSignUp>
        </div>
      </form>
    </CssPaper>
  );
};

export default SignUp;
