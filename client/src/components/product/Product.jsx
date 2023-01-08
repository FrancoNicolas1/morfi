import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const ContainerProduct = styled.div`
  /* border: solid red; */
  padding: 0;
  background-color: #ece8dd;
  border: 1px solid #1a120b;

  & .list-products {
    padding: 0;
    list-style: none;
    margin: 0 auto;
    width: 100%;

    & .product {
      background-color: #ffff9f;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
      margin-bottom: 1rem;
      /* padding: 5px; */
      height: 5rem;
      border: 1px solid #1a120b;
    }
    & .title-product {
      font-size: 1.2rem;
      text-align: center;
      padding: 0.2rem;
    }
    & .photo-product {
      width: 30%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    & .price {
      font-size: 1rem;
      font-weight: 700;
    }
    & .add-btn {
      outline: none;
      background-color: #ff9a33;
      padding: 10px;
      margin: 0 5px 0 0;
      border: 0;
      &:hover {
        background-color: #ff613c;
      }
    }
  }
`;

export const Product = (props) => {
  const { products } = props;
  /* console.log(Object.values(products));
  console.log(Object.keys(products)); */
  return (
    <ContainerProduct>
      {Object.values(products)?.map((p) => {
        /* console.log('soy p', p); */
        return (
          <ul className="list-products">
            <h5 className="title-product">{Object.keys(products).join('')}</h5>
            {p?.map((e) => {
              return (
                <li className="product">
                  <img className="photo-product" src={e.photo} alt="" />
                  <p>{e.name}</p>
                  <p className="price">{e.price}</p>

                  <button className="add-btn">
                    <FaShoppingCart fontSize={15} />
                  </button>
                </li>
              );
            })}
          </ul>
        );
      })}
    </ContainerProduct>
  );
};
