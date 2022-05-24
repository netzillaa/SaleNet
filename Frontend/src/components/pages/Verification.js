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


    const addUser = async () => {
 let fullName = localStorage.getItem("fullName")
 let userName = localStorage.getItem("userName")
 let password = localStorage.getItem("password")
 let email = localStorage.getItem("email")
 let phoneNumber = localStorage.getItem("phoneNumber")
 let shopName = localStorage.getItem("shopName")
 let shopAddress = localStorage.getItem("shopAddress")
 let businessLicense = localStorage.getItem("businessLicense")

const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userName,
        password,
        email,
        phoneNumber,
        shopName,
        shopAddress,
        businessLicense,
      }),
    });
    const sentData = await response.json();
    }

export default function Verification({ history }) {

    const classes = useStyles();

    const [authCode, setAuthCode] = useState();
    const [userCode, setUserCode] = useState();

    const handleSubmit = () => {
        if (authCode == userCode) {
           addUser();
        } else {
            alert("Wrong Code")
              return false;
        }
    }


    const [counter, setCounter] = useState(15);

    const getAuthCode = async () => {
        await axios.post("http://localhost:4000/auth/register").then(res => {
            setAuthCode(res.data.verifyCode)
            console.log(res.data.verifyCode);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAuthCode();
    }, []);

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <div style={{ paddingTop: '100px' }}>
            <Paper elevation={8} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <EmailIcon style={{ fontSize: '25px' }} />
                    </Avatar>
                    <br />
                    <h1>Verify Your Email Address</h1> <br />
                    <h3>
                        We've sent you an email to <b>example@example.com</b> to verify your
                        email address and activate your account.
                    </h3> <br />
                </Grid>

                <ValidatorForm
                    onSubmit={handleSubmit}>
                    <TextValidator
                        label="Enter Verification Code"
                        onChange={(e) => setUserCode(e.target.value)}
                        variant="outlined"
                        inputProps={{ maxLength: 5 }}
                        name="code"
                        size="medium"
                        type="text"
                        fullWidth
                    />

                    <button type='submit' className={classes.btnstyle}>VERIFY</button>
                </ValidatorForm>
                <Box mt={3} >
                    <h4 style={{ textAlign: 'center' }}>
                        Resend code in
                        <span style={{ fontWeight: "bold" }}> 00:{counter}</span>
                    </h4>
                </Box>

                <h4 style={{ textAlign: 'center' }}>
                    <Link to="verify"> Resend Code </Link>
                </h4>

            </Paper>
        </div>
    )
}
