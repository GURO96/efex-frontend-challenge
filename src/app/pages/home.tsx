import AppHeader from '../../components/app-header/app-header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useNavigate } from "react-router-dom";



const Home = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `dashboard`; 
    navigate(path);
  }
    return <>
    <AppHeader />
    <div className='flex flex-col justify-center pl-10 pr-10 2xl:pl-36 2xl:pr-36' style={{height:'calc(100vh - 72px)' , background:'#01123b'}}>
    <Stack direction="column" alignItems={'start'} alignContent={'center'} spacing={4} style={{background:'#01123b'}}>
    <h2 className='text-5xl md:text-6xl lg:text-7xl' > <p className='h-40' style={{background: 'linear-gradient(to right, #5fa6ff, #f9fbff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>La solución bancaria <br /> <b>para crecer tu negocio</b></p></h2>
    <h3 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-white'  >Ofrecemos la mejor tecnología e infraestructura para procesar <br /> pagos individuales, masivos y por API.</h3>
    <Stack direction="row" 
          alignItems="center"
          spacing={2}>
      <Button variant="outlined" 
        sx={ {color: '#ffffff',  borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #5fa6ff, #f9fbff);',borderRadius: 28,'&:hover': {borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #f9fbff,#5fa6ff);',borderRadius: 28 }, transition: 'border-image-source 0.3s ease, transform 0.3s ease;'} }
        style={{borderRadius: 28}}
        onClick={routeChange}
      >
              Agendar Demo
            </Button> 

      <Button variant="outlined" sx={ { color: '#ffffff', backgroundColor: '#f99c46',borderRadius: 28.  }} onClick={routeChange}>
        <p>Crear cuenta gratis</p>
      </Button>
    </Stack>
    </Stack>
    </div>
    </>
  } 


  export default Home;