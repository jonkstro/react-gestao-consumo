import { Container } from "./styles";
import dispositivoImg from '../../assets/dispositivo1.png';
import { useDevices } from "../../hooks/useDevices";




export function Summary() {

    const { devices } = useDevices();


    return (
        <Container>
            {devices.map(device => (
                <div key={device.id}>
                    <a href={"plataforma/"+String(device.id)}>
                        <header>
                            <p>Dispositivo: <span className={device.status}>{device.mac}</span></p>   
                            <img src={dispositivoImg} alt="logo de imagem de dispositivo" />
                        </header>
                        <strong>
                            Leitura: {device.status === 'offline' ? 'Offline' : Math.floor(Math.random() * 2000)+'kWh'}
                        </strong>
                        <br />
                        <p>Rua {device.rua}. Bairro {device.bairro}</p>
                    </a>
                </div>
            ))}
            {/* <div>
                <a href="#">
                    <header>
                        <p>Dispositivo: <span className="online">1F:2C:3F:4G:5G:3D</span></p>   
                        <img src={dispositivoImg} alt="entradas logo" />
                    </header>
                    <strong>Leitura: 200kWh</strong>
                    <br />
                    <p>Rua Merval Neres, 3095. Dirceu Arcoverde</p>
                </a>
            </div> */}
        </Container>
    );
}