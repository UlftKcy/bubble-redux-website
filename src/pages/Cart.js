import {
  Container,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  addProductToCart,
  decreaseProductFromCart,
  removeProductFromCart,
} from "../store/actions/cartActions";
import emptycart from "../assets/emptycart.png";
import cartReducers from "../store/reducers/cartReducers";

const useCardStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  },
  itemsWrapper: {
    minWidth: "60%",
    flexWrap: "wrap",
    backgroundColor: theme.palette.secondary.main,
  },
  checkoutWrapper: {
    minwidth: "30%",
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: 40,
    paddingRight: 40,
    margin: "30px",
  },
  checkoutBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  checkoutRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  thead: {
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: "100px",
    height: "auto",
  },
  span: {
    fontSize: "1.2rem",
  },
}));

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartReducers);
  const classes = useCardStyle();
  const dispatch = useDispatch();

  const handleDecreaseCart = (product) => {
    dispatch(decreaseProductFromCart(product));
  };
  const handleAddCart = (product) => {
    dispatch(addProductToCart(product));
  };
  const handleRemoveCart = (product) => {
    dispatch(removeProductFromCart(product));
  };
  return (
    <Grid className={classes.root}>
      {cartProducts.cartItems.length === 0 ? (
        <>
          <Typography variant="h5" gutterBottom component="div">
            "You have no items in your cart"
          </Typography>
          <img src={emptycart} width="300px" fluid />
        </>
      ) : (
        <>
          <Paper container className={classes.itemsWrapper}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.thead}>ITEM</TableCell>
                    <TableCell className={classes.thead}>NAME</TableCell>
                    <TableCell className={classes.thead}>QTY</TableCell>
                    <TableCell className={classes.thead}>PRICE</TableCell>
                    <TableCell className={classes.thead}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartProducts.cartItems.map((cartProduct) => {
                    const { image, name, brand, cartQuantity, cartAmount } =
                      cartProduct;
                    return (
                      <TableRow>
                        <TableCell scope="row">
                          <img src={image} fluid className={classes.image} />
                        </TableCell>
                        <TableCell>
                          <span className={classes.span}>{name}</span> <br />
                          {brand}
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleDecreaseCart(cartProduct)}
                            className={classes.button}
                          >
                            <RemoveIcon />
                          </Button>
                          <span className={classes.span}>{cartQuantity}</span>
                          <Button
                            onClick={() => handleAddCart(cartProduct)}
                            className={classes.button}
                          >
                            <ControlPointIcon />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <span className={classes.span}>${cartAmount}</span>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => handleRemoveCart(cartProduct)}
                            aria-label="delete"
                            color="primary"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Paper container className={classes.checkoutWrapper}>
            <TableContainer>
              <TableBody className={classes.checkoutBody}>
                <TableRow className={classes.checkoutRow}>
                  <TableCell className={classes.thead}>ITEMS</TableCell>
                  <TableCell className={classes.thead}>
                    {cartProducts.cartTotalQuantity}
                  </TableCell>
                </TableRow>
                <TableRow className={classes.checkoutRow}>
                  <TableCell>TOTALS</TableCell>
                  <TableCell>${cartProducts.cartTotalAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <Button variant="contained" color="primary">
                    Checkout
                  </Button>
                </TableRow>
              </TableBody>
            </TableContainer>
          </Paper>
        </>
      )}
    </Grid>
  );
};

export default Cart;
