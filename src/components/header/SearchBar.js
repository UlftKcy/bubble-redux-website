import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center",
  flexGrow: 1,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "5px",
  "&:active": {
    border: "3px solid",
    borderColor: theme.palette.primary.light,
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: ".3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
      height: "4ch",
    },
  },
}));

const SearchBar = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search designs and products"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};
export default SearchBar;
