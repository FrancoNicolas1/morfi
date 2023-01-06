import React, { useState } from "react";
import { Button1, Form, Button, Label } from "../Css/CssLogin";
import { Div } from "../Css/CssRegistro";

const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Enviar los datos de inicio de sesión al servidor
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setError(res.error);
          setIsLoading(false);
        } else {
          // Iniciar sesión exitosamente, redirigir al usuario a la página principal
          props.history.push("/");
        }
      });
  };

  return (
      <Form onSubmit={handleSubmit}>
      <Button1 onClick={()=>{props.setAbrir(false)}}>X</Button1>
        <Label for="input1">
          Username:
          <input 
          id="input1"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
           {error && <p>{error}</p>}
        </Label>
        <br />
        <Label for="input2">
          Password:
          <input
          id="input2"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
           {error && <p>{error}</p>}
        </Label>
        <br />
        {isLoading ? <p>Loading...</p> : <Button type="submit">Login</Button>}
      </Form>
  );
};

export default LoginForm;
