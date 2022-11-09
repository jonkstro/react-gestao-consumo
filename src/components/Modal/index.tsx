import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Container, Content } from './styles';
import { Grid } from '@mui/material';

export default function Modal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container onClick={handleClickOpen}>
        Novo dispositivo
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><h3>Adicionar dispositivo: </h3></DialogTitle>
        <DialogContent>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <DialogContentText>
                        Preencha os dados abaixo para adicionar o seu novo dispositivo.
                    </DialogContentText>
                </Grid>
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
                            name="municipio"
                            id="municipio"
                            label="Municipio"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder='Municipio da casa que o Dispositivo tá instalado: '
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
