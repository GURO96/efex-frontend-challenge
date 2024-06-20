// import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactsIcon from '@mui/icons-material/Contacts';
import LockIcon from '@mui/icons-material/Lock';
import CardTip from '../card-tip/card-tip.tsx';

// import CardTip from "../card-tip/card-tip";

// import './side-menu.css'

export default function SideMenu() {
    const menuOptions = {
        ['Dashboard']: <DashboardIcon />,
        ['Ingresos']: <ReceiptIcon />,
        ['Egresos']: <ReceiptIcon />,
        ['Contactos']: <ContactsIcon />,
        ['Seguridad']: <LockIcon />,
    }

    return (
        <div>
            <Box
                sx={{ width: 250, borderRight: '1px solid #C7C7C7', height: '100vh', backgroundColor: '#FBFCFF', display: 'flex', flexDirection: 'column'}}
                role="presentation"
            >
                <div className={'menu-icon'}>
                    <img src={'Logo-Efex-1.png'} alt={'Efex Logo'}/>
                </div>
                <Divider/>
                <Box sx={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <List>
                        {Object.keys(menuOptions).map((menuItem, idx) => (
                            <ListItem key={menuItem}>
                                <ListItemButton className={'menu-item'} selected={idx === 0}>
                                    <ListItemIcon>
                                        {menuOptions[menuItem as keyof typeof menuOptions]}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <CardTip/>
                </Box>
            </Box>
        </div>
    );
}