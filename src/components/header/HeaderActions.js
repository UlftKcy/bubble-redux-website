import React from "react";
import { Container,Button } from "@material-ui/core";

const HeaderActions = () => {
  return (
    <Container style={{ display: "flex",m:5}}>
        <Button>Sell Your Art</Button>
        <Button>Login</Button>
        <Button>Sign Up</Button>
    </Container>
  );
};

export default HeaderActions;
