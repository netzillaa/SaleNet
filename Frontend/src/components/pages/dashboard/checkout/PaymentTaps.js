import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header3 from '../../../Header3';
import Context from "../reducer/Context";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '50ch',
    },
}));

const theme = createTheme();

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, width: 350, height: 350 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function PaymentTaps({
    DBcartTotalPrice,
}) {

    const classes = useStyles();

    const [customerPayment, setCustomerPayment] = useState(0);
    const [restOfMoney, setRestOfMoney] = useState(0);

    const handleCustomerPaymentChange = () => {
        setRestOfMoney(customerPayment - DBcartTotalPrice);
    };

    const [tap, seTap] = useState(0);

    const handleTapChange = (event, newtap) => {
        seTap(newtap);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    <Tabs value={tap} onChange={handleTapChange} aria-label="basic tabs example" >
                        <Tab label="Cash" {...a11yProps(0)} />
                        <Tab label="Card" {...a11yProps(1)} />
                        <Tab label="QR Code" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={tap} index={0}>
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <TextField
                                label="Total Price"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                }}
                                variant="outlined"
                                value={DBcartTotalPrice}
                            />
                            <TextField
                                label="Customer Payment"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                }}
                                variant="outlined"
                                onChange={(e) => setCustomerPayment(e.target.value)}
                            />
                            <TextField
                                label="Change"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                }}
                                variant="outlined"
                                value={restOfMoney}
                            />
                            <Button style={{ marginTop: '4rem', fontSize: '2rem', padding: '1rem 6rem', color: '#fff', backgroundColor: '#349bf3', borderRadius: '0.5rem' }} onClick={() => handleCustomerPaymentChange()}>
                                Calc
                            </Button>
                        </Grid >
                    </div>
                </TabPanel>
                <TabPanel value={tap} index={1}>
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <TextField
                                label="Card Holder Name"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                            />
                            <TextField
                                label="Card Number"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                            />
                            <TextField
                                label="CVV"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                            />
                                <TextField
                                    id="date"
                                    label="Expire Date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            <Button style={{ marginTop: '4rem', fontSize: '2rem', padding: '1rem 6rem', color: '#fff', backgroundColor: '#349bf3', borderRadius: '0.5rem' }}>
                                Charge
                            </Button>
                        </Grid >
                    </div>
                </TabPanel>
                <TabPanel value={tap} index={2}>
                    QR Code
                </TabPanel>
            </div>
        </ThemeProvider >
    )
}

export default PaymentTaps;