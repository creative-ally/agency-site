'use client';

import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Regi = () => {

  const router = useRouter()

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch('/api/auth/signup', {
         method: 'POST',
         headers: {
             'content-type' : 'application/json'
         },
         body: JSON.stringify(data),
         callbackUrl: '/'
     })
     console.log(res)
     if(res.status === 200){
         alert('Data added successfully')
         router.push(res.url)
         reset()
     }
 };

  return (
    <div>
      <Box onSubmit={handleSubmit(onSubmit)} component="form" noValidate sx={{ mt: 1 }} id="registration-form">
        <TextField
          margin="normal"
          required
          fullWidth
          {...register("name", { required: "Email Address is required" })}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          {...register("email", { required: "Email Address is required" })}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          {...register("password", { required: "Email Address is required" })}
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2, px: 5 }}>
            Submit
          </Button>
        </Box>
        <Link href="/sendpasswordresetemail">Forgot Password ?</Link>
      </Box>
    </div>
  );
};

export default Regi;
