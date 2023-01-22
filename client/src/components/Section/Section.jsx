import React from "react";
import {
  Header,
  Description,
  BoxForm,
  BoxTitle,
  Input,
  Button,
} from "./section.styled";
import { useDispatch, useSelector } from "react-redux";
import { searchRestaurant } from "../../redux/actions";
//   import { useHistory } from 'react-router-dom';
import { useState } from "react";

export default function Section() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const restaurant = useSelector((state) => state.allRestaurants);
  // console.log(restaurant)

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
    <>
      <Header>
        <BoxTitle>
          <h1>Bienvenidos</h1>
        </BoxTitle>
        <Description>
          <BoxForm>
            <Input
              placeholder="Buscar..."
              type="search"
              value={searchInput}
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={(e) => handleSubmit(e)}>Buscar</Button>
          </BoxForm>
        </Description>
      </Header>
    </>
  );
}
