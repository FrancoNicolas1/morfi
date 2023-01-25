import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../redux/actions";
import swal from "sweetalert";
import validate from "./ValidationProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../Css/CssRegistro";
import { FaArrowLeft } from "react-icons/fa";

export const BtnBack = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  text-decoration: none;
  width: 5rem;
  height: 3rem;
  margin: 1rem;
  outline: none;
  border: 0.1px solid white;
  background-color: #fd7e14;
  color: white;
  border-radius: 8px;

  &:hover {
    color: white;
    border: 1px solid yellow;
    transition: 0.5s ease-in-out;
    opacity: 0.7;
  }
  /* border: 1px solid #1a120b; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: orange;
  align-items: center;
  height: 100vh;
`;
const Form = styled.form`
  display: flex;
  height: 60vh;
  padding: 1vw;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: #ff613c;
  align-items: center;
`;
const Label2 = styled.label`
  color: black;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
`;
export default function FormProducts() {
  const restaurant = useSelector((state) => state.restaurantProducts);
  const idRestaurant = restaurant[0].id;
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [products, setProducts] = useState({
    name: "",
    photo: "",
    description: "",
    price: "",
    stock: "",
  });

  console.log(products);
  const handleChange = (e) => {
    e.preventDefault();
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...products,
        [e.target.name]: e.target.value,
      })
    );
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vmfhvx1d");
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
    setProducts({
      ...products,
      photo: dataFinal,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: products.name,
      photo: products.photo,
      description: products.description,
      price: products.price,
      stock: products.stock,
      restaurantId: idRestaurant,
    };
    if (Object.values(error).length > 0) {
      swal({
        title: "Llene todos los campos para crear su restaurante...",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else if (products.name === "") {
      swal({
        title: "Llene todos los campos porfavor...",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    } else {
      dispatch(createProduct(data, idRestaurant));
      setProducts({
        name: "",
        photo: "",
        description: "",
        price: "",
        stock: "",
      });
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <Container>
      <BtnBack className="btn-back" onClick={(e) => handleBack(e)}>
        <FaArrowLeft fontSize={20} />
      </BtnBack>
      <Form style={{}} onSubmit={handleSubmit}>
        <Label>Nombre</Label>
        <input
          style={{ borderColor: "white", width: "20vw" }}
          type="text"
          name="name"
          onChange={handleChange}
          value={products.name}
        />
        {error.name && <Label2>{error.name}</Label2>}
        <Label>Foto</Label>
        <input
          style={{
            borderColor: "white",
            width: "20vw",
            flexDirection: "row",
            display: "flex",
          }}
          type={"file"}
          name={"file"}
          onChange={uploadImage}
        />

        <Label>Descripción</Label>
        <input
          style={{ borderColor: "white", width: "20vw" }}
          type="textarea"
          name="description"
          onChange={handleChange}
          value={products.description}
        />
        {error.description && <Label2>{error.description}</Label2>}
        <Label>Precio</Label>
        <input
          style={{ borderColor: "white", width: "20vw" }}
          type="number"
          name="price"
          onChange={handleChange}
          value={products.price}
        />
        {error.price && <Label2>{error.price}</Label2>}
        <Label>Stock</Label>
        <input
          style={{ borderColor: "white", width: "20vw" }}
          type="number"
          name="stock"
          onChange={handleChange}
          value={products.stock}
        />
        {error.stock && <Label2>{error.stock}</Label2>}
        <Button type="submit">Crear Producto</Button>
      </Form>
    </Container>
  );
}
