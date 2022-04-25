import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper,Box, Avatar, TextField, Link as Nv } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import {useState} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Link } from "react-router-dom";

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
        color:'white',
        width: '100%',
        border: 'none',
        padding: '1vw',
        borderRadius: '5px'
    },
}));
 
export default function Verification(){
    
    const classes = useStyles();
     
    const [user, setUser] = useState({
        code:"",
        
    });
    
    const { fname, lname, email, phone } = user;

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // your submit logic
    }

      // Timer 
 
    const [counter, setCounter] = useState(15);
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    document.body.style.backgroundColor='#ECECEC';
    
    return(
        <div style={{ paddingTop: '100px'}}>
            <Paper elevation={8} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <EmailIcon style={{ fontSize: '25px' }} />
                    </Avatar>
                    <br/>
                    <h1>Verfiy Your Email Address</h1> <br/>
                    <h3>
                        We've sent you an email to <b>example@example.com</b> to verify your
                        email address and activate your account.
                    </h3> <br/>
                </Grid>

                <ValidatorForm
                    onSubmit={handleSubmit}>
                    <TextValidator
                        label="Enter Verification Code"
                        onChange={handleChange}
                        variant="outlined"
                        inputProps={{ maxLength: 5 }}
                        name="code"
                        size="medium"
                        type="text"
                        fullWidth
                        validators={['required']}
                        errorMessages={['Verification code is required']}
                        value={user.fname}
                    />

                    <button type='submit' className={classes.btnstyle}>VERIFY</button>
                </ValidatorForm>
                <Box mt={3} >
                    <h4 style={{textAlign: 'center'}}>
                        Resend code in 
                        <span style={{fontWeight: "bold" }}> 00:{counter}</span>
                    </h4>
                </Box>

                <h4 style={{textAlign: 'center'}}>
                    <Link to=""> Resend Code </Link>
                </h4>

            </Paper>
        </div>
    )
}
