import {
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
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const useCardStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  },
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    margin: "auto",
    paddingLeft: 40,
    paddingRight: 40,
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
  const cartProducts = useSelector((state) => state.cartReducers.cartItems);
  const classes = useCardStyle();

  return (
    <Grid container wrap className={classes.root}>
      <Paper container className={classes.wrapper}>
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
              {cartProducts.map((cartProduct) => {
                const { image, name, brand, cartQuantity, price, id } =
                  cartProduct;
                return (
                  <TableRow>
                    <TableCell scope="row" className={classes.tableCell}>
                      <img src={image} fluid className={classes.image} />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <span className={classes.span}>{name}</span> <br />
                      {brand}
                    </TableCell>
                    <TableCell>
                      <Button className={classes.button}>
                        <RemoveIcon />
                      </Button>
                      <span className={classes.span}>{cartQuantity}</span>
                      <Button className={classes.button}>
                        <ControlPointIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <span className={classes.span}>{price}</span>
                    </TableCell>
                    <TableCell>
                      <IconButton aria-label="delete" color="primary">
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
    </Grid>
  );
};

export default Cart;
