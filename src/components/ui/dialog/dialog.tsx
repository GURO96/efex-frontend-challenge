import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CustomizedSelects from '../forms/form-exchange';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function CustomDialog({props}) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  function GridExample() {
    return (
      <Grid container spacing={2} sx={{marginTop: '1rem'}} >
        {/* {Array.from(Array(9).keys()).map((value) => (
          <Grid item xs={4} key={value}>
            <Item>Item {value + 1}</Item>
          </Grid>
        ))} */}

          <Grid item xs={6}  >
            <p>Tasa de cambio</p>
            
          </Grid>
          <Grid item xs={6}  >
          <p><b>{'1 USD = 2000 MXN'} </b></p>
            
          </Grid>

          <Grid item xs={6}  >
            <p>Las tarifas se actualizarán en</p>
            
          </Grid>

          <Grid item xs={6}  >
            <p><b>{'13 segundos'}</b></p>
            
          </Grid>

          <Grid item xs={6}  >
            <p>Total convertido</p>
            
          </Grid>

          <Grid item xs={6}  >
            <p><b>${'1'}</b></p>
            
          </Grid>
          
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.buttonName ?? ''}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <div className='pt-10 pl-24 pb-10 pr-24'>

        <DialogTitle align='center' sx={{ color: 'black', fontWeight: 'bold' }}>Convertir</DialogTitle>
        <DialogContent>
          <DialogContentText align='center' >
            Convierte la cantidad que quieras a una moneda diferente
          </DialogContentText>
 
          <CustomizedSelects/>

          <GridExample />

 

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}