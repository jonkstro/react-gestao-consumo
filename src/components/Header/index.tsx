import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

// criar interface que irá receber as propriedades do MODAL:
interface HeaderProps {
  onOpenNewDeviceModal: () => void;
}

// Header irá agora receber as propriedades enviadas no APP.tsx
export function Header({ onOpenNewDeviceModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logoImg} alt="dt money" />
            <h3>GESTÃO DE CONSUMO</h3>
          </div>
          <button type="button" onClick={onOpenNewDeviceModal}>
            Novo Dispositivo
          </button>
        </Content>
      </Container>
    </>
  );
}
