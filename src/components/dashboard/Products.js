import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import ShopProduct from "./ShopProduct";
import { fetchCategoryList } from "../../store/actions/fetchCategoryList";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

const Products = () => {
  const productCategories = useSelector(
    (state) => state.categories.categoryList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryList());
  }, []);
  
  return (
    <Grid container sx={{ flexGrow: 1 }} style={{padding:20}}>
      <Typography variant="h4" gutterBottom component="div" color="primary">Shop Product Range</Typography>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" spacing={4}>
          {productCategories.map((category, id) => (
            <ShopProduct category={category} key={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
