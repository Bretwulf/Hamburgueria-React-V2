import { TextField } from "@mui/material";
import { Form } from "../../components/Form/index";
import { Button } from "../../components/button/index";
import AsideLoginDesk from "../../components/AsideDesktop/index";
import AsideLoginMobile from "../../components/AsideMobile";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import { iRegister } from "../../types/types";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { register } = useContext(UserContext);
  const schema = yup.object().shape({
    name: yup.string().required("Entre um nome"),
    email: yup
      .string()
      .required("Entre um e-mail!")
      .email("Entre um e-mail válido")
      .lowercase(),
    password: yup
      .string()
      .required("Entre uma senha!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,50}$/,
        "Senha deve conter 1 caractere maísculo, 1 minusculo, 1 caractere especial, 1 número e mínimo de 6 caracteres. "
      ),
    passwordConfirm: yup
      .string()
      .required("você precisa confirmar a senha!")
      .test("passwords-match", "Senhas devem corresponder!", function (value) {
        return this.parent.password === value;
      }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iRegister>({ resolver: yupResolver(schema), mode: "onChange" });

  return (
    <>
      <main className="login-organizer container">
        <AsideLoginDesk />
        <AsideLoginMobile />
        <Form
          onSubmit={handleSubmit((data) => {
            register(data);
          })}
        >
          <header className="register-header">
            <h3>Cadastro</h3>
            <Link className="link" to="/login">
              Retornar para o login
            </Link>
          </header>

          <Controller
            control={control}
            name="name"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Nome"
                variant="outlined"
                onChange={onChange}
                value={value}
                fullWidth
                error={errors.name !== undefined}
                helperText={errors.name?.message}
                color={isDirty ? "success" : "primary"}
              />
            )}
          />
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
          <Controller
            control={control}
            name="passwordConfirm"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Confirmar Senha"
                type="password"
                variant="outlined"
                onChange={onChange}
                value={value}
                error={errors.passwordConfirm !== undefined}
                helperText={errors.passwordConfirm?.message}
                color={isDirty ? "success" : "primary"}
                fullWidth
              />
            )}
          />
          <div className="submitbox">
            <Button disabled={!isDirty || !isValid} full>
              Cadastrar
            </Button>
          </div>
        </Form>
      </main>
    </>
  );
};

export default RegisterPage;
