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
import '../../../css/CheckOut.css';
import CardMedia from '@mui/material/CardMedia';

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

function CheckOut() {
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
                    <Card sx={{ minHeight: 570, minWidth: 800, padding: 3, paddingTop: 2, marginBottom: 10 }}>
                        <div className="checkout" style={{ justifyContent: 'center', alignItems: "center", textAlign: "center" }}>
                            <Typography component="h1" variant="h3">
                                Checkout
                            </Typography>
                            <ColoredLine color="black" />
                            <div className="receipt">
                                
                                {/* RECEIPT HERE */}

                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 160,
                                        maxHeight: { xs: 200, md: 167 },
                                        maxWidth: { xs: 160, md: 250 },
                                        paddingTop: 2,
                                    }}
                                    alt="successful icon image"
                                    src="images/successful.png"
                                />

                                <div className="box-x">
                                    
                                    <section className="order-details">
                                        <p>
                                            Checkout successful!<br></br>
                                            Thank you for shopping with Netzilla.
                                            Please choose the options on getting your receipt.
                                        </p>

                                        {/* <button href="/Dashboard">Okay</button> */}
                                        <button href="#">Email Receipt</button>
                                        <button href="#">Download PDF</button>
                                        
                                    </section>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Box>

            </Container>
        </ThemeProvider >
    )
}

export default CheckOut;