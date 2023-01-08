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

export function FormRestaurant() {
  /////////////////////////////// TRAYENDO EL ESTADO/////////////////////////////
  const history = useHistory()
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories) 
  const restaurants = useSelector((state) => state.allRestaurants) 
  console.log(restaurants)
  useEffect(() => {
     dispatch(getAllCategories()) 
     dispatch(allRestaurants())
  }, []);
  /////////////////////////////////SETEAR EL ESTADO //////////////////////////////////
  const [error, setError] = useState({});
  const [restaurant, setRestaurant] = useState({
    name:"",
    photo:"",
    products:[],
    category:[],
    description:""
  }); 

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
      category:[...new Set([...restaurant.category,e.target.value])]
  })
}
const handleDelete=(e)=>{
  setRestaurant({
      ...restaurant,
      category: restaurant.category.filter((catego)=> catego !== e)
  })
}


const handleSubmit=(e)=>{
  e.preventDefault()
  let filterByRestaurant= restaurants.filter((e)=>e.name === restaurant.name.toLocaleLowerCase())
  // console.log(filterPokemon)
  if(filterByRestaurant.length){
      alert("Este pokemon ya existe")
  }       
  else if(Object.values(error).length > 0){
       alert ("Llene todos los campos para publicar su Local")
  }else if(restaurant.name === ""){
      alert("Debe llenar todos los campos")
  }else if(restaurant.category.length === 0 || restaurant.category.length > 2){
   alert("Debe tener alguna categoria y que no supere 2")
  }else {
      dispatch(createRestaurant(restaurant))
      alert ("Su local fue publicado con exito")
      history.push("/")
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
                    return <option value={category.name} name=" category">{category.name}</option>;
                  })} 
                </Select>
                {restaurant.category.map((e)=>{
            return(
                <>
                <label>{e}</label>
                <button type="button" onClick={()=>handleDelete(e)}>x</button>
                </>
            )
        })}
              </InputBox>
              <InputBox>
                <Detail2>Imagen del Local</Detail2>
                <Input placeholder="Ingrese la imagen..." type="text" name="photo" onChange={handleChange} />
                {error.photo && (<Label>{error.photo}</Label>)}
              </InputBox>
              <InputBox>
                <Detail2>Productos</Detail2>
                <Input placeholder="Ingrese productos..." type="text" name="products" onChange={handleChange} />
                {error.products && (<Label>{error.products}</Label>)}
              </InputBox>
              <InputBox>
                <Detail2>Descripción</Detail2>
                <Input placeholder="Ingrese descripcion del comercio..." type="text" name="description" onChange={handleChange}/>
                {error.description && (<Label>{error.description}</Label>)}
              </InputBox>
            </Detail>
            <Button type='submit'>Registrar</Button>
          </Form>
        </Container1>
      </ContainerPadre>
    </>
  );
}
