import logoImg from '../../assets/logo.png'
import Modal from '../Modal';
import { Container, Content } from './styles'

export function Header() {


    return (
        <>
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="dt money" />
                    <h3>GESTÃO DE CONSUMO</h3>
                </div>
                <Modal />
                {/* <button type="button">
                    Novo Dispositivo
                </button> */}
            </Content>
        </Container>
        </>
    )
}
