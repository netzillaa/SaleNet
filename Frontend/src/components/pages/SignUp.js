import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme();

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shopName, setshopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [businessLicense, setBusinessLicense] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userName,
        password,
        email,
        phoneNumber,
        shopName,
        shopAddress,
        businessLicense,
      }),
    });
    const sentData = await response.json();
    console.log(sentData);
    window.location.href = "http://localhost:3000/signin";
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
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
                <Link href="/signin" variant="body2">
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
