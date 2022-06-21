import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography, Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
// import Header3 from '../Header3';
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

export default function editUser() {

    const [user, setUser] = useState([]);
    const [shopName, setShopName] = useState("");
    const [shopAddress, setShopAddress] = useState("");
    const [userLicense, setUserLicense] = useState("");

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const classes = useStyles();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios.get('https://stingray-app-w2y85.ondigitalocean.app/users/editUser/' + id ).then(res => {
            setUser(res.data.result)
            setShopName(res.data.result.shop.shopName)
            setShopAddress(res.data.result.shop.shopAddress)
            setUserLicense(res.data.result.shop.businessLicense)
        }).catch(err => {
            console.log("Error in editUser: ", err);
        })
    }

    const update = async () => {
        await axios.post('https://stingray-app-w2y85.ondigitalocean.app/users/updateShopName/' + id, {shopName}).then(res => {
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
            {/* <Header3 /> */}
            <div style={{ paddingTop: '40px' }}>
                <Card className={classes.cardStyle}>
                    <Box className={classes.pageTitle}>
                    <b style={{color:'white', fontSize:'20px'}}>Edit User</b>
                    </Box>
                    <Box height='2vw' minHeight='16px' />
                    <Grid align='center'>
                        <Avatar className={classes.avatarStyle}>
                            <PersonIcon style={{ fontSize: '40px' }} />
                        </Avatar>
                        <br />
                        <h1>User Details</h1>
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
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {user.fullName}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Username:
                                </Typography>
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {user.userName}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Email Address:
                                </Typography>
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {user.email}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '25%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Shop Name:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={shopName}
                                    onChange={(e) => setShopName(e.target.value)}
                                    InputProps={{ style: { fontSize: "160%" } }}
                                    InputLabelProps={{ style: { fontSize: "160%" } }}
                                    required
                                    type="text"
                                    label="User Shop Name"
                                />
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Shop Address:
                                </Typography>
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {shopAddress}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '30%', fontSize: '160%', fontWeight: 'bolder'  }}>
                                    Business License:
                                </Typography>
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {userLicense}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center'}}>
                                <Typography style={{ alignItems: 'center', width: '30%', fontSize: '160%', fontWeight: 'bolder' }}>
                                    Account Created at:
                                </Typography>
                                <Typography style={{ alignItems: 'center', fontSize: '160%' }}>
                                    {user.createdAt}
                                </Typography>

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
                                    Update User
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
