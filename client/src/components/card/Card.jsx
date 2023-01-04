import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* border: solid brown; */
  background-color: #ffffffa7;
  & .image-card {
    width: 100%;
    height: 70%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  & .info-card {
    /* border: solid red; */
  }
  & .data-restaurant {
    & h3 {
      font-size: 16px;
    }
    & .container-hors {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default function Card() {
  return (
    <>
      <Container>
        <img
          className="image-card"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
          alt=""
        />
        <div className="info-card">
          <img src="./pngwing.com.png" alt="" />
          <div className="data-restaurant">
            <h3>World Food</h3>
            <div className="container-hors">
              <p>35-50 min</p>
              <p>Envio Gratis</p>
            </div>
            <p>2.8</p>
          </div>
        </div>
      </Container>
    </>
  );
}
