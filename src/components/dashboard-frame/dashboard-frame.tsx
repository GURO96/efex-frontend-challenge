import Box from '@mui/material/Box';

import DashboardPageFrame from "../dashboard-page-frame/dashboard-page-frame.tsx";
import DashBoardHeader from "../dashboard-header/dashboard-header.tsx";
import SideMenu from '../side-menu/side-menu.tsx';
// import './main-frame.css'


export default function MainFrame() {
    return <>
    
    <div className='flex flex-row'>
    <SideMenu/>
    <Box sx={{width: 'calc(100vw - 251px)', height: '100%', maxHeight: '100vh', overflow: 'hidden'}}>
        {/* <SideMenu/> */}
    <DashBoardHeader/>
    
    <DashboardPageFrame/>
    </Box>
    </div>
    </>
}

