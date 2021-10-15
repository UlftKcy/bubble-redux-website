import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import SearchBar from "./SearchBar";
import HeaderListBasket from "./HeaderListBasket";
import MenuItem from "@material-ui/core/MenuItem";
import { AppBar, Toolbar, IconButton, Drawer,Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

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
    category: "Masks",
    href: "/masks",
  },
  {
    category: "Phone Cases",
    href: "/phonecases",
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
    category: "Kid & Babies",
    href: "/kidbabies",
  },
  {
    category: "Accessories",
    href: "/accessories",
  },
  {
    category: "Stationery & Office",
    href: "/stationeryoffice",
  },
  {
    category: "Gifts",
    href: "/gifts",
  },
  {
    category: "Explore Designs",
    href: "/exploredesigns",
  },
];

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    color: theme.palette.primary.main,
    padding:10
  },
  toolbar: {
    display: "flex",
    flexDirection:"column",
    gap:20,
  },
  navbar:{
    display: "flex",
    justifyContent:"space-around",
    width: "100%",
  },
  menubutton: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  drawercontainer: {
    padding: "20px 50px",
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
      return window.innerWidth < 1100
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
        <SearchBar />
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
          <MenuItem>{category}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      {mobilView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default Header;
