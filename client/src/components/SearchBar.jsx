import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Button, Form, Input, Label} from "../Css/CssSearch"
import { searchRestaurant } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const restaurant=useSelector(state=>state.allRestaurants)
  console.log(restaurant)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchRestaurant(searchInput));
    setSearchInput(""); //limpia el estado local mediante el value del imput
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Búsqueda:</Label>
      <Input
        type="search"
        value={searchInput}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={(e) => handleSubmit(e)}>Búscar</Button>
    </Form>
  );
};

export default SearchBar;