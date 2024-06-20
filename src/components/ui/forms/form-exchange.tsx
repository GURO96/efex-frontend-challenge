import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CountrySelect from '../country-select/country-select';
import SwapVerticalCircleRoundedIcon from '@mui/icons-material/SwapVerticalCircleRounded';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrencyConversionEvents } from '../../../utils/requestCurrencyData';


function GridExample({countryTwo, data}: any) {
  // console.log(data)
  // console.log(data?.data.base)

  
  return (
    <Grid container spacing={2} sx={{marginTop: '1rem'}} >
      {/* {Array.from(Array(9).keys()).map((value) => (
        <Grid item xs={4} key={value}>
          <Item>Item {value + 1}</Item>
        </Grid>
      ))} */}

        <Grid item xs={6}  >
          <p>Tasa de cambio</p>
          
        </Grid>
        <Grid item xs={6}  >
        <p><b>{1 + ' ' + data?.data.base + ' = ' + (1 / data?.data?.rates[countryTwo.currency]) + ' ' + countryTwo.currency } </b></p>
          
        </Grid>

        <Grid item xs={6}  >
          <p>Las tarifas se actualizarán en</p>
          
        </Grid>

        <Grid item xs={6}  >
          <p><b>{'13 segundos'}</b></p>
          
        </Grid>

        <Grid item xs={6}  >
          <p>Total convertido</p>
          
        </Grid>

        <Grid item xs={6}  >
          <p><b>${data?.data.rates[countryTwo.currency]}</b></p>
          
        </Grid>
        
    </Grid>
  );
}

export default function CustomizedSelects({country,  setCountry, setCountryTwo, countryTwo}: any) {
  const searchElement: any = useRef();
  const searchElementTwo: any = useRef();
  const [inputValue, setinputValue] = React.useState<string>('');

  const { data } = useQuery({
    queryKey: ["exchangeCurrency", {search: inputValue}],
    queryFn: ({signal}) => fetchCurrencyConversionEvents({ signal, inputValue, country, countryTwo}),
})

  const handleChange = (eventValue :string) => {
    // console.log(eventValue)
    setCountry(eventValue);
    // handleChangeChild(eventValue);
  };

  const handleChangeCountryTwo = (eventValue :string) => {
    // console.log(eventValue)
    setCountryTwo(eventValue);
    // handleChangeCountryTwoChild(eventValue);
  };
  const handleConversion = () => {
    // console.log(searchElement.current.value)
    setinputValue(searchElement.current.value);
    // setinputValueTwo(inputValueTwo);
    // console.log(inputValue, inputValueTwo)
  };

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexBasis: '100%'}}>
      
      <FormControl sx={{ m: 1 }} variant="standard">
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '100%'}}>
        <TextField
        focused={true}
        inputRef={searchElement}
        defaultValue={1}
          required
          id="outlined-required"
          label={'De ' + country.currency}
        //   defaultValue="Hello World"
          size='medium'
          type='number'
          InputProps={{
            inputProps: { min: 0 }
          }}
        />
        <CountrySelect onSelect={handleChange} currencyValue={country}></CountrySelect>

        </Box>
      </FormControl>

      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', flexBasis: '100%', marginTop: '1rem', marginBottom: '1rem' }}>
      <Button sx={{marginRight: '1rem'}} onClick={() => {
        setCountry(countryTwo);
        setCountryTwo(country);

        const inputOne = searchElement.current.value;
        const inputTwo = searchElementTwo.current.value;
        searchElement.current.value = inputTwo;
        searchElementTwo.current.value = inputOne;
      }} ><SwapVerticalCircleRoundedIcon sx={{fontSize: 60}}/></Button>
      
        <p className='text-blue-500'>Invertir orden</p>

      </Box>
     
      <FormControl sx={{ m: 1 }} variant="standard">
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '100%'}}>
        <TextField
        inputRef={searchElementTwo}
        value={data?.data?.rates[countryTwo.currency] || 0}
        focused={true}
          required
          id="outlined-required"
          label={'A ' + countryTwo.currency}
        //   defaultValue="Hello World"
          size='medium'
          InputProps={{
            inputProps: { min: 0 }
          }}
        />
        <CountrySelect onSelect={handleChangeCountryTwo} currencyValue={countryTwo} ></CountrySelect>
        </Box>
      </FormControl>

      {data && <GridExample country={country} countryTwo={countryTwo} data={data} inputValue={inputValue}/>}

          <Button sx={{
            
            mt: 4,
            borderRadius: '0px',
            textTransform: 'capitalize'
        }} variant="contained" color={"primary"} onClick={() => handleConversion()}>Realizar Conversión</Button>

      
    </Box> 
  );
}
