'use client';

import React from 'react';
import { Grid, TextField, Button, Box, Alert } from '@mui/material';

const ResetPass = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          id="password-reset-form"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="New Password"
            type="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm New Password"
            type="password"
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResetPass;
