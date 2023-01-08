import styled from 'styled-components';

export const Container = styled.div`
  background: #ff613c;
  min-height: 130px;
  color: #fff;
  & li {
    color: inherit;
    list-style: none;
    cursor: pointer;
  }
  & .container-social-media {
    /* border: solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    gap: 5px;
  }
  @media (min-width: 600px) {
    & .container-social-media {
      width: 15%;
    }
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem 0;
`;

export const List = styled.ul`
  margin: 1rem auto;
  display: flex;
  gap: 0.5rem;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 800px) {
    font-size: 14px;
  }
  width: 40%;
`;

export const LineDetail = styled.hr`
  width: 90%;
  margin: 0 auto;
`;

export const ContainerAuthorInfo = styled.div`
  /* border: solid red; */
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  & p {
    margin: 0;
    font-size: 10px;
  }
  @media (min-width: 600px) {
    & p {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
