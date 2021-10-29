import React, { useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CloseIcon from '@material-ui/icons/Close';
import { fetchFeaturedProduct } from "../../store/actions/fetchFeaturedProduct";
import { useSelector, useDispatch } from "react-redux";

const SearchWrapper = styled.div`
  align-self: center;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const SearchInput = styled.input`
  width: 25rem;
  padding: 15px 60px 15px 20px;
  border-radius: 3px;
  border: 1px solid #ddd;
  outline: none;
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 12px;
`;
const SearchResults = styled.div`
  margin-top: 5px;
  padding: 10px;
`;

const SearchBar = () => {
  const displayProducts = useSelector((state) => state.featured.featuredList);
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);
  const [enteredWord,setEnteredWord] = useState("")

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setEnteredWord(searchWord)
    console.log(enteredWord)
    const newFilter = displayProducts.filter((value) => {
      return value.name.toLowerCase().includes(searchWord);
    });
    if (searchWord === "") {
      setFilteredData([])
    }else{
      setFilteredData(newFilter)
    }
  };
  const clearInput = () => {
    setEnteredWord("")
    setFilteredData([])
  }

  return (
    <SearchWrapper>
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="search"
          onChange={handleFilter}
          value={enteredWord}
          onClick={() => dispatch(fetchFeaturedProduct())}
        />
        <SearchIcon>
          {filteredData.length === 0 ? (
          <SearchRoundedIcon />
          ):(
            <CloseIcon onClick={clearInput}/>
          )
        }
        </SearchIcon>
      </SearchBox>
      <SearchResults>
        {filteredData?.map((displayProduct, id) => {
          return (
              <p>
                <a href={`/featuredProducts/${id}`}>{displayProduct.name}</a>
              </p>
          );
        })}
      </SearchResults>
    </SearchWrapper>
  );
};
export default SearchBar;
