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

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '10vw',
        paddingTop: '3vw',
        // backgroundColor: '#ECECEC',
        // backgroundImage: 'url(https://img.freepik.com/free-vector/white-background-with-stripe-texture_105940-672.jpg)',
        // backgroundSize: '100%',
        
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
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 400
        
    },

    pageImage:{
        height: '20vw',
        // width: '40vw',
        elevation: 8,
        backgroundImage: 'url(https://i.pinimg.com/originals/99/1f/9e/991f9e7a79a5fc945310b8c54f0fb9d2.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
}));

export default function LandingPage() {

    const classes = useStyles();

    return (
        <div style={{backgroundColor: '#ECECEC'}}>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div className={classes.word}>
                        SaleNet<br></br>
                        Manage Your Business in the Easiest Way
                    </div>
                    <div className={classes.pageImage}>
                    </div>/

                </div>
            </div>
            <VisitPage />
        </div>
    )
}   