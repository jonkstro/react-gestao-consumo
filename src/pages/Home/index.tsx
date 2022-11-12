import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import NewDeviceModal from "../../components/NewDeviceModal";
import { GlobalStyle } from "../../styles/global";


export default function Home() {

  // criar useState que irá abrir ou fechar o MODAL de novo dispositivo:
  const [isNewDeviceModalOpen, setIsNewDeviceModalOpen] = useState(false);

  function handleOpenNewDeviceModal() {
    setIsNewDeviceModalOpen(true);
  }

  function handleCloseNewDeviceModal() {
    setIsNewDeviceModalOpen(false);
  }

  return (
    <>
      {/* ENVIAR AO HEADER AS PROPRIEDADES DO  ESTADO DO BOTAO DO MODAL */}
      <Header onOpenNewDeviceModal={handleOpenNewDeviceModal} />
      <Dashboard />
      {/* ENVIAR AO MODAL AS PROPRIEDADES DO ESTADO DO BOTAO DO MODAL */}
      <NewDeviceModal 
        isOpen={isNewDeviceModalOpen}
        onRequestClose={handleCloseNewDeviceModal}
      />
      <GlobalStyle />
    </>
  );
}
