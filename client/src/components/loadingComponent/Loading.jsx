import { RiLoader4Fill } from "react-icons/ri";
import styled from "styled-components";

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  color: rgb(255, 174, 0);
  & .loading {
    animation: loading 1s linear infinite;
  }
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = () => {
  return (
    <ContainerLoading>
      <RiLoader4Fill className="loading" size={80} />
    </ContainerLoading>
  );
};
