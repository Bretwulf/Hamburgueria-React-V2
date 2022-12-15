import { TextField } from "@mui/material";
import { Form } from "../../components/Form/index";
import { Button } from "../../components/button/index";
import AsideLoginDesk from "../../components/AsideDesktop/index";
import AsideLoginMobile from "../../components/AsideMobile";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { iLogin } from "../../types/types";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Entre um e-mail!")
      .email("Entre um e-mail válido")
      .lowercase(),
    password: yup.string().required("Entre uma senha!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iLogin>({ resolver: yupResolver(schema), mode: "onChange" });
  return (
    <>
      <main className="login-organizer container">
        <AsideLoginMobile />
        <Form
          onSubmit={handleSubmit((data) => {
            login(data);
          })}
        >
          <h3>Login</h3>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="E-mail"
                variant="outlined"
                onChange={onChange}
                value={value}
                fullWidth
                error={errors.email !== undefined}
                helperText={errors.email?.message}
                color={isDirty ? "success" : "primary"}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Senha"
                type="password"
                variant="outlined"
                onChange={onChange}
                sx={{ input: { borderColor: isDirty ? "success" : "primary" } }}
                color={isDirty ? "success" : "primary"}
                error={errors.password !== undefined}
                helperText={errors.password?.message}
                value={value}
                fullWidth
              />
            )}
          />
          <div className="submitbox">
            <Button type="submit" disabled={!isValid || !isDirty} green full>
              Logar
            </Button>
            <small>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </small>
            <Link to="/cadastro">
              <Button full>Cadastrar</Button>
            </Link>
          </div>
        </Form>
        <AsideLoginDesk />
      </main>
    </>
  );
};

export default LoginPage;
