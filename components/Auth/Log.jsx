'use client';

import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"

const Log = () => {
const router = useRouter();
const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data)
    const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/'
    })
    if(res.status === 200){
        router.push(res.url)
        reset()
    }
    console.log(res)
}
  return (
    <div>
      <Box onSubmit={handleSubmit(onSubmit)} component="form" noValidate sx={{ mt: 1 }} id="registration-form">
        <TextField
          margin="normal"
          required
          fullWidth
          {...register("email", { required: "Email Address is required" })}
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          {...register("password", { required: "Email Address is required" })}
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="outlined"
            textColor="primary"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Submit
          </Button>
        </Box>
        <Box textAlign="center">
          <p
            variant="outlined"
            textColor="primary"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            New to site? <Link href="/registration">SignUp</Link>
          </p>
        </Box>
        <Link href="/resetpass">Forgot Password ?</Link>
      </Box>
    </div>
  );
};

export default Log;
