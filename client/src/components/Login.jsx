import React, { useEffect, useState } from "react";
import { Button1, Form, Button, Label } from "../Css/CssLogin";
import { Div } from "../Css/CssRegistro";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";

const LoginForm = (props) => {
const dispatch = useDispatch()
const users = useSelector(state => state.allUsers)
useEffect(()=>{
  dispatch(getAllUsers())
},[])
console.log(users)

 
  return (
      <Form >
      <Button1 onClick={()=>{props.setAbrir(false)}}>X</Button1>
        <Label for="input1">
          Username:
          <input 
          id="input1"
            type="text"
            name="username"
     
           
          />
           {/* {error && <p>{error}</p>} */}
        </Label>
        <br />
        <Label for="input2">
          Password:
          <input
          id="input2"
            type="password"
         
            
          />
           {/* {error && <p>{error}</p>} */}
        </Label>
        <br />
        <Button type="submit">Login</Button>
        <GoogleAuth/>
      </Form>
      
  );
};

export default LoginForm;
