import React ,{useEffect, useState} from 'react'
import { Grid, Typography } from '@material-ui/core';
import ShopProduct from './ShopProduct';


const Products = () => {
    
    useEffect(() => {
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>console.log(data))
    }, [])
    
    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
            <ShopProduct/>
            </Grid>
        </Grid>
    )
}

export default Products;
