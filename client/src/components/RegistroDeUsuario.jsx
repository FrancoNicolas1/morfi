import React, { useState } from 'react';

const RegisterForm = () => {
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

    // Enviar la información del formulario al servidor aquí
  }

  const { username, email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <label>
       Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
       Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Check in</button>
    </form>
  );
};

export default RegisterForm;
