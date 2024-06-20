// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default function CardTip() {
    return <Box className={'card-tip'} sx={{alignSelf: 'center', marginBottom: '1rem'}}>
        <div className={'card-tip-image'}>
            <img src={'add.png'} alt={'add-image'}/>
        </div>
        <div className={'card-tip-title'}>¡Refiere a una empresa!</div>
        <div className={'card-tip-description'}>¡Gana $100 USD por referido!</div>
        <div><Button sx={{
            borderRadius: '0px'
        }} variant="contained" color={"primary"}>Ver Código</Button></div>
    </Box>;
}