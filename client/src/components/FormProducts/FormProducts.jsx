import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../redux/actions";
import swal from "sweetalert";
import validate from "./ValidationProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./formProducts.css";

const Label = styled.label`
  color: red;
`;
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

export default function FormProducts() {
  const restaurant = useSelector((state) => state.restaurantProducts);
  const idRestaurant = restaurant[0].id;
  const history = useHistory();
  console.log(restaurant);
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [products, setProducts] = useState({
    name: "",
    photo: "",
    description: "",
    price: "",
    stock: "",
  });

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
        text: "Cliclea para continuar...",
        icon: "warning",
      });
    } else if (products.name === "") {
      swal({
        title: "Llene todos los campos porfavor...",
        text: "Cliclea para continuar...",
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

  return (
    <div className="app-form">
      <form onSubmit={handleSubmit} className="form">
        <label className="label-form">Nombre:</label>
        <input
          className="input-form"
          type="text"
          name="name"
          onChange={handleChange}
          value={products.name}
          placeholder="Agrege el nombre del producto..."
        />
        {error.name && <Label>{error.name}</Label>}
        <label className="label-form">Foto:</label>
        <input
          className="input-form"
          type={"file"}
          name={"file"}
          onChange={uploadImage}
          placeholder="Agrege una Foto de su producto...."
        />

        <label className="label-form">Descripcion:</label>
        <input
          className="input-form"
          type="textarea"
          name="description"
          onChange={handleChange}
          value={products.description}
          placeholder="Agrege una Descripcion..."
        />
        {error.description && <Label>{error.description}</Label>}
        <label className="label-form">Precio:</label>
        <input
          className="input-form"
          type="number"
          name="price"
          onChange={handleChange}
          value={products.price}
        />
        {error.price && <Label>{error.price}</Label>}
        <label className="label-form">Stock:</label>
        <input
          type="number"
          name="stock"
          onChange={handleChange}
          value={products.stock}
          placeholder="Agrege la cantidad de sus productos..."
        />
        {error.stock && <Label>{error.stock}</Label>}
        <button type="submit">Crear Producto</button>
      </form>
      <BtnBack className="btn-back" to={"/"}>
        Inicio
      </BtnBack>
    </div>
  );
}
