import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from '@mui/material/Card';
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header_SignedIn from "../Header_SignedIn";


const theme = createTheme();

export default function NewProduct() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");

    const addProduct = (event) => {
        event.preventDefault();
        console.log(
            "Product Name: " + productName +
            "   Product Price: " + productPrice +
            "   Product Category: " + productCategory +
            "   Product Image: " + productImage
            );
    };

    return (
        <ThemeProvider theme={theme}>
            <Header_SignedIn />
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

                    <Card sx={{ minHeight: 500, minWidth: 600, padding: 3, paddingTop: 6, marginBottom: 10 }}>
                        <Typography component="h1" variant="h3" sx={{ textAlign: "center" }}>
                            New Product Information
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={addProduct}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ marginBottom: "1em" }}>
                                    <TextField
                                        fullWidth
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                        type="text"
                                        label="Product Name"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: "1em" }}>
                                    <TextField
                                        fullWidth
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}
                                        required
                                        type="text"
                                        label="Product Price"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: "1em" }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="productCategory"
                                            name="productCategory"
                                            label="productCategory"
                                            onChange={(e) => setProductCategory(e.target.value)}
                                        >
                                            <MenuItem value={"FOOD"}>FOOD</MenuItem>
                                            <MenuItem value={"DRINK"}>DRINK</MenuItem>
                                            <MenuItem value={"OTHER"}>OTHER</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: "2em" }}>
                                    <TextField
                                        fullWidth
                                        value={productImage}
                                        onChange={(e) => setProductImage(e.target.value)}
                                        required
                                        type="file"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add Product
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider >
    );
}