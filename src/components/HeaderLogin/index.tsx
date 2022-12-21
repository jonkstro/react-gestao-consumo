import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

export function HeaderLogin() {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logoImg} alt="dt money" />
            <h3>GESTÃO DE CONSUMO</h3>
          </div>
        </Content>
      </Container>
    </>
  );
}
