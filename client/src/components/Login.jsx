import React, { useEffect, useState } from "react";
import { Button1, Form, Button, Label } from "../Css/CssLogin";
import { Div } from "../Css/CssRegistro";
// import GoogleAuth from "../components/GoogleAuth/GoogleAuth"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, loginPostUser } from "../redux/actions";
import validate from "./ErrorLogin";
import styled from "styled-components";
import swal from "sweetalert";
import GoogleAuth from "./GoogleAuth/GoogleAuth";

const Label2 = styled.label`
  color: red;
`;

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  console.log("🚀 ~ file: Login.jsx:20 ~ LoginForm ~ users", users);
  const [error, setError] = useState({});
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const [user, setUser] = useState({
    user_mail: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(error).length > 0) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else if (user.user_mail === "" && user.password === "") {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else {
      dispatch(loginPostUser(user));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button1
        onClick={() => {
          props.setAbrir(false);
        }}
      >
        X
      </Button1>
      <Label for="input1">
        Nombre de usuario:
        <input
          style={{ borderColor: "white" }}
          id="input1"
          type="text"
          name="user_mail"
          onChange={handleChange}
        />
        {error.user_mail && <Label2>{error.user_mail}</Label2>}
      </Label>
      <br />
      <Label for="input2">
        Contraseña:
        <input
          style={{ borderColor: "white" }}
          id="input2"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {error.password && <Label2>{error.password}</Label2>}
      </Label>
      <br />
      <Button type="submit">Ingresar</Button>
      <GoogleAuth />
    </Form>
  );
};

export default LoginForm;
