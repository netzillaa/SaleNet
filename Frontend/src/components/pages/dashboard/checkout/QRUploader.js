import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import Header3 from '../../../Header3';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import EditImageModal from '../../../EditImageModal';
import { useLocation } from "react-router-dom";
import { Input } from "@mui/material";

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
}));

export default function QRUploader() {
    const classes = useStyles();

    const userInfo = localStorage.getItem("userInfo");

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload).id;
    }

    const userID = parseJwt(userInfo);

    const [productImage, setProductImage] = useState("");
    

    const addQRCode = async (event) => {
        event.preventDefault();
        var formData = new FormData(); 
        formData.append('productImage', productImage);

        const { data } = await axios.post("https://stingray-app-w2y85.ondigitalocean.app/users/addQR/" + userID, formData).catch(err => {
            console.log(err);
        }
        );
    };

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <>
            <Header3 />
            <div style={{ paddingTop: '40px' }}>
                <Card className={classes.cardStyle}>
                    <Box className={classes.pageTitle}>
                        <b style={{color:'white', fontSize:'20px'}}>Add QR Code</b>
                    </Box>
                    <Box height='2vw' minHeight='16px' />
                    <EditImageModal image={productImage} />
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 3 }}
                        padding="1vw 8vw 3vw 8vw"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{ marginBottom: "2em" }}>
                                    <Input
                                        fullWidth
                                        onChange={(e) => setProductImage(e.target.files[0], "productImage")}
                                        required
                                        type="file"
                                    />
                                </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Button
                                    onClick={addQRCode}
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                                        '&:hover': {
                                            backgroundColor: "#000193", color: "white"
                                        }
                                    }}
                                >
                                    Add Payment QR Code
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
                                    component={Link} to='/manageProduct'
                                >
                                    Cancel
                                </Button>

                            </Grid>
                        </Grid>
                    </Box>

                </Card>
            </div>
        </>
    )
}
