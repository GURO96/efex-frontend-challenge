
import DashboardPage from '../../app/pages/dashboard';
import Box from '@mui/material/Box';



export default function DashboardPageFrame() {
    return <Box sx={{height: 'calc(100vh - 61px)', overflow: 'scroll', boxSizing: 'border-box', padding: '1rem', backgroundColor: '#FBFCFF'}}>
        <Box><h1 className='text-3xl mb-9 '>Dashboard</h1></Box>
        
        <DashboardPage/>
    </Box>
}