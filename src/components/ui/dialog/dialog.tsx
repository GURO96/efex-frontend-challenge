import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomizedSelects from '../forms/form-exchange';
import { countries } from '../country-select/country-select';

export default function CustomDialog({props}: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

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