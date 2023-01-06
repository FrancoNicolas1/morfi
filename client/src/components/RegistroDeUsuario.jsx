import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Label, Button1 } from '../Css/CssRegistro';

const RegisterForm = (props) => {
  const history= useHistory()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch("/register", {
      method: "POST",
      body: JSON.stringify({
        username, email, password
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setError(res.error);
          setIsLoading(false);
        } else {
          // Iniciar sesión exitosamente, redirigir al usuario a la página principal
          history.push("/");
        }
      });

    // Enviar la información del formulario al servidor
  }

  const { username, email, password } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <Button1 onClick={()=>{props.setAbrir1(false)}}>X</Button1>
      <Label>
       Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
         {error && <p>{error}</p>}
      </Label>
      <br />
      <Label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
         {error && <p>{error}</p>}
      </Label>
      <br />
      <Label>
       Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
         {error && <p>{error}</p>}
      </Label>
      <br />
      {isLoading ? <p>Loading...</p> :
      <Button type="submit">Sign in</Button>}
    </Form>
  );
};

export default RegisterForm;
