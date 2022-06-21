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
import Button from "@mui/material/Button";
import Alerto from "./../Alerto";
import Stack from '@mui/material/Stack';
import AlertoError from "./../AlertoError";
import Header2 from '../../Header2';
import { fontSize } from '@mui/system';

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
        width: '6.2vw',
        height: '6.2vw',
        minHeight: '60px',
        minWidth: '60px',
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

export default function AdminLogin({ history }) {

    const classes = useStyles();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function logIn(event) {
        event.preventDefault();
        try {
          const { data } = await axios.post("https://stingray-app-w2y85.ondigitalocean.app/admin/loginAdmin", { email, password })
          localStorage.setItem('userInfo', JSON.stringify(data));
          history.push({
            pathname: `/admin`
          })
        }
        catch (err) {
          console.log(err);
          window.location.reload(false);
        }
      }

    useEffect(() => {
    }, []);

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <>
            <div style={{ padding: "150px 0", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper elevation={8} className={classes.paperStyle}>
                    <Grid align='center'>
                        <Box style={{ minHeight: '20px' }} />
                        <h1>Admin Sign In</h1><br /><br />
                    </Grid>

                    <Box
                        component="form"
                        noValidate
                        onSubmit={logIn}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>

                </Paper>
            </div>
        </>
    )
}
