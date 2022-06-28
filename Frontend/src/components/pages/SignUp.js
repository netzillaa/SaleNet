import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Header2 from "../Header2";

const theme = createTheme();

const useStyles = makeStyles(() => ({

  cardStyle: {
      height: '50%',
      width: '50%',
      minWidth: '380px',
      minHeight: '300px',
      margin: 'auto',
      padding: '3em 8em'
  },
}));


export default function SignUp({history}) {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shopName, setshopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [businessLicense, setBusinessLicense] = useState("");
  const [phoneKey, setPhoneKey] = useState("");
  const classes = useStyles();


  async function registerUser(event) {
    event.preventDefault();
    var emailFormat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (fullName === null || fullName === "") {
      alert("Please enter your fullname")
      return false;
    }
    if (userName === null || userName.length < 6) {
      alert("Please enter your username longer than 6 characters")
      return false;
    }
    if (password === null || password.length < 8) {
      alert("Please enter password longer than 8 characters")
      return false;
    }
    if (!email.match(emailFormat)) {
      alert("Please enter the correct email address")
      return false;
    }
    if (shopName === null || shopName === "") {
      alert("Please enter your shop name")
      return false;
    }
    if (shopAddress === null || shopAddress === "") {
      alert("Please enter your shop address")
      return false;
    }
    if (businessLicense === null || businessLicense.length < 6) {
      alert("Please enter the correct business lisence")
      return false
    }

      
    localStorage.setItem("fullName",fullName)
    localStorage.setItem("userName",userName)
    localStorage.setItem("password",password)
    localStorage.setItem("email",email)
    localStorage.setItem("phoneNumber",phoneNumber)
    localStorage.setItem("shopName",shopName)
    localStorage.setItem("shopAddress",shopAddress)
    localStorage.setItem("businessLicense",businessLicense)

    history.push({
      pathname: `/verify`
    })
  }
  return (
    <ThemeProvider theme={theme}> 
      <Header2 />
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            margin: 'auto',
            marginTop: 8
          }}
        >
          <Card className={classes.cardStyle}>
          <Avatar sx={{ m: 'auto', bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={registerUser}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  type="text"
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  type="text"
                  label="Username"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="text"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  type="text"
                  label="Phone Number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={shopName}
                  onChange={(e) => setshopName(e.target.value)}
                  required
                  type="text"
                  label="shop Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={shopAddress}
                  onChange={(e) => setShopAddress(e.target.value)}
                  required
                  type="text"
                  label="shop Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={businessLicense}
                  onChange={(e) => setBusinessLicense(e.target.value)}
                  required
                  type="text"
                  label="Business License"
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
                <Link href="/verify" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

