import React from "react";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useCardStyle = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    height: "100%",
  },
  media: {
    objectFit: "cover",
  },
}));

const FeaturedProductItem = ({ product }) => {
  const { id,name, image, price, brand } = product;
  const classes = useCardStyle();
  return (
    <Grid item>
      <Link to={`/featuredProducts/${id}`}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
};

export default FeaturedProductItem;
