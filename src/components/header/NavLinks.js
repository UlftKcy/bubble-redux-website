import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navlink: {
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    "&:active": {
      color: "blue",
    },
  },
  categorylink: {
    fontSize: "1.1rem",
    fontWeight: "600",
  },
}));

const NavLinks = ({ productCategories }) => {
  const classes = useStyles();
  return productCategories.map(({ category, href }) => {
    return (
      <Link
        className={classes.navlink}
        {...{
          to: href,
          style: { textDecoration: "none" },
          key: category,
        }}
      >
        <MenuItem className={classes.categorylink}>{category}</MenuItem>
      </Link>
    );
  });
};

export default NavLinks;
