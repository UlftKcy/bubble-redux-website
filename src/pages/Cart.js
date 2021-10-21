import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  ImageListItem,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useCardStyle = makeStyles((theme) => ({
  tableWrapper: {
    width: "200px",
    height: "auto",
  },
}));

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartReducers.cartItems);
  const classes = useCardStyle();

  return (
    <Container fluid>
      <TableContainer classes={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ITEM</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((cartProduct) => {
              const { image, name, brand, cartQuantity, price, id } =
                cartProduct;
              return (
                <TableRow>
                  <TableCell scope="row">
                    <img src={image} />
                  </TableCell>
                  <TableCell>
                    {name}by{brand}
                  </TableCell>
                  <TableCell>{cartQuantity}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>X</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Cart;
