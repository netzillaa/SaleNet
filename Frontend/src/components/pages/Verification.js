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
import Header2 from '../Header2';

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


const addUser = async () => {
    let fullName = localStorage.getItem("fullName")
    let userName = localStorage.getItem("userName")
    let password = localStorage.getItem("password")
    let email = localStorage.getItem("email")
    let phoneNumber = localStorage.getItem("phoneNumber")
    let shopName = localStorage.getItem("shopName")
    let shopAddress = localStorage.getItem("shopAddress")
    let businessLicense = localStorage.getItem("businessLicense")

    const response = await fetch("https://stingray-app-4l8lu.ondigitalocean.app/auth/register", {
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
    let email = localStorage.getItem("email")

    const handleSubmit = () => {
        if (authCode == userCode) {
            addUser();
            history.push({
                pathname: `/signin`
              })
        } else {
            alert("Wrong Code")
            return false;
        }
    }

    const getAuthCode = async () => {
        let email = localStorage.getItem("email")
        await axios.post("https://stingray-app-4l8lu.ondigitalocean.app/auth/emailVerify", {email}).then(res => {
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
        <>
        <Header2/>
        <div style={{ paddingTop: '50px' }}>
            <Paper elevation={8} className={classes.paperStyle}>
                <Grid align='center'>
                    <Box style={{minHeight:'20px'}}/>
                    <Avatar className={classes.avatarStyle}>
                        <EmailIcon style={{ fontSize: '320%' }} />
                    </Avatar>
                    <h2>Verify Your Email Address</h2><br/><br/>
                    <h4>
                        We've sent you an email to <b>{email}</b> to verify your
                        email address and activate your account.
                    </h4> <br />
                </Grid>

                <ValidatorForm
                    onSubmit={handleSubmit}>
                    <TextValidator
                        label="Enter Verification Code"
                        InputLabelProps={{ style: { fontSize: "150%" } }}
                        onChange={(e) => setUserCode(e.target.value)}
                        variant="outlined"
                        name="code"
                        size="medium"
                        type="text"
                        fullWidth
                    />

                    <button type='submit' className={classes.btnstyle}>VERIFY</button>
                </ValidatorForm>
            </Paper>
        </div>
        </>
    )
}
