import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import '../css/RegisterSteps.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: blue[100],
    color: theme.palette.primary.main
  },
  actions: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  primaryAction: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
      width: 'auto'
    }
  }
}));

function getSteps() {
  return ['Account Information', 'Personal Information', 'Store Information', 'Confirmation'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div class="registerBox">
          <Box mt={2} px={4}>
                <Box my={3}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="username" label="Username" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" type="password" name="password" label="Password" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" type="password" name="passwordRe" label="Password confirmation" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="email" label="E-mail address" />
                      </Grid>
                    </Grid>
                  </form>
                </Box>
          </Box>
          </div>
      )
    case 1:
      return (
        <div class="registerBox">
          <Box mt={2} px={4}>
                <Box my={3}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="fullName" label="Full name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="personalPhoneNum" label="Personal phone number" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="homeAddress" label="Personal Address" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="postCode" label="Post code" />
                      </Grid>
                    </Grid>
                  </form>
                </Box>
          </Box>
          </div>
      )
    case 2:
      return (
        <div class="registerBox">
          <Box mt={2} px={4}>
                <Box my={3}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="storeName" label="Store name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="storeAddress" label="Store Address" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="storePhoneNum" label="Store phone number" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth size="small" name="businessLicenseNum" label="Business license number" />
                      </Grid>
                    </Grid>
                  </form>
                </Box>
          </Box>
          </div>
      )
    case 3:
      return <div class="registerBox">
      <Box mt={2} px={4}>
            <Box my={3}>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth size="small" name="confirmationCode" label="Confirmation code" />
                  </Grid>
                </Grid>
              </form>
            </Box>
      </Box>
      </div>
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='registerContainer'>
    <div className={classes.root}>
      <Box >
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
          
          <div className='registerStatus'>
            <Typography className={classes.instructions}>{
              getStepContent(activeStep)
            }</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            </div>
          </div>
        )}
      </div>
      </Box>
    </div>
    </div>
  );
}