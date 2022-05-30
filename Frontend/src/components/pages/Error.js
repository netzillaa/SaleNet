import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Avatar, TextField, Link as Nv } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Alert } from '@mui/material';
import Alerto from "./Alerto";
import Stack from '@mui/material/Stack';
import AlertoError from "./AlertoError";

const useStyles = makeStyles(() => ({

    paperStyle: {
        padding: '3vw 8vw',
        height: '60%',
        width: '45%',
        minWidth: '300px',
        minHeight: '300px',
        margin: 'auto',
    },

    avatarStyle: {
        backgroundColor: '#b8d0d5',
        color: 'black',
        width: '5vw',
        height: '5vw',
        minHeight: '50px',
        minWidth: '50px',
    },

    btnstyle: {
        marginTop: '28px ',
        backgroundColor: '#000193',
        color: 'white',
        width: '100%',
        border: 'none',
        padding: '1vw',
        borderRadius: '5px'
    },
}));


export default function Error({ }) {

    const classes = useStyles;
    document.body.style.backgroundColor = '#ECECEC';

    return (
        <div style={{ paddingTop: '100px' }}>
            <Paper elevation={8} className={classes.paperStyle}>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} fxLayout="column wrap" fxLayoutGap="60px" fxLayoutAlign="center center">
                    <div fxFlex>
                        403 you are not loged in...
                    </div>
                    <div fxFlex>
                        ... access denied.
                    </div>
                </section>

            </Paper>
        </div>
    )
}
