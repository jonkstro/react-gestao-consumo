import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>DISPOSITIVO</th>
                        <th>STATUS</th>
                        <th>LEITURA</th>
                        <th>DATA</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="deposit">ONLINE</td>
                        <td>100 kWh</td>
                        <td>20/02/2022 - 06h 00m</td>
                    </tr>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="withdraw">OFFLINE</td>
                        <td>OFFLINE</td>
                        <td>20/02/2022 - 07h 00m</td>
                    </tr>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="deposit">ONLINE</td>
                        <td>110 kWh</td>
                        <td>20/02/2022 - 08h 00m</td>
                    </tr>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="deposit">ONLINE</td>
                        <td>120 kWh</td>
                        <td>20/02/2022 - 09h 00m</td>
                    </tr>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="deposit">ONLINE</td>
                        <td>130 kWh</td>
                        <td>20/02/2022 - 10h 00m</td>
                    </tr>
                    <tr>
                        <td>Dispositivo: D6:9A:D3:EA:ED:4E</td>
                        <td className="deposit">ONLINE</td>
                        <td>140 kWh</td>
                        <td>20/02/2022 - 11h 00m</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}