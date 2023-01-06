import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
//import { allCategories } from '../../redux/actions';
import { useState } from 'react';

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

export function FormRestaurant() {
  /////////////////////////////// TRAYENDO EL ESTADO/////////////////////////////
  const dispatch = useDispatch();
  /* const categorys = useSelector((state) => state. allCategories) */
  useEffect(() => {
    /* dispatch(allCategories()) */
  }, []);
  /////////////////////////////////SETEAR EL ESTADO //////////////////////////////////
  /*   const [error, setError] = useState({});
  const [restaurant, setRestaurant] = useState({}); */
  return (
    <>
      <ContainerPadre>
        <Container2>
          <TitleContainer2>
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
          <Form>
            <Detail>
              <InputBox>
                <Detail2>Nombre del local</Detail2>
                <Input placeholder="Ingrese el nombre..." />
              </InputBox>
              <InputBox>
                <Detail2>Tipo de Negocio</Detail2>
                <Select>
                  {/* {[]?.map((category) => {
                    return <option>{category.name}</option>;
                  })} */}
                </Select>
              </InputBox>
              <InputBox>
                <Detail2>Sucursales</Detail2>
                <Input placeholder="Ingrese la cantidad..." />
              </InputBox>
              <InputBox>
                <Detail2>Nombre</Detail2>
                <Input placeholder="Ingrese nombre..." />
              </InputBox>
              <InputBox>
                <Detail2>Apellido</Detail2>
                <Input placeholder="Ingrese apellido..." />
              </InputBox>
              <InputBox>
                <Detail2>Teléfono de contacto</Detail2>
                <Input placeholder="Ingrese teléfono de contacto" />
              </InputBox>
              <InputBox>
                <Detail2>Correo electrónico</Detail2>
                <Input placeholder="nombre@mail.com" />
              </InputBox>
            </Detail>
            <Button>Registrar</Button>
          </Form>
        </Container1>
      </ContainerPadre>
    </>
  );
}
