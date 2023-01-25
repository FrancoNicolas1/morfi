import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRestaurantForId,
  updateProfileImage,
  updateProfileUser,
} from "../../redux/actions";
import styled from "styled-components";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 625px;
  background-image: url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345),
    url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-others.jpg?quality=100&width=1345);
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Box1 = styled.div`
  width: 350px;
  height: 450px;
  background-color: white;
`;
const Box2 = styled.div`
  overflow: hidden;
  width: 300px;
  height: 450px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box3 = styled.div`
  width: 350px;
  height: 450px;
  background-color: white;
`;
const ImageUpdate = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid gray;
`;
const Form = styled.form`
  padding: 10px;
  margin: 0 auto;
  width: 300px;
  border-radius: 3px;
`;
const Input = styled.input`
  margin: 2px;
`;
const Title = styled.p``;
const Button = styled.button`
  margin-top: 10px;
`;
const Select = styled.input``;
const BtnBack = styled(Link)`
  padding: 10px;
  text-decoration: none;
  width: 5rem;
  margin: 1rem 0;
  outline: none;
  border: 1px solid #1a120b;
  background-color: #ffd15f;
  color: #1a120b;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #1a120b;
    opacity: 0.7;
  }
  /* border: 1px solid #1a120b; */
`;
const P = styled.p`
  background-color: blue;
`;
const Label2 = styled.label`
  color: red;
`;

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

          {userRestaurant?.map((res) => {
            return (
              <>
                <h1>{res.name}</h1>
                <p>{res.photo}</p>
                <button
                  onClick={() =>
                    dispatch(deleteRestaurantForId(res.id, idUser))
                  }
                >
                  Delete Restaurant
                </button>
              </>
            );
          })}
        </Box3>
      </Container>
      <BtnBack className="btn-back" to={"/"}></BtnBack>
    </>
  );
}
