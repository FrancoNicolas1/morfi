import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../redux/actions";

// import { createProduct } from '../../../../api/src/controllers/products.controller';
export default function FormProducts() {
  const restaurant = useSelector((state) => state.restaurantProducts);
  const idRestaurant = restaurant[0].id;
  console.log(idRestaurant);
  const history = useHistory();
  const dispatch = useDispatch();

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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(products));
    alert("Producto Creado");
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} />
      <label>Photo</label>
      <input type="text" name="photo" onChange={handleChange} />
      <label>Description</label>
      <input type="textarea" name="description" onChange={handleChange} />
      <label>Price</label>
      <input type="number" name="price" onChange={handleChange} />
      <label>Stock</label>
      <input type="number" name="stock" onChange={handleChange} />
      <button type="submit">Crear Producto</button>
    </form>
  );
}
