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

function CheckOut(){
    return(
        <ThemeProvider theme={theme}>
            <Header3/>
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
                    <Card sx={{ minHeight: 500, minWidth: 600, padding: 3, paddingTop: 3, marginBottom: 10 }}>
                        <div className="checkout" style={{ justifyContent: 'center', alignItems: "center", textAlign: "center" }}>
                            <Typography component="h1" variant="h3">
                                Checkout
                            </Typography>
                            <ColoredLine color="black" />
                            <div className="order-success">

                                <Typography component="h4" variant="h4">
                                    Thank you for your order!
                                </Typography>
                                <section className="order-details">
                                    <p>
                                       Thank you for shopping with Netzilla. 
                                       Please choose the options on getting your receipt. 
                                    </p>

                                    <Button href="/Dashboard">Okay</Button>
                                    <Button href="#">Email Receipt</Button>
                                    <Button href="#">Download PDF</Button>
                                </section>

                            </div>
                        </div>
                    </Card>
                </Box>

            </Container>
        </ThemeProvider >
    )
}

export default CheckOut;