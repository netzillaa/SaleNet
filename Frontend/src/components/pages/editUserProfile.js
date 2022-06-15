import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography, Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import Header3 from '../Header3';
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({

    cardStyle: {
        height: '60%',
        width: '50%',
        minWidth: '380px',
        minHeight: '300px',
        margin: 'auto',
    },

    pageTitle: {
        width: '100%',
        height: '4vw',
        minHeight: '40px',
        backgroundColor: '#000193',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    avatarStyle: {
        backgroundColor: '#b8d0d5',
        color: 'black',
        width: '5vw',
        height: '5vw',
        minHeight: '50px',
        minWidth: '50px',
    },

}));

export default function editUserProfile() {

    const [user, setUser] = useState([]);
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const userInfo = localStorage.getItem("userInfo");
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const classes = useStyles();

    function getId(token) {
        try{

            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }catch(err){
            window.location.href = "http://localhost:3000/403";
        }

        return JSON.parse(jsonPayload);
    }

    useEffect(() => {
        getUser();
        // getId(userInfo)
    }, []);

    const getUser = async () => {
        await axios.get('http://localhost:4000/users/editUser/' + id).then(res => {
            setUser(res.data.result)
            setFullName(res.data.result.fullName)
            setUserName(res.data.result.userName)
            setEmail(res.data.result.email)
            setPassword(res.data.result.password)
            setPhoneNumber(res.data.result.phoneNumber)
        }).catch(err => {
            console.log("Error in editUser: ", err);
        })
    }

    const update = async () => {
        await axios.post('http://localhost:4000/users/update/' + id, {fullName, userName, email, password, phoneNumber}).then(res => {
        }).catch(err => {
            console.log(err);
        })
    }

    const updateUser = () => {
        update();
        reload();
    }

    const reload = () => {
        window.location.reload(false);
    };

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <>
            <Header3 />
            <div style={{ paddingTop: '40px' }}>
                <Card className={classes.cardStyle}>
                    <Box className={classes.pageTitle}>
                    <b style={{color:'white', fontSize:'20px'}}>Edit Profile</b>
                    </Box>
                    <Box height='2vw' minHeight='16px' />
                    <Grid align='center'>
                        <Avatar className={classes.avatarStyle}>
                            <PersonIcon style={{ fontSize: '40px' }} />
                        </Avatar>
                        <br />
                        <h1>My Profile</h1>
                    </Grid>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 3 }}
                        padding="1vw 8vw 3vw 8vw"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Full Name:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="Full Name"
                                />

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Username:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="Username"
                                />

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Email Address:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="Email"
                                />

                            </Grid>

                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Password:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="Password"
                                />

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '30%', fontSize: '160%', fontWeight: 'bolder'  }}>
                                    Phone Number:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="Phone Number"
                                />

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", marginTop:'3em', display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Button
                                    onClick={updateUser}
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                                        '&:hover': {
                                            backgroundColor: "#000193", color: "white"
                                        }
                                    }}
                                >
                                    Update Profile
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%',
                                        backgroundColor: '#bbbbbb',
                                        color: 'black',
                                        '&:hover': { backgroundColor: '#9b9b9b', color:'black' }
                                    }}
                                    component={Link} to='/manageUser'
                                >
                                    Close
                                </Button>

                            </Grid>
                        </Grid>
                    </Box>

                </Card>
            </div>
        </>
    )
}
