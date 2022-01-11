import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const FormPropsTextFields=()=>
 {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Set a name for new Solar Design</h2>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name of new Design"
        />
      </div>

    </Box>
  );
}
export default  FormPropsTextFields;