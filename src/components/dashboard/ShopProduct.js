import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Fab,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import fetchShopProduct from "../../store/actions/fetchShopProduct";
import React, { useState } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { addProductToCart } from "../../store/actions/cartActions";

const useCardStyle = makeStyles((theme) => ({
  card: {
    maxWidth: 350,
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
}));

const ShopProduct = ({ category, id }) => {
  const { name, image } = category;
  const classes = useCardStyle();
  const dispatch = useDispatch();
  const displayProduct = useSelector((state) => state.shopProduct.product);
  const [open, setOpen] = useState(false);

  const handleShop = (product) => {
    dispatch(addProductToCart(product));
    setOpen(false);
  };

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          component="img"
          alt={name}
        />
        <CardContent className={classes.content}>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <Fab
                onClick={() => dispatch(fetchShopProduct(category))}
                variant="extended"
              >
                Shop {name}
              </Fab>
            }
          >
            <Modal.Header>BUBBLE</Modal.Header>
            <Modal.Content image>
              <Image size="medium" src={displayProduct.image} wrapped />
              <Modal.Description>
                <Header>{displayProduct.name}</Header>
                <p>by {displayProduct.brand}</p>
                <p>${displayProduct.price}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button
                icon="checkmark"
                onClick={() => handleShop(displayProduct)}
                positive
                animated="vertical"
              >
                <Button.Content hidden>Cart</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Modal.Actions>
          </Modal>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default ShopProduct;
