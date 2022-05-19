import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography} from '@material-ui/core';
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
import EditImageModal from '../EditImageModal';
import { useLocation } from "react-router-dom";

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
}));

export default function editProduct() {

    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productQuantity, setProductQuantity] = useState("");

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    console.log('id here:' + id);
    const classes = useStyles();

    useEffect(() => {
        getproduct();
    }, []);

    const getproduct = async () => {
        await axios.get('http://localhost:4000/products/editProduct/' + id ).then(res => {
            setProductName(res.data.result.productName)
            setProductPrice(res.data.result.productPrice)
            setProductCategory(res.data.result.productCategory)
            setProductQuantity(res.data.result.productQuantity)
            setProductImage('images/productImages/'+res.data.result.productImage)
            console.log('Get product: ', res.data.result);
        }).catch(err => {
            console.log(err);
        })
    }

    const update = async () => {
        console.log('updating product info');
        await axios.post('http://localhost:4000/products/update/' + id, {productName, productPrice, productQuantity, productCategory}).then(res => {
        }).catch(err => {
            console.log(err);
        })
    }

    const updateProduct = () => {
        update();
        console.log('updated product info!');
        reload();
    }

    const reload = () => {
        window.location.reload(false);
    };

    const handleImage = (data) => {
        setProductImage(data)
    }

    document.body.style.backgroundColor = '#ECECEC';

    return (
        <>
            <Header3 />
            <div style={{ paddingTop: '40px' }}>
                <Card className={classes.cardStyle}>
                    <Box className={classes.pageTitle}>
                        <h1>Edit Product</h1>
                    </Box>
                    <Box height='2vw' minHeight='16px' />
                    {/* <EditImageModal image={productImage} setProductImage={setProductImage}/> */}
                    <EditImageModal image={productImage} chnageImage={productImage => setProductImage(productImage)}/>
                    {/* <EditImageModal image={productImage} handleImage={handleImage}/> */}
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
                                    value={productName}
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
                                    value={productPrice}
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
                                        style={{fontSize:'150%'}}
                                        onChange={(e) => setProductCategory(e.target.value)}
                                        value={productCategory}
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
                                    value={productQuantity}
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                    InputProps={{ inputProps: { min: 0, max: 150 }, style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="number"
                                    label="Quantity"
                                />
                            </Grid>
                            <Grid item xs={12}
                                style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center' }}>
                                <Button
                                    onClick={updateProduct}
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                                        '&:hover': {
                                            backgroundColor: "#000193", color: "white"
                                        }
                                    }}
                                >
                                    Update Product
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '130%',
                                        backgroundColor: '#bbbbbb',
                                        color: 'black',
                                        '&:hover': { backgroundColor: '#9b9b9b', color:'black' }
                                    }}
                                    component={Link} to='/manageProduct'
                                >
                                    Close
                                </Button>

                            </Grid>
                        </Grid>
                    </Box>

                </Card>
            </div>
        </>
    )
}
