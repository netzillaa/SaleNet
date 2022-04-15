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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },

    word:{
        height: '30vh',
        width: '35vh',
        elevation: 8,
    },

    pageImage:{
        height: '30vh',
        width: '50vh',
        elevation: 8,
        backgroundImngae: 'url(https://cyberseniors.org/wp-content/uploads/2021/05/online-buying-selling-safely.jpeg)'
    },
}));

export default function LandingPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.word}>
                <h1>Testing here</h1>
            </div>
            <div className={classes.pageImage}>

            </div>

            <VisitPage />
        </div>
    )
}   