import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Content } from './styles';
import { Grid } from '@mui/material';


// criar interface que irá receber os dados do APP.tsx
interface NewDeviceModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export default function NewDeviceModal({ isOpen, onRequestClose }: NewDeviceModalProps) {


  return (
    <div>
      <Dialog open={isOpen} onClose={onRequestClose}>
        <DialogTitle><h3>Adicionar dispositivo: </h3></DialogTitle>
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
                                placeholder='ID MAC do dispositivo: '
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
                                placeholder='Email do Usuário: '
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
                        placeholder='Rua que o Dispositivo tá instalado: '
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
                        placeholder='Bairro da casa que o Dispositivo tá instalado: '
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
                            placeholder='Cidade da casa que o Dispositivo tá instalado: '
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
                            placeholder='Estado da casa que o Dispositivo tá instalado: '
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
                            placeholder='Latitude da casa que o Dispositivo tá instalado: '
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
                            placeholder='Longitude da casa que o Dispositivo tá instalado: '
                            />
                    </div>
                </Content>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose}>Cancelar</Button>
          <Button onClick={onRequestClose}>Enviar</Button> {/* Adicionar função depois de cadastrar */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
