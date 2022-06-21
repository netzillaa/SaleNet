import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Products = () => {
    useEffect(() => {
        getAllProducts();
    }, []);

    const [product, setProduct] = useState();
    const getproduct = async () => {
        try {
            const res = await axios.get("https://stingray-app-w2y85.ondigitalocean.app/products/allProducts");
            setProduct(res.data);
        }
        catch (err) {
            alert(err.message);
        }
    }

}

export default Products;

