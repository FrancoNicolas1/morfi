import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  /* border: solid red; */
  width: 100%;
  padding: 5%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  & .container-img-title {
    width: 50%;
    display: flex;
    flex-direction: column;

    gap: 1rem;
    & img {
      width: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  & .container-data-product {
    width: 50%;
    height: 100%;
    /* border: solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BtnBack = styled(Link)`
  padding: 10px;
  text-decoration: none;
  width: 5rem;
  margin-bottom: 1rem;
  outline: none;
  color: #1a120b;
  background-color: #ece8dd;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #1a120b; */
`;

export const CardDetail = (props) => {
  // const allRest= useSelector((state)=>state.allRestaurants)
  // const {name, id, photo, reviews, products, category, description, rating}= allRest
  return (
    <Container>
      <div className="container-img-title">
        <BtnBack className="btn-back" to={'/'}>
          <FaArrowLeft />
        </BtnBack>
        <h2>Nombre del Producto</h2>
        <img
          className="image-card"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
          alt=""
        />
      </div>
      <div className="container-data-product">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, atque?
        </p>
      </div>
    </Container>
  );
};
