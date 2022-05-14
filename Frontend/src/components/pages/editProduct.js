import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Card, Typography, Link as Nv } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header3 from '../Header3';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import EditImageModal from '../EditImageModal';
import {useLocation} from "react-router-dom";

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
        backgroundColor: '#b8d0d5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

export default function editProduct() {

    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    // const [productImage, setProductImage] = useState("");

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    console.log('id here:'+ id);
    const classes = useStyles();
    useEffect(() => {
        getproduct();
    }, []);

    const getproduct = async () => {
        await axios.get('http://localhost:4000/products/editProduct/'+id).then(res => {
            setProduct(res.data.result)
            console.log('Get product: ', res.data.result);
        }).catch(err => {
            console.log(err);
        })
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
                    <Box style={{display:'flex', justifyContent:'center'}}>
                        <EditImageModal image='https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8'/>
                    </Box>
                    <Box
                        component="form"
                        noValidate
                        // onSubmit={addProduct}
                        sx={{ mt: 3 }}
                        padding="1vw 8vw 3vw 8vw"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} 
                                  style={{ marginBottom: "1em", display:'flex', gap:'1em', alignItems:'center'}}>
                                <Typography style={{alignItems:'center', width:'22%', fontSize:'150%'}}>
                                    Product Name:
                                </Typography>
                                <TextField
                                    fullWidth
                                    value={product.productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    InputProps={{ style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="text"
                                    label="Product Name"
                                />
                            </Grid>
                            <Grid item xs={12} 
                                  style={{ marginBottom: "1em", display:'flex', gap:'1em', alignItems:'center'}}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Product Price:
                                </Typography>

                                <TextField
                                    fullWidth
                                    value={product.productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    InputProps={{ style: { fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="text"
                                    label="Product Price"
                                />
                            </Grid>
                            <Grid item xs={12} 
                                  style={{ marginBottom: "1em", display:'flex', gap:'1em', alignItems:'center'}}>
                                <Typography style={{ alignItems: 'center', width: '22%', fontSize: '150%' }}>
                                    Product Category:
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                                style={{fontSize: '150%'}}>
                                         Product Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="productCategory"
                                        name="productCategory"
                                        label="productCategory"
                                        onChange={(e) => setProductCategory(e.target.value)}
                                        value={product.productCategory}
                                    >
                                        <MenuItem value={"FOOD"} style={{fontSize: '150%'}}>FOOD</MenuItem>
                                        <MenuItem value={"DRINK"} style={{fontSize: '150%'}}>DRINK</MenuItem>
                                        <MenuItem value={"OTHER"} style={{fontSize: '150%'}}>OTHER</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} 
                                  style={{ marginBottom: "1em", display:'flex', gap:'1em', alignItems:'center'}}>
                                <Typography style={{alignItems:'center', width:'22%', fontSize:'150%'}}>
                                    Stock:
                                </Typography>
                                <TextField
                                    fullWidth
                                    // value={productName}
                                    // onChange={(e) => setProductName(e.target.value)}
                                    InputProps={{ inputProps: { min: 0, max: 150 }, style:{ fontSize: "150%" } }}
                                    InputLabelProps={{ style: { fontSize: "150%" } }}
                                    required
                                    type="number"
                                    label="Quantity"
                                />
                            </Grid>
                            <Grid item xs={12} 
                                  style={{ marginBottom: "1em", display:'flex', gap:'1em', alignItems:'center'}}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{fontSize:'130%'}}
                                >
                                    Update Product
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{fontSize:'130%', 
                                         backgroundColor:'#bbbbbb', 
                                         color:'black',
                                         '&:hover':{backgroundColor:'#9b9b9b'}}}
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
