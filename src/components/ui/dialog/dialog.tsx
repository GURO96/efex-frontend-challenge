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
import { countries } from '../country-select/country-select';

export default function CustomDialog({props}: any) {
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
  
  

  // const handleOnChange = (eventValue :number) => {
  //   console.log(eventValue)
  //   setinputValue(eventValue);
  // };

  // const handleOnChangeTwo = (eventValue :number) => {
  //   console.log(eventValue)
  //   setinputValueTwo(eventValue);
  // };




  

  const [country, setCountry] = React.useState<any>(countries[2]);
  const [countryTwo, setCountryTwo] = React.useState<any>(countries[1]);

  // const [inputValue, setinputValue] = React.useState<number>(0);
  // const [inputValueTwo, setinputValueTwo] = React.useState<number>(0);

  


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.buttonName ?? ''}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      ><DialogActions >
      <Button sx={{fontSize: '1.5rem'}} onClick={handleClose}>X</Button>
    </DialogActions>
        <div className='pt-10 pl-24 pb-10 pr-24'>

        

        <DialogTitle align='center' sx={{ color: 'black', fontWeight: 'bold' }}>Convertir</DialogTitle>
        
        <DialogContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <DialogContentText align='center' >
            Convierte la cantidad que quieras a una moneda diferente
          </DialogContentText>
 
          <CustomizedSelects country={country} 
            setCountry={setCountry} 
            countryTwo={countryTwo} 
            setCountryTwo={setCountryTwo} 
            />

          

 

        </DialogContent>
        
        </div>
      </Dialog>
    </React.Fragment>
  );
}