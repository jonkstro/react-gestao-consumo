import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";

import { GlobalStyle } from "../../styles/global";


export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
