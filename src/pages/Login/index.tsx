import { Header } from '../../components/Header';
import { Dashboard } from '../../components/Dashboard';
import { GlobalStyle } from '../../styles/global';
import React from "react";
import { Auth } from './auth';



export default function Logar() {
  return (
    <>
      <Header />
      <Auth />
      <GlobalStyle />
    </>
  );
}
