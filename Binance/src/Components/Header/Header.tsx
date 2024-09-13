import React from 'react'
import Grid from '@mui/material/Grid2';
import './Header.css'


export default function Header() {
    return (
        <>
            <Grid container className='Header' style={{ backgroundColor: 'blue' }}>

                <Grid size={{ xl: 6, md: 6 }} className='Header-left'>left</Grid>
                <Grid className='Header-right'>right</Grid>

            </Grid>

        </>
    )
}

