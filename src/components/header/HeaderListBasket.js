import React from "react";
import { Box, IconButton, Badge } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const useListBasketStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: "25px",
  },
}));
const HeaderListBasket = () => {
  const classes = useListBasketStyles();
  const history = useHistory();
  const cartQuantities = useSelector(
    (state) => state.cartReducers.cartTotalQuantity
  );

  return (
    <Box className={classes.root}>
      <IconButton className={classes.button} color="primary">
        <FavoriteBorderOutlinedIcon className={classes.icon} />
      </IconButton>
      <IconButton
        onClick={() => history.push("/cart")}
        color="primary"
        aria-label="cart"
      >
        <Badge badgeContent={cartQuantities} color="secondary">
          <AddShoppingCartIcon className={classes.icon} />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default HeaderListBasket;
