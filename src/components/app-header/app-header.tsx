import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {  ListItemButton, ListItemText } from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';

import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


function AppHeader() {

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `dashboard`; 
    navigate(path);
  }

  return (
    <AppBar position="fixed" style={{backgroundColor: '#01123b', display: 'contents'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='flex flex-row justify-between' >

            <Box className='flex basis-40'>
                <img src={'logo-effex-two.jpg'} alt={'Efex Logo'}/>
            </Box>

        
        <Stack direction="row" justifyContent="space-between"
          alignItems="center"
          spacing={2}>

          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Soluciones" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick}>

            <ListItemText primary="Sobre EFEX" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Button variant="outlined" 
          onClick={routeChange}
            endIcon={<PersonIcon />}  
            sx={ {  color: '#ffffff', borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #5fa6ff, #f9fcfe);',borderRadius: 28,'&:hover': {borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #f9fcfe,#5fa6ff);',borderRadius: 28 }, transition: 'border-image-source 0.3s ease, transform 0.3s ease;'} } >
              Ingresar
          </Button>
          <ListItemButton onClick={handleClick}>

          <ListItemText primary="MEX" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          
          
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;