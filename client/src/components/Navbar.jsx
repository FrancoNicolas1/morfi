import React, { useEffect, useState } from "react";
import {
  Container,
  Logo,
  BoxButtons,
  Box,
  LinksList,
  Links,
  Link,
  Buttons,
  Image,
} from "./navbar.styled.js";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions.js";
import Cookies from "js-cookie";

const Navbar = (props) => {
  const userArray = useSelector((state) => state.user);
  console.log(userArray);
  const dispatch = useDispatch();

  const handleUserLogOut = () => {
    Cookies.remove("id_token");
    Cookies.remove("access_token");
    dispatch(logOut());
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Logo>
          <Image src={require("../img/Logo.jfif")} alt="Logo de la marca" />
        </Logo>
        <Box>
          <LinksList>
            <Links>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={"nosotros"}
              >
                Nosotros
              </NavLink>
            </Links>
            <Links>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={"preguntas"}
              >
                Preguntas frecuentes
              </NavLink>
            </Links>
            <Links>
              <NavLink
                to={"contactenos"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Contacto
              </NavLink>
            </Links>
          </LinksList>
        </Box>

        <BoxButtons>
          {userArray.length ? null : (
            <Buttons
              onClick={() => {
                props.setAbrir(true);
                props.setAbrir1(false);
              }}
            >
              Ingresar
            </Buttons>
          )}

          {userArray.length ? (
            <>
              <Buttons onClick={handleUserLogOut}>Salir</Buttons>
              <NavLink to={"formrestaurant"}>
                <Buttons>Tu Comercio</Buttons>
              </NavLink>
              {userArray?.map((user) => {
                return (
                  <>
                    <NavLink to={"userprofile"}>
                      <Buttons>Perfil</Buttons>
                    </NavLink>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <Buttons
                onClick={() => {
                  props.setAbrir1(true);
                  props.setAbrir(false);
                }}
              >
                Registrar
              </Buttons>
            </>
          )}
        </BoxButtons>
      </Container>
    </>
    // <nav>
    //   <div>
    //     <SearchBar />
    //   </div>
    //   <div>
    //     <Button1
    //       onClick={() => {
    //         props.setAbrir(true);
    //         props.setAbrir1(false);
    //       }}
    //     >
    //       Login
    //     </Button1>
    //     <Button
    //       onClick={() => {
    //         props.setAbrir1(true);
    //         props.setAbrir(false);
    //       }}
    //     >
    //       Sign Up
    //     </Button>
    //     <Div>
    //       <Select
    //         defaultValue="default"
    //         onChange={(event) => handleFilter(event)}
    //       >
    //         <option value="default" disabled>
    //           Order Alphabetical
    //         </option>
    //         <option value="asc">A - Z</option>
    //         <option value="desc">Z - A</option>
    //       </Select>
    //       <Select
    //         defaultValue="default"
    //         onChange={(event) => handleFilterRating(event)}
    //       >
    //        <option value="default" disabled>
    //           Order Rating
    //         </option>
    //         <option value="Rating+">Rating+</option>
    //         <option value="Rating-">Rating-</option>
    //       </Select>
    //         <Select
    //           id="categories"
    //           defaultValue="default"
    //           onChange={handleCategories}
    //         >
    //           <option value="default" disabled>
    //             Select Categories
    //           </option>
    //           {allCategories?.map((e) => (
    //             <option value={e.name}>{e.name}</option>
    //           ))}
    //         </Select>
    //     </Div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
