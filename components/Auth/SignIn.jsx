'use client';

import React, { useState } from 'react';
import { Grid, Card, Tabs, Typography, Tab, Box, Button } from '@mui/material';
import Regi from './SignUp';
import Log from './Log';

import Pic from '../../assets/images/pic1.jpg';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: '90vh' }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            // backgroundImage: `URL(${Pic})`,
            // backgroundImage: `url(${Pic})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', sm: 'block' },
          }}
          style={{ backgroundImage: `url(${Pic.src})` }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: 'none', fontWeight: 'bold' }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: 'none', fontWeight: 'bold' }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Log />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Regi />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
