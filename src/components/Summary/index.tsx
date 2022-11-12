import { Container } from "./styles";
import dispositivoImg from '../../assets/dispositivo1.png';
import { useEffect, useState } from "react";
import { api } from "../../services/api";


// criar interface do objeto que irá ser recebido da api
interface Device {
    id: number;
    mac: string;
    email: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    latitude: number;
    longitude: number;
    status: string;
}

export function Summary() {

    // criar variável de array que armazenará os objetos da api:
    const [devices, setDevices] = useState<Device[]>([]);
    
    // criar função que irá realizar o GET da API
    // realizar a busca na API ao carregar a página:
    useEffect(()=> {
        api.get('/devices')
            .then(response => setDevices(response.data.devices))
    }, []);


    return (
        <Container>
            {devices.map(device => (
                <div key={device.id}>
                    <a href={String(device.id)}>
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