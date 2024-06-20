import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FlagIcon from '@mui/icons-material/Flag';
import PaidIcon from '@mui/icons-material/Paid';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import CustomDialog from '../../components/ui/dialog/dialog';
import { useQuery } from "@tanstack/react-query";
import  fetchCurrencyEvents  from "../../utils/requestCurrencyData.tsx";

export default function DashboardPage() {

    const [countMXN, setCountMXN] = useState<number>(0);
    const [countUSD, setCountUSD] = useState<number>(0);
    const [countCOP, setCountCOP] = useState<number>(0);
    const [countBG, setCountBG] = useState<number>(100);

    // const [country, setCountry] = React.useState<any>(countries[2]);
    // const [countryTwo, setCountryTwo] = React.useState<any>(countries[1]);

    const balances = [
        {
            currency: 'USD',
            amount: countUSD
        }, {
            currency: 'MXN',
            amount: countMXN
        }, {
            currency: 'COP',
            amount: countCOP
        }
    ]

    

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["currencyEvents"],
        queryFn: () => fetchCurrencyEvents({countBG, balanceGeneral:true}),
    })

    

    // const { data, loading, error }: any = useContext(DataContext);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const {data: dataRes} = data;
    let countContent;
    if(dataRes){
        
        // console.log(dataRes)

        // for (const [key, value] of Object.entries(dataRes.rates)) {
        //     console.log(`${key}: ${value}`);


            
        //   }

        //   countContent = 


        //  dataRes.rates.entires((rates) => {
            
        // })
        // setCountMXN(dataRes.rates.MXN)
        // setCountUSD(dataRes.rates.USD)
        // setCountCOP(dataRes.rates.COP)
    }

    // console.log(data)
    // useEffect(() => {

    //     const [data, setData] = useState([]);
    //     const [loading, setLoading] = useState(true);
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //             setData(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    
    

    const handleBalanceGeneral = () => {

        // setCountBG(101)
    }

    const handlerDialog = () => {
        
    }


    return <Box>
        <Box
        sx={{
            border: '1px solid #C7C7C7',
            boxSizing: 'border-box',
            padding: '1rem',
            backgroundColor: 'white'
        }}>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box>
                    <Box sx={{
                        fontSize: '16px',
                        marginBottom: '0.5rem'
                    }}>Balance General </Box>
                    <Box sx={{
                        fontSize: '32px',
                        color: '#006BF8',
                        display: 'flex',
                        flexWrap: 'wrap',
                        fontWeight: 'bold'
                    }}>{countBG}
                        <Box sx={{
                            color: '#9E9E9E',
                            fontWeight: 'normal'
                        }}> <p>&nbsp;USD</p>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button variant={'outlined'} sx={{
                        width: '100%',
                        borderRadius: '0px',
                        marginBottom: '0.5rem'
                    }}>Enviar pago</Button>
                    <Box>
                        <Button variant={'outlined'} sx={{
                            margin: '0 0.5rem'
                        }}>Añadir fondos</Button>
                        <CustomDialog props={{buttonName: 'Convertir'}} 
                            // country={country} 
                            // setCountry={setCountry} 
                            // countryTwo={countryTwo} 
                            // setCountryTwo={setCountryTwo}
                            
                            >
                        </CustomDialog>
                        <Button disabled variant={'outlined'} sx={{
                            margin: '0.5rem 0'
                        }}>Retiro</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem'
            }}>
                {
                    Object.keys(dataRes.rates).map((key, index) => 
                        {
                            // console.log(key)
                        //   console.log(dataRes.rates[index]);
                          return  <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '25%',
                            boxSizing: 'border-box',
                            padding: '2rem',
                            border: '1px solid #C7C7C7'
                        }}>
                            <Box sx={{
                                width: '100%'
                            }}>
                                <Box sx={{
                                    fontSize: '16px',
                                    marginBottom: '0.5rem'
                                }}>Balance {key}</Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{
                                        fontSize: '24px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        fontWeight: 'bold'
                                    }}>${dataRes.rates[key].toFixed(2)}
                                        <Box sx={{
                                            color: '#9E9E9E',
                                            fontWeight: 'normal'
                                        }}> <p>&nbsp;{key}</p>
                                        </Box>
                                    </Box>
                                    <FlagIcon/>
                                </Box>
                            </Box>
                        </Box>
                        
                        }
                      )
                }
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem'
        }}>
            <Box sx={{
                boxSizing: 'border-box',
                padding: '1.5rem',
                border: '1px solid #C7C7C7',
                width: '45%',
                display: 'flex',
                backgroundColor: 'white'
            }}>
                <Box sx={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: 'gray',
                    borderRadius: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><PaidIcon/></Box>
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '2rem'
                }}>
                    <Box sx={{
                        fontSize: '21px',
                        color: '#00143A'
                    }}>Crédito para adelanto</Box>
                    <Box
                    sx={{
                        color: '#9E9E9E'
                    }}>(Pago a proveedores)</Box>
                    <Box sx={{
                        color: 'white',
                        backgroundColor: '#006BF8',
                        fontSize: '10px',
                        display: 'flex',
                        width: 'auto',
                        padding: '5px 7px',
                        boxSizing: 'border-box',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: '0',
                        right: '-3rem'
                    }}>NEW</Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                padding: '1.5rem',
                border: '1px solid #FFA412',
                width: '45%',
                backgroundColor: 'white'
            }}>
                <Box>
                    <LocalAtmIcon style={{color: '#FFA412'}}/>
                </Box>
                <Box sx={{
                    fontSize: '21px',
                    color: '#00143A',
                    marginLeft: '2rem'
                }}>
                    Enviar pago
                </Box>
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem'
        }}>
            <Box sx={{
                width: '45%',
                backgroundColor: 'white'
            }}>
                <Box>
                    <Box>
                        Ingresos en:
                        <Box>(Enero)</Box>
                    </Box>
                    <Box>
                        <Button>Ver detalles</Button>
                    </Box>
                </Box>
                <Box>
                    <Box>$4,250,000 MXN</Box>
                </Box>
                <Box>
                    <BarChart
                        series={[
                            { data: [35, 44, 24, 34] }
                        ]}
                        height={290}
                        xAxis={[{ data: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], scaleType: 'band' }]}
                        yAxis={[{
                            label: "MDP (MXN)",
                            colorMap: {
                                type: 'continuous',
                                min: -10,
                                max: 10,
                                color: ['red', 'red'],
                            }
                        }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
}