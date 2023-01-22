import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByCategories,
  order,
  rating,
  refreshPag,
} from "../../redux/actions";
// import SearchBar from "./SearchBar";
import { allRestaurants } from "../../redux/actions";

import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;

  margin-top: 10px;
`;
const Box = styled.div`
  height: 50px;
  width: 60%;
  margin: 0px auto;

  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const SelectBotton = styled.select`
  width: 150px;
  cursor: pointer;
  padding: 7px 10px;
  height: 42px;
  outline: 0;
  border: 0;
  border-radius: 0;
  background: #f0f0f0;
  color: #7b7b7b;
  font-size: 1em;
  color: #999;
  font-family: "Quicksand", sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: relative;
  transition: all 0.25s ease;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid #ccc;
  cursor: pointer;
`;

export default function Select() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  const restaurants = useSelector((state) => state.restaurant);
  const loading = useSelector((state) => state.loading);

  const handleRefresh = () => {
    dispatch(refreshPag());
    dispatch(allRestaurants());
  };

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
    dispatch(filterByCategories(event.target.value));
  }
  console.log(allCategories);
  return (
    <>
      <Container>
        <p>Nuestros Comercios</p>
        <Box>
          <SelectBotton onChange={(event) => handleFilter(event)}>
            <option value="default" disabled>
              Order Alphabetical
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </SelectBotton>
          <SelectBotton onChange={(event) => handleFilterRating(event)}>
            <option value="default" disabled>
              Order Rating
            </option>
            <option value="Rating+">Rating+</option>
            <option value="Rating-">Rating-</option>
          </SelectBotton>
          <SelectBotton
            id="categories"
            defaultValue="default"
            onChange={handleCategories}
          >
            <option value="default" disabled>
              Select Categories
            </option>
            <option value="All categories">All categories</option>
            {allCategories?.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </SelectBotton>
          <Button onClick={handleRefresh}>Reset</Button>
        </Box>
      </Container>

      {/* <Div>
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
                <option value={e.name}>{e.name}</option>
              ))}
            </Select>
        </Div> */}
    </>
  );
}
