'use client';

import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';

const Log = () => {
  return (
    <div>
      <Box component="form" noValidate sx={{ mt: 1 }} id="registration-form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
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
