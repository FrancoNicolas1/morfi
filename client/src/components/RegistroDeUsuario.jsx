import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Label, Button1 } from "../Css/CssRegistro";
import { allUsers, postUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import validateSingUp from "./ErrorSignup";
import styled from "styled-components";
import { useEffect } from "react";
const Label2 = styled.label`
  color: red;
`;
const RegisterForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  // console.log(users);
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    name: "",
    surname: "",
    user_mail: "",
    password: "",
    phone: "",
    identification: "",
    postalCode: "",
    street_name: "",
    street_number: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(allUsers());
  }, []);

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

    let filterUserEmail = users.filter((e) => e.user_mail === state.user_mail);
    // console.log(filterUserName)
    // console.log(filterUserEmail)
    if (Object.values(error).length > 0) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else if (
      state.name === "" &&
      state.surname === "" &&
      state.user_mail === "" &&
      state.password === "" &&
      state.phone === "" &&
      state.identification === "" &&
      state.postalCode === "" &&
      state.street_name === "" &&
      state.street_number === ""
    ) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Clickea para continuar...",
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
          Nombre:
          <input
            style={{ borderColor: "white" }}
            type="text"
            name="name"
            onChange={handleChange}
          />
          {error.name && <Label2>{error.name}</Label2>}
        </Label>
        <br />
        <Label>
          Apellido:
          <input
            style={{ borderColor: "white" }}
            type="text"
            name="surname"
            onChange={handleChange}
          />
          {error.surname && <Label2>{error.surname}</Label2>}
        </Label>
        <br />
        <Label>
          Email:
          <input
            style={{ borderColor: "white" }}
            type="email"
            name="user_mail"
            onChange={handleChange}
          />
          {error.user_mail && <Label2>{error.user_mail}</Label2>}
        </Label>
        <br />
        <Label>
          Contraseña:
          <input
            style={{ borderColor: "white" }}
            type="password"
            name="password"
            onChange={handleChange}
          />
          {error.password && <Label2>{error.password}</Label2>}
        </Label>
        <br />

        <Label>
          Telefono:
          <input
            style={{ borderColor: "white" }}
            type="number"
            name="phone"
            onChange={handleChange}
          />
          {error.phone && <Label2>{error.phone}</Label2>}
        </Label>
        <br />
        <Label>
          DNI de usuario:
          <input
            style={{ borderColor: "white" }}
            type="number"
            name="identification"
            onChange={handleChange}
          />
          {error.identification && <Label2>{error.identification}</Label2>}
        </Label>
        <br />
        <Label>
          Codigo Postal:
          <input
            style={{ borderColor: "white" }}
            type="number"
            name="postalCode"
            onChange={handleChange}
          />
          {error.postalCode && <Label2>{error.postalCode}</Label2>}
        </Label>
        <br />
        <Label>
          Nombre de calle:
          <input
            style={{ borderColor: "white" }}
            type="text"
            name="street_name"
            onChange={handleChange}
          />
          {error.street_name && <Label2>{error.street_name}</Label2>}
        </Label>
        <br />
        <Label>
          Numero de calle:
          <input
            style={{ borderColor: "white" }}
            type="number"
            name="street_number"
            onChange={handleChange}
          />
          {error.street_number && <Label2>{error.street_number}</Label2>}
        </Label>
        <br />
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <Button type="submit">Registrar</Button>
        )}
      </Form>
    </>
  );
};

export default RegisterForm;
