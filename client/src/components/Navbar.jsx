import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Button, Button1, Div, Select } from "../Css/CssNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, order, rating } from "../redux/actions";


const Navbar = (props) => {
const dispatch= useDispatch()
const allCategories = useSelector((state) => state.categories);

  function handleFilter(event) {
    event.preventDefault();
    dispatch(order(event.target.value));
  }
  function handleFilterRating(event) {
    event.preventDefault();
    dispatch(rating(event.target.value));
  }
 
  function handleCategories(event) {
    event.preventDefault();
    dispatch(getAllCategories(event.target.value));
  }
  return (
    <nav>
      <div>
        <SearchBar />
      </div>
      <div>
        <Button1
          onClick={() => {
            props.setAbrir(true);
            props.setAbrir1(false);
          }}
        >
          Login
        </Button1>
        <Button
          onClick={() => {
            props.setAbrir1(true);
            props.setAbrir(false);
          }}
        >
          Sign Up
        </Button>
        <Div>
          <Select
            defaultValue="default"
            onChange={(event) => handleFilter(event)}
          >
            <option value="default" disabled>
              Order Alphabetical
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </Select>
          <Select
            defaultValue="default"
            onChange={(event) => handleFilterRating(event)}
          >
           <option value="default" disabled>
              Order Rating
            </option>
            <option value="Rating+">Rating+</option>
            <option value="Rating-">Rating-</option>
          </Select>
            <Select
              id="categories"
              defaultValue="default"
              onChange={handleCategories}
            >
              <option value="default" disabled>
                Select Categories
              </option>
              {allCategories?.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </Select>
        </Div>
      </div>
    </nav>
  );
};

export default Navbar;
