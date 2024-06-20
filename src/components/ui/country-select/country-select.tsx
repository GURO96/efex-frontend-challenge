import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect({children, onSelect, currencyValue}: any) {
  const [countryDefaulValue, setCountryDefaulValue] = React.useState(countries[2]);
  // console.log(currencyValue)

   


  return (
    <Autocomplete
      onChange={(event, newValue: CountryType) => onSelect(newValue)}
      // onInputChange={(event, newValue: string) => onSelect(newValue)}
      id="country-select-demo"
      sx={{ width: 150 }}
      options={countries}
      disableClearable
      autoHighlight
      value={ currencyValue}
      defaultValue={countries[2]}
      getOptionLabel={(option) => option.currency}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
        //   label="Pais"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export interface CountryType {
  code: string;
  currency: string;
  label: string;
//   phone: string;
  suggested?: boolean;
  flag?: string;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
export const countries: readonly CountryType[] = [
  
  { code: 'CO', currency: 'COP', label: 'Colombia', flag: 'U+1F1E6' },
  { code: 'MX', currency: 'MXN', label: 'Mexico'},
  {
    code: 'US',
    currency: 'USD',
    label: 'United States',
    suggested: true,
  },
];
