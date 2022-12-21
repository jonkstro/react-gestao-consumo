import { HeaderLogin } from "../../components/HeaderLogin";
import { GlobalStyle } from "../../styles/global";
import { TransactionsTable } from "../../components/TransactionsTable";

import { useParams } from "react-router-dom";

export default function Plataforma() {
  const { id } = useParams();

  console.log("ID: " + id);
  return (
    <>
      <h1>id {id}</h1>
      <HeaderLogin />
      {/* <Summary /> */}
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
