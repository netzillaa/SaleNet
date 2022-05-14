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
import Context from "./reducer/Context";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

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

function OrderDetails() {
    const [DBcartItems, setCartItems] = useState([]);
    const [DBcartTotalPrice, setCartTotalPrice] = useState(0);
    const [DBcartId, setCartId] = useState(0);

    useEffect(() => {
        getCart();
      }, []);

    const getCart = async () => {
        await axios.get("http://localhost:4000/products/getOrder").then(res => {
            setCartItems(res.data.orderCart[0].items)
            setCartTotalPrice(res.data.orderCart[0].totalPrice)
            setCartId(res.data.orderCart[0]._id)
        }).catch(err => {
            console.log(err);
        })
    }

    
    const items = DBcartItems.map(item => {
        return (
            <div>
                <div
                    key={item.DBcartItems}
                />
                {DBcartItems[0]}
            </div>
        )
    })
    //todo table and style the items from the order

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
                    <Card sx={{ minHeight: 500, minWidth: 600, padding: 3, paddingTop: 3, marginBottom: 10 }}>
                        <div className="orderDetails" style={{ justifyContent: 'center', alignItems: "center", textAlign: "center" }}>
                            <Typography component="h1" variant="h3">
                                Order Details
                            </Typography>
                            <ColoredLine color="black" />
                            <div >
                                {items}
                            </div>
                        </div>
                    </Card>
                </Box>

            </Container>
        </ThemeProvider >
    )
}

export default OrderDetails;