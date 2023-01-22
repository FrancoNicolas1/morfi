import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Label, Button1 } from "../Css/CssRegistro";
import { postUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";

const RegisterForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    name: "",
    user_mail: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (input.name && input.user_mail && input.password) {
      e.preventDefault();
      dispatch(postUser(input));
      alert("se creo la receta", input);
      setInput({ name: "", user_mail: "", password: "" });
    } else {
      alert("completa todos los campos");
    }
    // e.preventDefault();
    // let error = null;
    // if (!input.name || !input.user_mail || !input.password) {
    //   error = "Por favor complete todos los campos.";
    // }
    // if (!error) {
    //   dispatch(postUser(input));
    //   alert("creado");
    // } else {
    //   setError(error);
    // }
    // history.push("/home")
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
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          {error && <p>{error}</p>}
        </Label>
        <br />
        <Label>
          Email:
          <input
            type="email"
            name="user_mail"
            value={input.user_mail}
            onChange={(e) => handleChange(e)}
          />
          {error && <p>{error}</p>}
        </Label>
        <br />
        <Label>
          Password:
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
          {error && <p>{error}</p>}
        </Label>
        <br />
        {isLoading ? <p>Loading...</p> : <Button type="submit">Sign in</Button>}
        <GoogleAuth />
      </Form>
    </>
  );
};

export default RegisterForm;
