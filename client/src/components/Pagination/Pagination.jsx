import styled from "styled-components";
import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Container = styled.div`
  /* border: solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 5%;
  & .btn-pagination {
    &.disable {
      opacity: 0.4;
      cursor: default;
      background-color: #ff9a33;
      &:hover {
      }
    }
    padding: 3px 10px;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    outline: none;
    border: 1px solid #1a120b;
    background-color: #ffd15f;
    color: #1a120b;
    &.focus {
      background-color: #ff9a33;
      transform: scale(1.1);
    }
    .color1 {
      color: #ff613c;
    }
    .color2 {
      color: #ff9a33;
    }
    .color3 {
      color: #ffd15f;
    }
    .color4 {
      color: #ffff9f;
    }
    .color5 {
      color: #ffffd6;
    }
    &:hover {
      background-color: #ff9a33;
    }
  }
`;

export default function Pagination({
  restaurantsForPage,
  allRest,
  pagination,
  currentPage,
}) {
  const pageActive = useSelector((state) => state.pageActive);
  const loading = useSelector((state) => state.loading);
  // console.log('soyyy', pageActive);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRest / restaurantsForPage); i++) {
    pageNumbers.push(i);
  }
  const prevHandler = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage < pageNumbers.length) {
      pagination(currentPage + 1);
    }
  };
  // console.log(pageNumbers);
  return (
    <>
      {!loading ? (
        <>
          <Container>
            <button
              className={`btn-pagination ${currentPage <= 1 ? "disable" : ""}`}
              onClick={prevHandler}
            >
              <IoCaretBackOutline fontSize={25} />
            </button>
            {pageNumbers?.map((number) => (
              <button
                className={`btn-pagination ${
                  parseInt(number) === parseInt(pageActive) ? "focus" : ""
                }`}
                key={number}
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            ))}
            <button
              className={`btn-pagination ${
                currentPage >= pageNumbers.length ? "disable" : ""
              }`}
              onClick={nextHandler}
            >
              <IoCaretForwardOutline fontSize={25} />
            </button>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
