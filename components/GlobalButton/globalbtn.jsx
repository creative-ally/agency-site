import { Button } from '@mui/material';
import React from 'react';

const Globalbtn = ({children}) => {
    return (
        <div>
            <Button sx={{}} variant='contained'>{children}</Button>
        </div>
    );
};

export default Globalbtn;