import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import SearchBar from "./SearchBar";
import HeaderListBasket from "./HeaderListBasket";
import MenuItem from "@material-ui/core/MenuItem";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const productCategories = [
  {
    category: "Clothing",
    href: "/clothing",
  },
  {
    category: "Stickers",
    href: "/stickers",
  },
  {
    category: "Wall Art",
    href: "/wallart",
  },
  {
    category: "Home & Living",
    href: "/homeliving",
  },
  {
    category: "Office",
    href: "/office",
  },
  {
    category: "Gifts",
    href: "/gifts",
  },
  {
    category: "Accessories",
    href: "/accessories",
  },
  {
    category: "Kid & Babies",
    href: "/kidbabies",
  },
  {
    category: "Phone Cases",
    href: "/phonecases",
  },
];

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    color: theme.palette.primary.main,
    padding: 10,
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  menubutton: {
    fontWeight: 700,
    size: "18px",
  },
  drawercontainer: {
    padding: "20px 30px",
  },
  categoryItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "20px 40px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  categorylink: {
    color: theme.palette.primary.light,
    fontSize: "1.1rem",
    textTransform: "capitalize",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobilView: false,
    drawerOpen: false,
  });
  const { mobilView, drawerOpen } = state;

  // render on resize
  useEffect(() => {
    const handleResize = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobilView: true }))
        : setState((prevState) => ({ ...prevState, mobilView: false }));
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Box className={classes.navbar}>
          <Brand />
          <SearchBar />
          <HeaderActions />
          <HeaderListBasket />
        </Box>
        <Box className={classes.navbar}>
          <NavLinks productCategories={productCategories} />
        </Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          className={classes.menubutton}
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawercontainer}>{getDrawer()}</div>
        </Drawer>
        <Brand />
        <HeaderListBasket />
      </Toolbar>
    );
  };
  const getDrawer = () => {
    return productCategories.map(({ category, href }) => {
      return (
        <Link
          {...{
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: category,
          }}
        >
          <MenuItem className={classes.categoryItem}>
            <Button className={classes.categorylink}>{category}</Button>
            <KeyboardArrowRightIcon color="primary" />
          </MenuItem>
        </Link>
      );
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        {mobilView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Box>
  );
};

export default Header;
