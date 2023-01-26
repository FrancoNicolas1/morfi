import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import { Button } from "../../Css/CssRegistro";
import { postUser } from "../../redux/actions";
import validateSingUp from "../ErrorSignup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ff613c;
  align-items: center;
`;
const Label2 = styled.label`
  color: black;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;
const InfoGoogleCliente = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    surname: "",
    user_mail: user[0]?.email,
    password: "",
    phone: "",
    identification: "",
    postalCode: "",
    street_name: "",
    street_number: "",
  });
  console.log(state, "que esta mandando");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(error).length > 0) {
      swal({
        title: "Porfavor ingrese datos para continuar",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else {
      console.log(state, "el state que mando y me estoy por despachar");
      dispatch(postUser(state));
      history.push("/checkout");
    }
  };

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

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ padding: "1vw" }}>
          Para continuar con tu compra por favor completá los siguientes datos:
        </h2>
        <Label>
          Nombre:
          <input
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
            type="text"
            name="surname"
            onChange={handleChange}
          />
          {error.surname && <Label2>{error.surname}</Label2>}
        </Label>

        <br />
        <Label>
          Contraseña:
          <input
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
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
            style={{ borderColor: "white", width: "20vw" }}
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
          <Button
            disabled={
              state.name === "" ||
              state.surname === "" ||
              state.user_mail === "" ||
              state.password === "" ||
              state.phone === "" ||
              state.identification === "" ||
              state.postalCode === "" ||
              state.street_name === "" ||
              state.street_number === ""
                ? true
                : false
            }
            style={{
              opacity:
                state.name === "" ||
                state.surname === "" ||
                state.user_mail === "" ||
                state.password === "" ||
                state.phone === "" ||
                state.identification === "" ||
                state.postalCode === "" ||
                state.street_name === "" ||
                state.street_number === ""
                  ? 0.6
                  : 1,
            }}
            type="submit"
          >
            Continuar
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default InfoGoogleCliente;
