import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { fetchFeaturedProduct } from "../../store/actions/fetchFeaturedProduct";
import { useSelector, useDispatch } from "react-redux";
import FeaturedProductItem from "./FeaturedProductItem";

const FeaturedProducts = () => {
  const productList = useSelector((state) => state.featured.featuredList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProduct());
  }, [dispatch]);

  return (
    <Grid container sx={{ flexGrow: 1 }} style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom component="div" color="primary">
        Featured products
      </Typography>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" spacing={4}>
          {productList.map((product, id) => (
            <FeaturedProductItem product={product} key={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturedProducts;
