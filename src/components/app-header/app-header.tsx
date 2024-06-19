import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';


import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppHeader() {

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

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

          <Button variant="outlined" endIcon={<PersonIcon />}  sx={ {  color: '#ffffff', borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #5fa6ff, #f9fcfe);',borderRadius: 28,'&:hover': {borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #f9fcfe,#5fa6ff);',borderRadius: 28 }, transition: 'border-image-source 0.3s ease, transform 0.3s ease;'} } >
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