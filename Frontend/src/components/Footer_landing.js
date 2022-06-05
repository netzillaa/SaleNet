import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Avatar, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles(() => ({

    footerStyle: {
        backgroundColor: '#00004f',
        width: '100%',
        color: 'white',
        padding: '2vw 3vw'
    }

}));

export default function customerSupport() {

    const classes = useStyles();

    return (
        <div className={classes.footerStyle}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box><b style={{ fontSize: '20px' }}>SALENET POS System</b></Box>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Divider variant="middle" />
            </Box>

            <Grid container align='center'>
                <Grid item xs={12}>
                    <IconButton onClick={() => window.open('https://www.facebook.com/', '_blank')}>
                        <FacebookOutlinedIcon style={{ color: 'white', fontSize: '3rem' }} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://www.instagram.com/', '_blank')}>
                        <InstagramIcon style={{ color: 'white', fontSize: '3rem' }} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://twitter.com/', '_blank')}>
                        <TwitterIcon style={{ color: 'white', fontSize: '3rem' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <h4 style={{ color: 'white' }}>&copy; Copyright. All rights reserved.</h4>
                </Grid>
            </Grid>

        </div>
    )
}
