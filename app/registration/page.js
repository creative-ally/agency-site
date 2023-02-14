"use client"
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
const Regi = () => {
  return (
    <div>
      <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' >
        <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
        <Box textAlign='center'>
          <Button type='submit' variant='outlined' sx={{ mt: 3, mb: 2, px: 5 }}>Submit</Button>
        </Box>
        <Link href='/sendpasswordresetemail' >Forgot Password ?</Link>

      </Box>
    </div>

  );
};

export default Regi;