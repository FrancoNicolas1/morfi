import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Label, Button1 } from '../Css/CssRegistro';
import { postUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import GoogleAuth from './GoogleAuth/GoogleAuth';

const RegisterForm = (props) => {
  const history= useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    name:"", 
    user_mail:"",
    password:''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  const { name, user_mail, password } = state;

  const handleSubmit=(e)=>{
    e.preventDefault()
   
        dispatch(postUser(state))
        alert ("creado")
    
        // history.push("/home")
    
}

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Button1 onClick={()=>{props.setAbrir1(false)}}>X</Button1>
      <Label>
       Username:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
         {error && <p>{error}</p>}
      </Label>
      <br />
      <Label>
        Email:
        <input
          type="email"
          name="user_mail"
          value={user_mail}
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
         <GoogleAuth/>
    </Form>
    
    </>
  );
};

export default RegisterForm;
