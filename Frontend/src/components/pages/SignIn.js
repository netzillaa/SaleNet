import * as React from "react";
import { useState } from "react";
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
import axios from "axios";
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import ErrorMessage from "../ErrorMessage";
import Header2 from "../Header2";
import Alerto from "./Alerto";
import AlertoError from "./AlertoError";

const theme = createTheme();
export default function SignIn({ history }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);

  React.useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      setSuccess(false);
    }
    if (userInfo) {
      history.push({
        pathname: `/dashboard`, search: `${email}`
      });
    }
  }, [history]);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  function getId(token) {
    try {

      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } catch (err) {
    }

    var id = JSON.parse(jsonPayload).id;
    var cleanId = id.trim();
    console.log('json parse: ', cleanId)
    return cleanId;
  }

  async function signIn(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/auth/login", { email, password }, config)
      localStorage.setItem('userInfo', JSON.stringify(data));
      var token = localStorage.getItem('userInfo');
      localStorage.setItem('userId', getId(token));

      history.push({
        pathname: `/dashboard`, search: `${email}`
      })

    }
    catch (err) {
      localStorage.removeItem('userInfo')
      alert("Invalid email or password!")
      console.log(err);
    }
  }
  return (
    <>
      {/* {!success}(
      <AlertoError /> */}
      <ThemeProvider theme={theme}>
        <Header2 />
        <Grid container component="main" sx={{ height: "50rem" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundImage: "url(./)",
              //we can get images from a website if we specify url like below
              backgroundImage: "url(https://images.unsplash.com/photo-1648838775124-c69cda0203bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTUyMTM4Mw&ixlib=rb-1.2.1&q=80&w=1080)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={signIn}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* ) */}
    </>);
}
