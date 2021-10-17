import { Box, Avatar, Link } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useBrandStyles = makeStyles((theme) => ({
  brand: {
    display: "flex",
    justifyContent:"center",
    alignSelf:"center",
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
}));
export default function Brand() {
  const classes = useBrandStyles();
  const history = useHistory();
  return (
    <Link onClick={()=>history.push("/")} className={classes.brand} variant="h4" wrap component="div">
      <Avatar alt="logo" src={logo} />
      <Box sx={{ fontWeight: "bold", alignSelf: "center" }}>BUBBLE</Box>
    </Link>
  );
}
