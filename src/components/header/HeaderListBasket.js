import React from "react";
import { Box, IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useListBasketStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.main,
  },
}));
const HeaderListBasket = () => {
  const classes = useListBasketStyles();
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <IconButton className={classes.button} color="primary" component="span">
        <FavoriteBorderOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push("/cart")}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default HeaderListBasket;
