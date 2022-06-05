import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from '@material-ui/core';
import Header2 from '../Header2';
import Header3 from '../Header3';
import Chat from '../Chat';
import Footer from '../Footer_landing';

const useStyles = makeStyles(() => ({
    paperStyle: {
        padding: '4vw 8vw',
        height: '90%',
        width: '90%',
        minWidth: '300px',
        minHeight: '300px',
        margin: 'auto',
    },

    imageStyle: {
        height: '100%',
        width: '100%'
    },

    backgroundStyle: {
        backgroundImage: 'url("images/customer_support_background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        paddingTop:'50px', 
        paddingBottom:'70px'
    },
    
}));

export default function customerSupport() {

    const classes = useStyles();
    const userInfo = localStorage.getItem("userInfo");

    function parseJwt(token) {
        try{

            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }catch(err){
            return <Header2 />
        }

        return <Header3 />
    }

    const check = parseJwt(userInfo);

    return (
        <>

        {check}
        <div className={classes.backgroundStyle}>
            <Paper elevation={8} className={classes.paperStyle}>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <h1></h1>
                            <b style={{fontSize:'3vw'}}>Customer Support</b>
                            <h2> Welcome to our Customer Support site!</h2>
                            <h3>
                                <b>You may use the chatbot below!</b> <br/><br/>
                                For further inquiries,<br/>
                                Contact us at <b>03-2458788</b> <br/>
                                Or send an email to <br/>
                                <a style={{color:'#000193', fontWeight:'bold'}}
                                   href = "mailto: netzilla178@gmail.com">netzilla178@gmail.com</a>
                            </h3>
                        </Grid>
                        <Grid item xs={6}>
                            <img className={classes.imageStyle} src='images/Support-Illustration.png'/>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h1 style={{fontWeight:'bolder'}}>
                                Customer Support</h1>
                        </Grid>
                        <Grid item xs={10}>
                            <h2> Welcome to our Customer Support site!</h2>
                            <h3>
                                <b>You may use the chatbot below!</b> <br/><br/>
                                For further inquiries,<br/>
                                Contact us at <b>03-2458788</b> <br/>
                                Or send an email to <br/>
                                <a style={{color:'#000193', fontWeight:'bold'}}
                                   href = "mailto: netzilla178@gmail.com">netzilla178@gmail.com</a>
                            </h3>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={12} style={{marginTop:'2vh'}}>
                        <img className={classes.imageStyle} src='images/Support-Illustration.png'/>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
        <Chat/>
        <Box>
            <Footer/>    
        </Box>
        </>
    )
}
