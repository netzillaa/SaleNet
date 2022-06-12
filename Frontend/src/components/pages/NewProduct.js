import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import Header3 from '../Header3';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import { Input } from "@mui/material";

const useStyles = makeStyles(() => ({

    cardStyle: {
        height: '60%',
        width: '50%',
        minWidth: '380px',
        minHeight: '300px',
        margin: 'auto',
    },

    pageTitle: {
        width: '100%',
        height: '4vw',
        minHeight: '40px',
        backgroundColor: '#000193',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    holder: {
        height: '12vw',
        width: '12vw',
        minHeight: '80px',
        minWidth: '80px',
        margin: 'auto',
        position: 'relative',
    },

    imgStyle: {
        outline: '0.15vw black solid',
        borderRadius: '0.3vw',
        height: '12vw',
        width: '12vw',
        minHeight: '80px',
        minWidth: '80px',
        objectFit: 'cover',
        boxShadow: '0.2vw 0.3vw 0.5vw 0.2vw #dadadc',
    },

}));

export default function NewProduct() {

    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    console.log('id here:' + id);
    const classes = useStyles();

    function handleImage(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                //   setProductImage(e.target.result);
                setIsUploaded(true);
                const preview = document.querySelector('img')
                preview.src = e.target.result;
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    function changeImage(e) {
        handleImage(e)
        setProductImage(e.target.files[0], "productImage")
    }

    function resetImage(e) {
        e.target.value = null;
        setProductImage("");
        setIsUploaded(false);
    }

    const addProduct = async () => {
        if (productName === null || productName === "") {
            alert("Please enter your product name")
            return false;
        }
        if (productPrice === null || productPrice === "") {
            alert("Please enter your product price")
            return false;
        }
        if (productCategory === null || productCategory === "") {
            alert("Please enter your product category")
            return false;
        }
        if (productQuantity === null || productQuantity === "") {
            alert("Please enter your product quantity")
            return false;
        }

        if (productImage === null || productImage === "") {
            alert("Please enter your product image")
            return false;
        }


        var formData = new FormData();
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        formData.append('productCategory', productCategory);
        formData.append('productImage', productImage);
        formData.append('productQuantity', productQuantity);
        formData.append('owner', owner);
        console.log(formData);
        console.log(productImage);
        const { data } = await axios.post("http://localhost:4000/products/add", formData).then(res => {
            console.log(res);
            window.location.href = "http://localhost:3000/manageProduct";
            return false
        }
        );

        console.log(
            "Product Name: " + productName +
            "   Product Price: " + productPrice +
            "   Product Category: " + productCategory +
            "   Product Image: " + productImage
        );

        window.location.href = "http://localhost:3000/manageProduct";
    };

    const userInfo = localStorage.getItem("userInfo");

    function parseJwt(token) {
        try {

            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (err) {
            window.location.href = "http://localhost:3000/403";
        }

        return JSON.parse(jsonPayload).shop;
    }

    const owner = parseJwt(userInfo);

    useEffect(() => {

    }, []);

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <>
            <Header3 />
            <div style={{ paddingTop: '40px' }}>
                <Card className={classes.cardStyle}>
                    <Box className={classes.pageTitle}>
                        <b style={{ color: 'white', fontSize: '20px' }}>Add New Product</b>
                    </Box>
                    <Box height='2vw' minHeight='16px' />

                    <Box align='center' className={classes.holder}>
                        {!isUploaded ? (
                            <img src='images/productImages/default_image.png'
                                className={classes.imgStyle} />
                        ) : (
                            <img src={productImage}
                                className={classes.imgStyle} />
                        )}
                    </Box>

                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 3 }}
                        padding="1vw 8vw 3vw 8vw"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Product Name:
                                </Typography>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setProductName(e.target.value)}
                                    InputProps={{ style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="text"
                                    label="Product Name"
                                />
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Product Price:
                                </Typography>

                                <TextField
                                    fullWidth
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    InputProps={{ style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="text"
                                    label="Product Price"
                                />
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Product Category:
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                        style={{ fontSize: '150%' }}>
                                        Product Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="productCategory"
                                        name="productCategory"
                                        label="productCategory"
                                        style={{ fontSize: '150%' }}
                                        onChange={(e) => setProductCategory(e.target.value)}
                                    >
                                        <MenuItem value={"FOOD"} style={{ fontSize: '150%' }}>FOOD</MenuItem>
                                        <MenuItem value={"DRINK"} style={{ fontSize: '150%' }}>DRINK</MenuItem>
                                        <MenuItem value={"OTHER"} style={{ fontSize: '150%' }}>OTHER</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Stock:
                                </Typography>
                                <TextField
                                    fullWidth
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                    InputProps={{ inputProps: { min: 0, max: 150 }, style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="number"
                                    label="Quantity"
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginBottom: "2em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                {/* {isUploaded ? ( */}
                                <Input
                                    fullWidth
                                    // onChange={(e) => setProductImage(e.target.files[0], "productImage")}
                                    onChange={changeImage}
                                    type="file"
                                    accept="image/*"
                                    style={{ fontSize: '160%' }} />
                                {/* ):( */}
                                {/* <Input
                                        fullWidth
                                        onChange={()=>console.log('not working')}
                                        required
                                        type="file"
                                        accept="image/*"
                                        style={{ fontSize: '150%' }} /> */}
                                {/* )} */}

                                <Button
                                    onClick={resetImage}
                                    variant="contained"
                                    sx={{
                                        fontSize: '120%', backgroundColor: 'red', color: 'white',
                                        '&:hover': {
                                            backgroundColor: "#d0021b", color: "white"
                                        }
                                    }}
                                >reset</Button>
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Button
                                    onClick={addProduct}
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                                        '&:hover': {
                                            backgroundColor: "#000193", color: "white"
                                        }
                                    }}
                                >
                                    Add Product
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%',
                                        backgroundColor: '#bbbbbb',
                                        color: 'black',
                                        '&:hover': { backgroundColor: '#9b9b9b', color: 'black' }
                                    }}
                                    component={Link} to='/manageProduct'
                                >
                                    Cancel
                                </Button>

                            </Grid>
                        </Grid>
                    </Box>

                </Card>
            </div>
        </>
    )
}
