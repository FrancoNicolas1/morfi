import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { deleteRestaurantForId, updateProfileImage, updateProfileUser } from "../../redux/actions";
import styled from "styled-components"
import swal from "sweetalert"
import { Link } from 'react-router-dom';
import "./UserProfile.css"
import validateProfile from "./ErrorUserProfile";
import Navbar from "../Navbar";



export default function UserProfile() {
  const dispatch = useDispatch();
  const userArray = useSelector((state) => state.user);
  console.log(userArray);
  const userRestaurant = userArray[0].Restaurants?.map((res) => res);
  console.log(userRestaurant);
  const users = useSelector((state) => state.allUsers);
  const [error, setError] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const idUser = userArray[0].id;
  console.log("🚀 ~ file: UserProfile.jsx:26 ~ UserProfile ~ idUser", idUser)


    const [user, setUser] = useState({  
      name:"",
       user_mail:"",
        password:"",
        surname:"",
      phone:"",
      identification:"",
      postalCode:"",
      street_name:"",
      street_number:""
    })
    const updateUser = (e)=>{
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        setError(validateProfile({
          ...user,
          [e.target.name]:e.target.value
      }))
          }
       
    const submitUserUpdate = (e) =>{
        e.preventDefault()
        if(Object.values(error).length > 0){
          swal({
            title: "Llene todos los campos para crear su restaurante...",
            text: "Cliclea para continuar...",
            icon: "warning",
          });
        }else if(user.name === ""){
          swal({
            title: "Llene todos los campos porfavor...",
            text: "Cliclea para continuar...",
            icon: "warning",
          });
        }
          else{
        dispatch(updateProfileUser(idUser,user))
       
        swal({
            title: "Se actualizo con exito tu perfil!",
            text: "Cliclea para continuar...",
            icon: "success",
          });
          }
        }
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "vmfhvx1d")
        setLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dlibclk9r/upload",
            {
                method: "POST",
                body:data,
            })
           const file = await res.json()
           console.log(file.secure_url)
           const dataFinal =file.secure_url
           console.log("🚀 ~ file: UserProfile.jsx:93 ~ uploadImage ~ dataFinal", dataFinal)
           dispatch(updateProfileImage(idUser,dataFinal))
           swal({
            title: "Se actualizo su foto de perfil!",
            text: "Cliclea para continuar...",
            icon: "success",
          });
    }
    return(
    <>
<Navbar/>
<div className="padre">
    <div class="container1">
      <div class="left box-primary">
        <img class="image" src={userArray[0].photo} alt="" />
        <h3 class="username text-center">{userArray[0].name}</h3>
        <h3 class="username text-center">{ userArray[0].surname}</h3>
        <p>Correo:{userArray[0].user_mail}</p>
        <p>Telefono:{userArray[0].phone}</p>
        <p>Dni:{userArray[0].identification}</p>
        <p>Codigo Postal:{userArray[0].postalCode}</p>
        <p>Direccion:{userArray[0].street_name}</p>
        <p>Calle:{userArray[0].street_number}</p>
        <input 
        className="select"
        type={"file"}
        name={"file"}
        onChange={uploadImage}/>
          <h3 class="username text-center">Mis restaurantes</h3>
        {userRestaurant && userRestaurant.length > 0 ?
  userRestaurant.map((res) => {
    return(
      <>
        <div className="restaurante">
          <p>Nombre:{res.name}</p>
          <img src={res.photo}/>
        </div>
        <button  class="btn btn-danger" onClick={() =>dispatch(deleteRestaurantForId(res.id, idUser))}>Eliminar</button>
      </>
    )
  }) :  <h3 class="username text-center">Usted por el momento no tiene restaurantes publicados</h3>
}
      </div>
     
      <div class="right tab-content">
        <form onSubmit={submitUserUpdate} class="form-horizontal">
          <div class="form-group">
            <label  class="col-sm-2 control-label">Nombre</label>
            <div class="col-sm-10">
              <input  
              class="form-control"
              name={"name"}
              onChange={updateUser}
              placeholder="Nombre"/>
              {error.name && (<label className="error">{error.name}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Apellido</label>
            <div class="col-sm-10">
              <input 
              type="text"
              class="form-control"  
              placeholder="Apellido"
              name={"surname"}
              onChange={updateUser}/>
              {error.surname && (<label className="error">{error.surname}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Correo Electronico</label>
            <div class="col-sm-10">
              <input 
              type="text"
              class="form-control"  
              placeholder="Correo electronico"
              name={"user_mail"}
              onChange={updateUser}/>
              {error.user_mail && (<label className="error">{error.user_mail}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Contraseña</label>
            <div class="col-sm-10">
              <input 
              type="password" 
              class="form-control" 
              placeholder="Contraseña"
              name={"password"}
              onChange={updateUser}/>
              {error.password && (<label className="error">{error.password}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Telefono</label>
            <div class="col-sm-10">
              <input 
              type="number" 
              class="form-control"  
              placeholder="Telefono"
              name={"phone"}
              onChange={updateUser}/>
               {error.phone && (<label className="error">{error.phone}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Dni</label>
            <div class="col-sm-10">
              <input 
              class="form-control" 
              placeholder="Dni"
              name={"identification"}
              onChange={updateUser}/>
              {error.identification && (<label className="error">{error.identification}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Codigo Postal</label>
            <div class="col-sm-10">
              <input 
              type="number" 
              class="form-control"  
              placeholder="Codigo Postal"
              name={"postalCode"}
              onChange={updateUser}/>
               {error.postalCode && (<label className="error">{error.postalCode}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Direccion/Calle</label>
            <div class="col-sm-10">
              <input 
              type="text" 
              class="form-control" 
              placeholder="Direccion/Calle"
              name={"street_name"}
              onChange={updateUser}/>
              {error.street_name && (<label className="error">{error.street_name}</label>)}
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-2 control-label">Numero de calle</label>
            <div class="col-sm-10">
              <input 
              type="number" 
              class="form-control" 
              placeholder="Numero de calle"
              name={"street_number"}
              onChange={updateUser}/>
              {error.street_number && (<label className="error">{error.street_number}</label>)}
            </div>
          </div>
          
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-danger">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
 
        {/* <Box1>
            <Form onSubmit={submitUserUpdate}>
                <h1>Tu Perfil</h1>
      <Title>Name:</Title>
        <Input
        type={"text"}
        name={"name"}
        onChange={updateUser}/>
         <Title>User_mail:</Title>
        
         <Input
        type={"text"}
        name={"user_mail"}
        onChange={updateUser}
        />
          
         <Title>Password:</Title>
=======
  const [user, setUser] = useState({
    name: "",
    user_mail: "",
    password: "",
  });

  const updateUser = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserUpdate = (e) => {
    e.preventDefault();
    let reg_password =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let filterUserName = users.filter((e) => e.name === user.name);
    let filterUserEmail = users.filter((e) => e.user_mail === user.user_mail);
    if (filterUserName.length) {
      swal({
        title: "Ese nombre de usuario ya existe!",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else if (filterUserEmail.length) {
      swal({
        title: "Ese email ya existe!",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else if (!reg_password.test(user.user_mail)) {
      swal({
        title: "Ingrese un mail valido",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else {
      dispatch(updateProfileUser(idUser, user));
      swal({
        title: "Se actualizo con exito tu perfil!",
        text: "Clickea para continuar...",
        icon: "success",
      });
    }
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vmfhvx1d");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlibclk9r/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url);
    const dataFinal = file.secure_url;
    dispatch(updateProfileImage(idUser, dataFinal));
    swal({
      title: "Se actualizo su foto de perfil!",
      text: "Clickea para continuar...",
      icon: "success",
    });
  };
  return (
    <>
      <Container>
        <Box1>
          <Form onSubmit={submitUserUpdate}>
            <h1>Tu Perfil</h1>
            <Title>Name:</Title>
            <Input type={"text"} name={"name"} onChange={updateUser} />
            <Title>User_mail:</Title>
>>>>>>> 8ad91ee6d7c4a8be79ba0926bb73659ac1e818a1

            <Input type={"text"} name={"user_mail"} onChange={updateUser} />

            <Title>Password:</Title>

            <Input type={"text"} name={"password"} onChange={updateUser} />

            <Button type="submit">Modificar</Button>
          </Form>
          <Select type={"file"} name={"file"} onChange={uploadImage} />
        </Box1>
        <Box2>
          {userArray?.map((e) => {
            return (
              <>
                <ImageUpdate src={e.photo} />
              </>
            );
          })}
          {userArray?.map((user) => {
            return (
              <>
                <h4>Name</h4>
                <p>{user.name}</p>
                <h4>Password</h4>
                <P>{user.password}</P>
                <h4>Mail</h4>
                <p>{user.user_mail}</p>
              </>
            );
          })}
        </Box2>
        <Box3>
          <h1>Tus Restaurantes</h1>

<<<<<<< HEAD
        </Box3> */}

  
    </>)
}
