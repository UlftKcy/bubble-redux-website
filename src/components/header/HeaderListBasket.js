import React from "react";
import { Box, Button } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useListBasketStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent:"center",
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: "600",
    size: "large",
    "&:hover": {
      cursor: "pointer",
      borderRadius: 30,
      color: theme.palette.primary.main,
    },
  },
}));
const HeaderListBasket = () => {
  const classes = useListBasketStyles();
  return (
    <Box className={classes.root}>
      <Button className={classes.button}>
        <FavoriteBorderOutlinedIcon />
      </Button>
      <Button className={classes.button}>
        <ShoppingCartOutlinedIcon />
      </Button>
    </Box>
  );
};

export default HeaderListBasket;
