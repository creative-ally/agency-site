'use client';

import React from 'react';
import { Grid, Box, TextField, Button, Alert } from '@mui/material';

const ChangePass = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Change Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-change-form"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm New Password"
              type="password"
              id="password_confirmation"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                {' '}
                Update{' '}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangePass;
