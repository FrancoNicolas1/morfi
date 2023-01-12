import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../../../../api/src/controllers/products.controller';

export function FormProducts() {
  const history = useHistory()
  const dispatch = useDispatch();
  
  const [products, setProducts] = useState({
    name:"",
    photo:"",
    description:"",
    price:"",
  }); 
  
  const handleChange=(e)=>{
    e.preventDefault()
    setProducts({
        ...products,
        [e.target.name]:e.target.value
    })

    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(createProduct(products));
      alert("Producto Creado");
      setProducts({
      name:"",
      photo:"",
      description:"",
      price:"",
      restaurantId:"",
      stock:"",
})
        
    }

return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type= "text" onChange={handleChange}/>
      <label>Photo</label>
      <input type= "text" onChange={handleChange}/>
      <label>Description</label>
      <input type= "textarea" onChange={handleChange}/>
      <label>Price</label>
      <input type= "number" onChange={handleChange}/>
      <button type="submit">Crear Producto</button>
    </form>
  );
}
}