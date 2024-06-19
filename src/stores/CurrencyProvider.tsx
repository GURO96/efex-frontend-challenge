import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const DataContext = createContext();

// Create the provider component
export const CurrencyProvider = ({ children }: any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [countMXN, setCountMXN] = useState<number>(2000);
    const [countUSD, setCountUSD] = useState<number>(100);
    const [countCOP, setCountCOP] = useState<number>(10000);
    const [countBG, setCountBG] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('https://continentl.com/api/currency-exchange-details/USD?key=sk-96I766724f320fca6281');
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
                calcFunction(response.data)
                setLoading(false);
            } catch (err: any) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();

        if(data) {
            console.log(data)
        }
        const calcFunction = (data: any[]) => {
            console.log(data);
            
        };
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, error, countMXN, countUSD, countCOP, countBG }}>
            {children}
        </DataContext.Provider>
    );
};
