import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Label, Button1 } from "../Css/CssRegistro";
import { postUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import swal from "sweetalert";
import validateSingUp from "./ErrorSignup";
import styled from "styled-components";
const Label2 = styled.label`
  color: red;
`;
const RegisterForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  console.log(users);
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    name: "",
    user_mail: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setError(
      validateSingUp({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filterUserName = users.filter((e) => e.name === state.name);
    let filterUserEmail = users.filter((e) => e.user_mail === state.user_mail);

    if (filterUserName.length) {
      swal({
        title: "Ese nombre de usuario ya existe!",
        text: "Cliclea para continuar...",
        icon: "warning",
      });
    } else if (filterUserEmail.length) {
      swal({
        title: "Ese email ya existe!",
        text: "Cliclea para continuar...",
        icon: "warning",
      });
    } else if (Object.values(error).length > 0) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Cliclea para continuar...",
        icon: "warning",
      });
    } else if (
      state.user_mail === "" &&
      state.password === "" &&
      state.name === ""
    ) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Cliclea para continuar...",
        icon: "warning",
      });
    } else {
      dispatch(postUser(state));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Button1
          onClick={() => {
            props.setAbrir1(false);
          }}
        >
          X
        </Button1>
        <Label>
          Username:
          <input type="text" name="name" onChange={handleChange} />
          {error.name && <Label2>{error.name}</Label2>}
        </Label>
        <br />
        <Label>
          Email:
          <input type="email" name="user_mail" onChange={handleChange} />
          {error.user_mail && <Label2>{error.user_mail}</Label2>}
        </Label>
        <br />
        <Label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
          {error.password && <Label2>{error.password}</Label2>}
        </Label>
        <br />
        {isLoading ? <p>Loading...</p> : <Button type="submit">Sign in</Button>}
        {/* <GoogleAuth/> */}
      </Form>
    </>
  );
};

export default RegisterForm;
