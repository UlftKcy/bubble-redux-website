import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import SearchBar from "./SearchBar";
import HeaderListBasket from "./HeaderListBasket";
import { Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#ffff",
    color: theme.palette.primary.main,
    padding: "15px 10px",
  },
  toolbar:{
      display: "flex",
      justifyContent:"space-between",
      width:"100%"
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
          <Box>
            <Brand />
          </Box>
          <Box>
            <SearchBar />
          </Box>
          <Box>
            <HeaderActions />
          </Box>
          <Box>
            <HeaderListBasket />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
