import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import VisitPage from "./VisitPage";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5vw',
        paddingTop: '4vw',
    },
    
    wrapper:{
        display: 'grid',
        // display: 'flex',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(5em, 60em))',
        width: '90%',
        boxShadow: '-2px 4px 7px 0 grey',
        padding: '3vw',
        backgroundColor: 'white',
    },
    
    word:{
        fontWeight: 'bold',
        fontSize: '2vw',    
    },

    salenet:{
        fontFamily: 'Tahoma, sans-serif',
        fontWeight: 'bolder',
        fontSize: '3vw',
        color: '#FF8000'
    },

    pageImage:{
        height: '20vw',
        backgroundImage: 'url(https://i.pinimg.com/originals/99/1f/9e/991f9e7a79a5fc945310b8c54f0fb9d2.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

    startButton:{
        fontWeight: 'bold',
        fontSize: '2vw',
        color: '#FF8000'
    },

    divider:{
        width: '100%',
        height: '15vw',
        backgroundImage: 'url(https://wallpaperaccess.com/full/656684.jpg)',
        backgroundPosition: '0 -300px',
    },

    addOn:{
        fontSize:'2.5vw', 
        fontWeight:'bolder', 
        backgroundColor:'rgb(255,255,255,0.2)', 
        width:'100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Courier New, monospace'
    }
}));

export default function LandingPage() {

    const classes = useStyles();

    return (
        <div style={{backgroundColor: '#ECECEC'}} id='firstDisplay'>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div>
                        <div className={classes.salenet}>SaleNet</div>
                        <div className={classes.word}>Manage Your Business in the <span style={{fontFamily: 'Courier New, monospace'}}>Easiest</span> Way</div>
                        <br></br>
                        <div style={{fontSize: '1.5vw', color:'black'}}>Grow More Efficiently</div>
                        <div style={{outline: '3vw white solid'}}>
                            <Button style={{fontWeight: 'bold', fontSize: '1vw', color: '#FF8000', border: '2px #FF8000 solid'}}>
                                        Get Started
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className={classes.pageImage}></div>
                    </div>

                </div>
            </div>
            <div className={classes.divider}>
                <div className={classes.addOn}>
                    High Efficiency with Fewer Mistakes
                </div>
            </div>
            <div style={{textAlign:'center', paddingBottom:'8vw'}}>
                <Scroll to="visitPage" smooth={true}>
                    <KeyboardArrowDownOutlinedIcon style={{fontSize:'5vw', color: '#FF8000', cursor:'pointer'}}/>
                </Scroll>
            </div>
            <VisitPage />
            
        </div>
    )
}   
