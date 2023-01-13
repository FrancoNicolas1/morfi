import React, { useEffect, useState } from "react";
import { Button1, Form, Button, Label } from "../Css/CssLogin";
import { Div } from "../Css/CssRegistro";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, loginPostUser } from "../redux/actions";

const LoginForm = (props) => {

const dispatch = useDispatch()
const users = useSelector(state => state.allUsers)
useEffect(()=>{
  dispatch(getAllUsers())
},[])
console.log(users)
const [user, setUser]= useState({
  user_mail:"",
  password:""
})
const handleChange=(e)=>{
e.preventDefault()
setUser({
  ...user,
  [e.target.name]:e.target.value
})
}
const handleSubmit=(e)=>{
  e.preventDefault()    
   dispatch(loginPostUser(user))
   console.log(user)
      alert ("ingresaste")
  
}

 
  return (
      <Form onSubmit={handleSubmit} >
      <Button1 onClick={()=>{props.setAbrir(false)}}>X</Button1>
        <Label for="input1">
          UserMail:
          <input 
          id="input1"
            type="text"
            name="user_mail"
            onChange={handleChange}
           
          />
           {/* {error && <p>{error}</p>} */}
        </Label>
        <br />
        <Label for="input2">
          Password:
          <input
          id="input2"
            type="password"
            name="password"
            onChange={handleChange}
          />
           {/* {error && <p>{error}</p>} */}
        </Label>
        <br />
        <Button type="submit">Login</Button>
        {/* <GoogleAuth/> */}
      </Form>
      
  );
};

export default LoginForm;
