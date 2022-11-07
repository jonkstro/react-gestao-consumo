import { Container } from "./styles";
import dispositivoImg from '../../assets/dispositivo1.png';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Dispositivo: <span className="online">1F:2C:3F:4G:5G:3D</span></p>
                    <img src={dispositivoImg} alt="entradas logo" />
                </header>
                <strong>Leitura: 100kWh</strong>
            </div>
            <div>
                <header>
                    <p>Dispositivo: <span className="offline">1F:2C:3F:4G:5G:3D</span></p>
                    <img src={dispositivoImg} alt="entradas logo" />
                </header>
                <strong>Leitura: Offline</strong>
            </div>
            <div>
                <header>
                    <p>Dispositivo: <span className="online">1F:2C:3F:4G:5G:3D</span></p>
                    <img src={dispositivoImg} alt="entradas logo" />
                </header>
                <strong>Leitura: 150kWh</strong>
            </div>
            
        </Container>
    );
}