import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Content } from "./styles";
import { Grid } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useDevices } from "../../hooks/useDevices";

// criar interface que irá receber os dados do APP.tsx
interface NewDeviceModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewDeviceModal({
  isOpen,
  onRequestClose,
}: NewDeviceModalProps) {
  useEffect(() => {
    setMac("");
    setEmail("");
    setRua("");
    setBairro("");
    setCidade("");
    setEstado("");
    setLatitude(0);
    setLongitude(0);
  }, [onRequestClose]);

  const [mac, setMac] = useState("");
  const [email, setEmail] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const id = Math.floor(Math.random() * 2000);
  const status = "online";

  const { createDevice } = useDevices();

  // criar novo dispositivo ao clicar em submit
  async function handleCreateNewDevice(event: FormEvent) {
    event.preventDefault();
    await createDevice({
      mac,
      email,
      rua,
      bairro,
      cidade,
      estado,
      latitude,
      longitude,
      status,
    });
    alert("Cadastrado com sucesso");
    onRequestClose();
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={onRequestClose}>
        <DialogTitle>
          <strong>Adicionar dispositivo: </strong>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <DialogContentText>
                Preencha os dados abaixo para adicionar o seu novo dispositivo.
              </DialogContentText>
            </Grid>
            <Content>
              <div>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="mac"
                    id="mac"
                    label="MAC"
                    type="email"
                    fullWidth
                    variant="standard"
                    placeholder="ID MAC do dispositivo: "
                    value={mac}
                    onChange={(event) => setMac(event.target.value)}
                  />
                </Grid>
              </div>
              <div>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="email"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    placeholder="Email do Usuário: "
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
              </div>
            </Content>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                name="rua"
                id="rua"
                label="Rua"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Rua que o Dispositivo tá instalado: "
                value={rua}
                onChange={(event) => setRua(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                name="bairro"
                id="bairro"
                label="Bairro"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Bairro da casa que o Dispositivo tá instalado: "
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
              />
            </Grid>
            <Content>
              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  name="cidade"
                  id="cidade"
                  label="Cidade"
                  type="text"
                  fullWidth
                  variant="standard"
                  placeholder="Cidade da casa que o Dispositivo tá instalado: "
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  name="estado"
                  id="estado"
                  label="Estado"
                  type="text"
                  fullWidth
                  variant="standard"
                  placeholder="Estado da casa que o Dispositivo tá instalado: "
                  value={estado}
                  onChange={(event) => setEstado(event.target.value)}
                />
              </div>
            </Content>
            <Content>
              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  name="latitude"
                  id="latitude"
                  label="Latitude"
                  type="number"
                  fullWidth
                  variant="standard"
                  placeholder="Latitude da casa que o Dispositivo tá instalado: "
                  value={latitude}
                  onChange={(event) => setLatitude(Number(event.target.value))}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  name="longitude"
                  id="longitude"
                  label="Longitude"
                  type="number"
                  fullWidth
                  variant="standard"
                  placeholder="Longitude da casa que o Dispositivo tá instalado: "
                  value={longitude}
                  onChange={(event) => setLongitude(Number(event.target.value))}
                />
              </div>
            </Content>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose}>Cancelar</Button>
          <Button onClick={handleCreateNewDevice}>Enviar</Button>{" "}
          {/* Adicionar função depois de cadastrar */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
