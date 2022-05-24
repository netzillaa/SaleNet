import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Header3 from '../../Header3';
import CardMedia from '@mui/material/CardMedia';
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StoreIcon from '@mui/icons-material/Store';
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import '../../../css/Profile.css';

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
 
function userProfile() {
    return (
        <ThemeProvider theme={theme}>
            <Header3 />
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
                    <Card sx={{ maxHeight: 600, minWidth: 1000, padding: 3, paddingTop: 3, marginBottom: 4 }}>
                        <div className="checkout" style={{ justifyContent: 'center', alignItems: "center", textAlign: "center" }}>
                            {/* <Typography component="h1" variant="h3">
                                User Profile
                            </Typography> */}
                            <Grid container spacing={2} >

                                <Grid className="user-left" xs={5} style={{ height: 550, paddingTop: 15 }}>
                                    {/* <Typography classname="h3" component="h3" variant="h3">
                                        User Profile
                                    </Typography> */}

                                    <Box
                                        component="img"
                                        sx={{
                                            height: 320,
                                            width: 170,
                                            maxHeight: { xs: 330, md: 180 },
                                            maxWidth: { xs: 170, md: 250 },
                                            paddingTop: 2,
                                            marginTop: 15
                                        }}
                                        alt="user image"
                                        src="images/user.png"
                                    />
                                    <div className="image-button">
                                        <button href="#">Edit picture</button>

                                    </div>
                                </Grid>
                                <Grid className="user-right" xs={7} style={{ height: 550, paddingTop: 2 }}>

                                    <Typography classname="h4" component="h4" variant="h4">
                                        User Profile
                                    </Typography>

                                    <div className="user-details">
                                        <form>

                                            {/* USERNAME */}
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="fullname"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="username"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BadgeIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="password"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="phonenumber"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PhoneIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="shopname"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <StoreIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="shopaddress"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BusinessIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <br/>
                                            <div>
                                            <TextField
                                                fullWidth
                                                id="businesslicense"
                                                size="normal"
                                                //   defaultValue="Username"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BusinessCenterIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                        </form>

                                        <div className="user-button">
                                        <button href="#">Edit profile details</button>

                                    </div>
                                    </div>
                                </Grid>
                            </Grid>


                            <div className="box-x">


                            </div>
                        </div>
                    </Card>
                </Box>

            </Container>
        </ThemeProvider >
    )
}

export default userProfile;