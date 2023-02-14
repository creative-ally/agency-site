import { Button } from '@mui/material';
import React from 'react';

const Globalbtn = ({children}) => {
    return (
        <div>
            <button className="text-xs md:text-sm lg:text-base-100 rounded px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 uppercase font-medium lg:font-semibold shadow-2xl shadow-slate-900 bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary hover:bg-gradient-to-l transition-all ease-in-out duration-500 " >{children}</button>
        </div>
    );
};

export default Globalbtn;