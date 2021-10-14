import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import SearchBar from "./SearchBar";
import HeaderListBasket from "./HeaderListBasket";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#ffff",
    color: theme.palette.primary.main,
    padding: "10px",
    display: "grid",
    justifyContent: "space-between",
  },
  menu: {
    m: 1,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            className={classes.menu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Brand />
          <SearchBar />
          <HeaderActions />
          <HeaderListBasket />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
