import React from 'react';

import { Link, Typography } from '@mui/material';

const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                {'Copyright (C) '}
                <Link color='inherit' href='https://imaginaformacion.com'>
                    Imagina Formacion
                </Link>
                {' '+new Date().getFullYear()}
            </Typography>
        </div>
    );
}

export default Copyright;
