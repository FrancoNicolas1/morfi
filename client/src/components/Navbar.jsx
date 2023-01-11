import React, { useState } from "react";
import {
  Container,
  Logo,
  BoxButtons,
  Box,
  LinksList,
  Links,
  Link,
  Buttons,
  Image
} from './navbar.styled.js';
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props) => {
const {loginWithRedirect} = useAuth0()
  return (
    <>
     <Container>
     
     <Logo>
         <Image src="https://img.freepik.com/vector-premium/chef-logo-vector_20448-270.jpg?w=2000" alt="Logo de la marca"/>
     </Logo>
     <Box>
         <LinksList>
             <Links>
             <NavLink to={"nosotros"}>
             <Link>Nosotros</Link>
            </NavLink>
             </Links>
             <Links>
             <NavLink to={"preguntas"}>
             <Link>Preguntas frecuentes</Link>
            </NavLink>
             </Links>
             <Links>
             <NavLink to={"contactenos"}>
             <Link>Contactenos</Link>
            </NavLink>
             </Links>
         </LinksList>         
     </Box>

     <BoxButtons>
     <Buttons onClick={()=>loginWithRedirect()}>Login</Buttons>
     {/* <Buttons  onClick={}>SingUp</Buttons> */}
      <NavLink to={"formrestaurant"}>
          <Buttons>Tu Comercio</Buttons>
          </NavLink>
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
