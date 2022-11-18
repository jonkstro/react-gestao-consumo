import React from "react";
import { HeaderLogin } from '../../components/HeaderLogin';
import { GlobalStyle } from '../../styles/global';
import { Auth } from '../../components/Auth';



export default function Logar() {
  return (
    <>
      <HeaderLogin />
      <Auth />
      <GlobalStyle />
    </>
  );
}
