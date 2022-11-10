
import React, { useState } from "react";
import { AuthForm, AuthFormContainer, AuthFormContent, SubmitButton } from "./styles";
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';


export function Auth() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <AuthFormContainer>
        <AuthForm action="" method="POST">
          <AuthFormContent>
            <h3 className="Auth-form-title">Logar</h3>
            <div className="text-center">
              Não tem uma conta ainda?  {" "}
              <span className="link-primary" onClick={changeAuthMode}>
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
                        placeholder='Email do Usuário: '
                        />
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="password"
                        id="password"
                        label="Senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        placeholder='Senha do Usuário: '
                    />
                </Grid>
                <Grid item xs={12}>    
                  <SubmitButton >
                    Logar
                  </SubmitButton>
                </Grid>
                
            </Grid>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    )
  }

  return (
    <AuthFormContainer>
      <AuthForm action="" method="POST">
      <AuthFormContent>
          <h3 className="Auth-form-title">Cadastrar</h3>
          <div className="text-center">
            Já tem uma conta cadastrada?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Logar
            </span>
          </div>
            <Grid container spacing={0}>
                <Grid item xs={12}>      
                    <TextField
                        margin="dense"
                        name="name"
                        id="name"
                        label="Nome"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder='Nome do Usuário: '
                        />
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="username"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder='Username do Usuário: '
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
                        placeholder='Email do Usuário: '
                        />
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="password"
                        id="password"
                        label="Senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        placeholder='Senha do Usuário: '
                    />
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="confirm_password"
                        id="confirm_password"
                        label="Conrirmar Senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        placeholder='Repita a senha do Usuário: '
                    />
                </Grid>
                <Grid item xs={12}>    
                  <SubmitButton >
                    Cadastrar
                  </SubmitButton>
                </Grid>
                
            </Grid>
            <br />
            <p className="text-center mt-2">
              <a href="#">Esqueceu sua senha?</a>
            </p>
          </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  )
}