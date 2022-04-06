import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import "../css/RegisterSteps.css";

const theme = createTheme();

export default function RegisterSteps() {
  const [fullName, setfullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [businessLicenseNum, setBusinessLicenseNum] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userName,
        password,
        email,
        phoneNum,
        storeName,
        storeAddress,
        businessLicenseNum,
      }),
    });
    const sentData = await response.json();
    console.log(sentData);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required={true}
                  fullWidth={true}
                  hintText="Enter Your Ad Title"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Username"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    type="text"
                    placeholder="Phone Number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    type="text"
                    placeholder="Store Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={storeAddress}
                    onChange={(e) => setStoreAddress(e.target.value)}
                    type="text"
                    placeholder="Store Address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={businessLicenseNum}
                    onChange={(e) => setBusinessLicenseNum(e.target.value)}
                    type="text"
                    placeholder="Business License Number"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item> 
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
