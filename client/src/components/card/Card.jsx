import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import restaurantPhoto from './pngwing.com.png';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  border: 1px solid #1a120b;
  text-decoration: none;
  transition: all 0.3s ease-in;
  color: #1a120b;
  border-radius: 0.5rem;
  outline: none;
  overflow: hidden;
  animation: fadeIn ease 0.9s;
  -webkit-animation: fadeIn ease 0.9s;
  -moz-animation: fadeIn ease 0.9s;
  -o-animation: fadeIn ease 0.9s;
  -ms-animation: fadeIn ease 0.9s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    color: #1a120b;
    opacity: 0.9;
    transform: scale(1.05);
  }
  & .image-card {
    width: 100%;
    height: 65%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  & .info-card {
    /* border: solid red; */
    padding: 0.2rem;
    background-color: #ece8dd;
  }
  & .data-restaurant {
    & .container-title-avatar {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.8rem;
      & .img-avatar {
        width: 2.5rem;
        height: 2rem;
        border-radius: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }

      & h3 {
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        margin: 0;
      }
    }

    & .container-hors {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .text-hors {
        display: flex;
        gap: 0.3rem;
        align-items: center;
        padding: 0.2rem 0;
      }
    }
    & .submit-free-text {
      font-weight: 600;
      padding: 0.2rem;
    }
    & .container-score {
      /* border: solid red; */
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 800;
    }
    & .container-star-icon {
      color: rgb(255, 174, 0);
      /* border: solid green; */
    }
  }
`;

export default function Card({
  name,
  id,
  photo,
  reviews,
  products,
  category,
  description,
  rating,
}) {
  return (
    <Container to={`/detail/${id}`}>
      <img className="image-card" src={photo} alt={name} />
      <div className="info-card">
        <div className="data-restaurant">
          <div className="container-title-avatar">
            <img className="img-avatar" src={photo} width="40" alt="" />
            <h3>{name}</h3>
          </div>
          <div className="container-hors">
            <p className="text-hors">
              <span>
                <FiClock fontSize={15} />
              </span>{' '}
              35-50 min
            </p>
            <p className="submit-free-text">Envio Gratis</p>
          </div>
          <p className="container-score">
            <span className="container-star-icon">
              <FaStar fontSize={15} />
            </span>
            <span>4.2</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
