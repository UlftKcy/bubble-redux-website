import React from 'react';
import { Container,Button } from "@material-ui/core";

const HeaderListBasket = () => {
    return (
        <Container style={{ display: "flex",m:5}}>
        <Button>List</Button>
        <Button>Basket</Button>
    </Container>
    )
}

export default HeaderListBasket;
