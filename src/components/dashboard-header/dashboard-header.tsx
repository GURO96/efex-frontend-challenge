import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function DashBoardHeader() {
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '1rem',
            backgroundColor: 'white',
            color: '#9DA3AE',
            fontWeight: '400',
            fontSize: '0.7rem',
            borderBottom: '1px solid #C7C7C7'
    }}
    >
        <Box>3 de Marzo de 2024. 18:00:00 GMT-5</Box>
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '2rem'
                }}
            >
                <Box>
                    <AccountCircleIcon/>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0 0.5rem'
                    }}
                    >
                        <span>Santiago V.</span>
                        <span style={{fontSize: '0.6rem'}}>@SantiagoV.</span>
                    </Box>
                </Box>
                <Box>
                    <ExpandMoreIcon/>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <LanguageIcon/>
                <span>ES</span>
            </Box>
        </Box>
    </Box>
}