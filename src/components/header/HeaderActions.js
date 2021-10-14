import React from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useActionStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.main,
    size: "medium",
    marginLeft: 20,
    padding:"10px 20px",
    fontWeight: "600",
    textTransform: "capitalize",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const HeaderActions = () => {
  const classes = useActionStyles();
  return (
    <Box className={classes.root}>
      <Button className={classes.button}>Sell Your Art</Button>
      <Button className={classes.button}>Login</Button>
      <Button className={classes.button}>Signup</Button>
    </Box>
  );
};

export default HeaderActions;
