import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
//import { allCategories } from '../../redux/actions';
import { useState } from 'react';
import { allRestaurants, getAllCategories, createRestaurant } from '../../redux/actions';
import validate from './Validation';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const ContainerPadre = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background-image: url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345),
    url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-others.jpg?quality=100&width=1345);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container1 = styled.div`
  height: 70%;
  width: 100%;
  background-color: #ece8dd;
  border-radius: 5px;
  padding: 25px 30px;
  margin: 5px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const Form = styled.form``;
const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const InputBox = styled.div`
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
`;
const Detail2 = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 16px;
`;
const Select = styled.select`
  margin-left: 10px;
`;

const Container2 = styled.div`
  height: 90%;
  width: 100%;

  padding: 25px 30px;
`;
const TitleContainer2 = styled.div``;
const Text = styled.div`
  display: flex;
  width: 22px;
  color: white;
`;
const Text2 = styled.div`
  color: white;
`;
const Text3 = styled.div`
  display: flex;
  color: white;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 100px;
  border: 2px solid #ccc;
  cursor: pointer;
`;
export const BtnBack = styled(Link)`
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
const Label =styled.label`
color:red;
`
const Select1=styled.input`

`

export function FormRestaurant() {
  /////////////////////////////// TRAYENDO EL ESTADO/////////////////////////////
  const history = useHistory()
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories) 
  const restaurantCreate = useSelector((state)=> state.restaurantProducts)
  const user = useSelector((state) => state.user)
  const idUser =user[0].id
  const restaurants = useSelector((state) => state.allRestaurants) 
 
  useEffect(() => {
     dispatch(getAllCategories()) 
     dispatch(allRestaurants())
  }, []);
  /////////////////////////////////SETEAR EL ESTADO //////////////////////////////////
  const [error, setError] = useState({});
  const [restaurant, setRestaurant] = useState({
    name:"",
    photo:"",
    categories:[],
    descriptions:"",
    reviews:[1,2,3,4,5]
  }); 
console.log(restaurant)
  const handleChange=(e)=>{
    e.preventDefault()
    setRestaurant({
        ...restaurant,
        [e.target.name]:e.target.value
    })
    setError(validate({
      ...restaurant,
      [e.target.name]:e.target.value
  }))
}  

const handleCategories=(e)=>{
  e.preventDefault()
  setRestaurant({
      ...restaurant,
      categories:[...new Set([...restaurant.categories,e.target.value])]
  })
}
const handleDelete=(e)=>{
  setRestaurant({
      ...restaurant,
      categories: restaurant.categories.filter((catego)=> catego !== e)
  })
}

const uploadImage = async (e) => {
  const files = e.target.files
  const data = new FormData()
  data.append("file", files[0])
  data.append("upload_preset", "vmfhvx1d")
  const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlibclk9r/upload",
      {
          method: "POST",
          body:data,
      })
     const file = await res.json()
     console.log(file.secure_url)
     const dataFinal =file.secure_url
     setRestaurant({
      ...restaurant,
      photo: dataFinal
  })
}

const handleSubmit=(e)=>{
  e.preventDefault()
  let filterByRestaurant= restaurants.filter((e)=>e.name === restaurant.name.toLocaleLowerCase())
  if(filterByRestaurant.length){
    swal({
      title: "Ese nombre ya existe...",
      text: "Cliclea para continuar...",
      icon: "warning",
    });
  }       
  else if(Object.values(error).length > 0){
    swal({
      title: "Llene todos los campos para crear su restaurante...",
      text: "Cliclea para continuar...",
      icon: "warning",
    });
  }else if(restaurant.name === ""){
    swal({
      title: "Llene todos los campos porfavor...",
      text: "Cliclea para continuar...",
      icon: "warning",
    });
  }else {
      dispatch(createRestaurant(restaurant,idUser))
  }
}


  return (
    <>
      <ContainerPadre>
        <Container2>
          <TitleContainer2>
          <BtnBack className="btn-back" to={'/'}>
              <FaArrowLeft fontSize={20} />
            </BtnBack>
            <Text>
              <h1>
                Empieza a vender en la app líder en delivery online de
                Latinoamérica
              </h1>
            </Text>
            <Text2>
              <p>→ El mejor canal de ventas para tu local</p>
              <p>→ En el bolsillo de millones de usuarios</p>
              <p>→ El sistema de entrega más avanzado</p>
              <p>→ Todo tu menú online y autogestionable</p>
            </Text2>
            <Text3>
              <h1>¡Registra tu local ahora mismo!</h1>
            </Text3>
          </TitleContainer2>
        </Container2>
        <Container1>
          <Title>Registra tu local</Title>
          <Form onSubmit={handleSubmit}>
            <Detail>
              <InputBox>
                <Detail2>Nombre del local</Detail2>
                <Input placeholder="Ingrese el nombre..." type="text" name="name"  onChange={handleChange} />
                {error.name && (<Label>{error.name}</Label>)}
              </InputBox>
              <InputBox>
                <Detail2>Tipo de Negocio</Detail2>
                <Select onChange={handleCategories}>
                   {categories?.map((category) => {
                    return <option value={category.name} name=" category">{category}</option>;
                  })} 
                </Select>
                {restaurant.category?.map((e)=>{
            return(
                <>
                <label>{e}</label>
                <button type="button" onClick={()=>handleDelete(e)}>x</button>
                </>
            )
        })}
              </InputBox>
      
                <Detail2>Imagen del Local</Detail2>
                
                <Select1 type={"file"}
                name={"file"}
                onChange={uploadImage}/>
             
      
              <InputBox>
                <Detail2>Descripción</Detail2>
                <Input placeholder="Ingrese descripcion del comercio..." type="text" name="descriptions" onChange={handleChange}/>
               
              </InputBox>
            </Detail>
            {restaurantCreate.length?( <NavLink to={"productform"}>
          <button> productos</button>   
          </NavLink>):(<> <Button type='submit'>Registrar</Button></>) }
          </Form>

         
        </Container1>
      </ContainerPadre>
    </>
  );
}
