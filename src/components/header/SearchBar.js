import React from 'react';

const SearchBar = () => {
  const BarStyling = {width:"35rem",background:"#F2F1F9",marginLeft:"10px",marginRight:"10px", border:"none", padding:"1.2rem"};
  return (
    <input 
     style={BarStyling}
     placeholder={"search products"}
    />
  );
}
export default SearchBar;