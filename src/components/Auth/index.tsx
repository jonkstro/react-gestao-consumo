import React, { useState } from "react";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  SubmitButton,
} from "./styles";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../hooks/useAuth";

// IMPORTAR ÍCONES DO MATERIAL UI
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Auth() {
  // RECEBENDO VARIÁVEIS DO USEAUTH
  const {
    first_name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confPassword,
    setConfPassword,
    validarSenha,
    limparForm,
    cadastrarUser,
    loginUser,
  } = useAuth();

  // criando as variáveis de estado
  const [authMode, setAuthMode] = useState("signin");
  const [typePas, setTypePas] = useState("password");
  const [typeConf, setTypeConf] = useState("password");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setTypePas("password");
    setTypeConf("password");
  };

  function handleChangeType() {
    setTypePas(typePas === "password" ? "text" : "password");
  }

  function handleChangeTypeConf() {
    setTypeConf(typeConf === "password" ? "text" : "password");
  }

  // FUNÇÃO QUE ENVIARÁ OS DADOS PARA CADASTRO DE USUÁRIO NO USEAUTH
  async function handleCreateUser() {
    await cadastrarUser({
      first_name,
      email,
      password,
    });
  }

  // FUNÇÃO QUE IRÁ ENVIAR OS DADOS PARA FUNÇÃO DE LOGIN NO USEAUTH
  async function handleLoginUser() {
    await loginUser({
      email,
      password,
    });
  }

  if (authMode === "signin") {
    return (
      <AuthFormContainer>
        <AuthForm
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginUser();
          }}
        >
          <AuthFormContent>
            <h3 className="Auth-form-title">Logar</h3>
            <div className="text-center">
              Não tem uma conta ainda?
              <span
                className="link-primary"
                onClick={() => {
                  changeAuthMode();
                  limparForm();
                }}
              >
                Cadastrar
              </span>
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="standard"
                  placeholder="Email do Usuário: "
                  // passando valores para o input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <div>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="password"
                    id="password"
                    label="Senha"
                    type={typePas}
                    fullWidth
                    variant="standard"
                    placeholder="Senha do Usuário: "
                    // passando valores para o input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
                {typePas === "password" ? (
                  <VisibilityIcon
                    onClick={() => {
                      handleChangeType();
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      handleChangeType();
                    }}
                  />
                )}
              </div>
              <Grid item xs={12}>
                <SubmitButton>LOGAR</SubmitButton>
              </Grid>
            </Grid>
            <br />
            <p className="text-center mt-2">
              <a href="auth/forgot">Esqueceu sua senha?</a>
            </p>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    );
  }

  return (
    <AuthFormContainer>
      <AuthForm
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateUser();
        }}
      >
        <AuthFormContent>
          <h3 className="Auth-form-title">Cadastrar</h3>
          <div className="text-center">
            Já tem uma conta cadastrada?{" "}
            <span
              className="link-primary"
              onClick={() => {
                changeAuthMode();
                limparForm();
              }}
            >
              Logar
            </span>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="name"
                id="name"
                label="Nome Completo"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Ex: João Silva"
                // passando valores para o input
                value={first_name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="email"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                placeholder="Email do Usuário: "
                // passando valores para o input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <div>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="password"
                  id="password"
                  label="Senha"
                  type={typePas}
                  fullWidth
                  variant="standard"
                  placeholder="Senha do Usuário: "
                  // passando valores para o input
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    validarSenha(event.target.value);
                  }}
                />
              </Grid>
              {typePas === "password" ? (
                <VisibilityIcon
                  onClick={() => {
                    handleChangeType();
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => {
                    handleChangeType();
                  }}
                />
              )}
            </div>
            {/* <p
              className={
                lengthValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos 8 caracteres
            </p>
            <p
              className={
                upperValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos uma letra maiúscula
            </p>
            <p
              className={
                lowerValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos uma letra minúscula
            </p>
            <p
              className={
                numberValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos um número
            </p>
            <p
              className={
                specialValidated
                  ? "validationMessageOk"
                  : "validationMessageError"
              }
            >
              Sua senha deve conter ao menos um caractere especial
            </p> */}
            <div>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="confirm_password"
                  id="confirm_password"
                  label="Conrirmar Senha"
                  type={typeConf}
                  fullWidth
                  variant="standard"
                  placeholder="Repita a senha do Usuário: "
                  // passando valores para o input
                  value={confPassword}
                  onChange={(event) => {
                    setConfPassword(event.target.value);
                  }}
                />
              </Grid>
              {typeConf === "password" ? (
                <VisibilityIcon
                  onClick={() => {
                    handleChangeTypeConf();
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => {
                    handleChangeTypeConf();
                  }}
                />
              )}
            </div>
            <Grid item xs={12}>
              <SubmitButton>CADASTRAR</SubmitButton>
            </Grid>
          </Grid>
          <br />
          <br />
          <p className="text-center mt-2">
            <a href="auth/forgot">Esqueceu sua senha?</a>
          </p>
        </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  );
}
