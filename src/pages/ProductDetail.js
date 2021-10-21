import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button, Container, Item, Icon } from "semantic-ui-react";
import { fetchFeaturedDetail } from "../store/actions/fetchFeaturedDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector(
    (state) => state.featuredDetail.featuredProduct
  );

  const { name, image, brand, price } = detailProduct;
  

  useEffect(() => {
    dispatch(fetchFeaturedDetail(productId));
  }, [dispatch]);

  return (
    <Container text>
      <Item.Group relaxed>
        <Item>
          <Item.Image size="large" src={image} fluid />

          <Item.Content style={{ padding: "30px" }} verticalAlign="middle">
            <Item.Header as="h2">{name}</Item.Header>
            <Item.Description>by {brand}</Item.Description>
            <Item.Description>{price}</Item.Description>
            <Item.Extra>
              <Button size="large" animated="vertical" color='green' fluid>
                <Button.Content hidden>Add to cart</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default ProductDetail;
