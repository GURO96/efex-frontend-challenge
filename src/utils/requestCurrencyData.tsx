import axios from "axios";

export default async function fetchCurrencyEvents(customParams?:any) {

    const {signal} = customParams;

    //console.log(customParams);
    
    let endpoint = 'https://api.fxratesapi.com/latest'

    // if (customParams) {
    //     endpoint = `${endpoint}?${customParams}`;
    // }
    if(customParams.balanceGeneral) {
        endpoint = `${endpoint}?currencies=MXN,COP,USD&base=USD&amount=${customParams.countBG}`
    }

    if(customParams.exchangeCurrency) {
        endpoint = `${endpoint}?currencies=${customParams.country2}&base=${customParams.country}&amount=${customParams.inputValue}`
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint, {signal});

            return response;
        } catch (err: any) {

            return err;
        }
    };

    const data = await fetchData();

    return data;
}

export async function fetchCurrencyConversionEvents({signal, inputValue, country, countryTwo}:any) {

    

    //console.log(country);
    //console.log(countryTwo);
    
    let endpoint = 'https://api.fxratesapi.com/latest'

    // if (customParams) {
    //     endpoint = `${endpoint}?${customParams}`;
    // }
    // if(customParams.balanceGeneral) {
    //     endpoint = `${endpoint}?currencies=MXN,COP,USD&base=USD&amount=${customParams.countBG}`
    // }

     endpoint = `${endpoint}?currencies=${countryTwo.currency}&base=${country.currency}&amount=${inputValue}`


    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint, {signal: signal});

            return response;
        } catch (err: any) {

            return err;
        }
    };

    const data = await fetchData();

    return data;
}


export async function fetchCurrencyOneConversionEvents({signal, inputValue, country, countryTwo}:any) {

    

    //console.log(country);
    //console.log(countryTwo);
    
    let endpoint = 'https://api.fxratesapi.com/latest'

    // if (customParams) {
    //     endpoint = `${endpoint}?${customParams}`;
    // }
    // if(customParams.balanceGeneral) {
    //     endpoint = `${endpoint}?currencies=MXN,COP,USD&base=USD&amount=${customParams.countBG}`
    // }

     endpoint = `${endpoint}?currencies=${countryTwo.currency}&base=${country.currency}&amount=${inputValue}`


    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint, {signal: signal});

            return response;
        } catch (err: any) {

            return err;
        }
    };

    const data = await fetchData();

    return data;
}