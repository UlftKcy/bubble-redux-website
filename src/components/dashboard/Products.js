import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import ShopProduct from './ShopProduct';

const Products = () => {
    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
            <ShopProduct/>
            </Grid>
        </Grid>
    )
}

export default Products;
