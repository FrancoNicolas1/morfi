import React, { useState } from 'react';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Enviar los datos de inicio de sesión al servidor
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setError(res.error);
          setIsLoading(false);
        } else {
          // Iniciar sesión exitosamente, redirigir al usuario a la página principal
          props.history.push('/home');
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
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
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
}

export default LoginForm;

