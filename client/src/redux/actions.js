import axios from "axios";
import swal from "sweetalert";
/* eslint-disable-next-line no-undef  */

//////////////////////////////// ACTIONS RESTAURANT///////////////////////////////////////
export function allRestaurants() {
  return async function (dispatch) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      let allRestaurants = await axios.get(`http://localhost:3001/restaurants`);
      dispatch({
        type: "GET_ALL_RESTAURANT",
        payload: allRestaurants.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "SET_LOADING", payload: false });
  };
}

////////////////////////////////// ESPERAR RUTA BY NAME ////////////////////////////////

// export function restaurantByName(name) {
//   return async function (dispatch) {
//     try {
//       let restaurantByName = await axios.get(
//         `http://localhost:3001/restaurant?name=${name}`
//       );
//       return dispatch({
//         type: 'RESTAURANT_BY_NAME',
//         payload: restaurantByName.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

/////////////////////////// ESTO ES DE YAMI ///////////////////////

export function searchRestaurant(searchInput) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "http://localhost:3001/restaurants/name/getbyname",
        {
          params: {
            name: searchInput,
          },
        }
      );
      return dispatch({
        type: "SEARCH_RESTAURANT",
        payload: json.data,
      });
    } catch (error) {
      swal({
        title: `Ese restaurante no existe`,
        text: "Clickea para continuar...",
        icon: "error",
      });
      const all = await axios.get(`http://localhost:3001/restaurants`);
      return dispatch({
        type: "GET_ALL_RESTAURANT",
        payload: all.data,
      });
    }
  };
}
///////////////////////////////////////////////////////////////////////////////
export function getRestaurantById(id) {
  return async function (dispatch) {
    if (id) {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        let restaurantById = await axios.get(
          `http://localhost:3001/restaurants/${id}`
        );
        dispatch({
          type: "GET_RESTAURANT_BY_ID",
          payload: restaurantById.data,
        });
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: "SET_LOADING", payload: false });
    } else {
      try {
        const arraycito = [];
        dispatch({
          type: "GET_RESTAURANT_BY_ID",
          payload: arraycito,
        });
      } catch (err) {
        console.log(err, "FALLO DE EL ELSE DEL getRestaurantById");
      }
    }
  };
}

export async function createProduct(products, idRestaurant) {
  try {
    let createProduct = await axios.post(
      `http://localhost:3001/create-product/${idRestaurant}`,
      products
    );
    swal({
      title: "Creo su producto con exito!!",
      text: "Clickea para continuar...",
      icon: "success",
    });
  } catch (err) {
    console.error(err, "el error del createProduct action");
  }
}

export function createRestaurant(restaurant, idUser) {
  return async function (dispatch) {
    try {
      console.log(restaurant);
      let createRestaurant = await axios.post(
        `http://localhost:3001/restaurants/${idUser}`,
        restaurant
      );

      dispatch({
        type: "CREATE_RESTAURANT",
        payload: createRestaurant.data,
      });
      swal({
        title: "Creo su restaurante con exito!!",
        text: "Clickea para continuar...",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRestaurantForId(idRes, idUser) {
  return async function (dispatch) {
    try {
      let restaurantById = await axios.delete(
        `http://localhost:3001/restaurants/${idRes}`
      );
      swal({
        title: "Elimino con exito su restaurante!!",
        text: "Clickea para continuar...",
        icon: "success",
      });
      let userId = await axios.get(`http://localhost:3001/users/${idUser}`);
      return dispatch({
        type: "RETURN_USER",
        payload: userId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/////////////////////////////////////////////ACTIONS CATEGORY///////////////////////////////
export function getAllCategories() {
  return async function (dispatch) {
    let allCategories = await axios("http://localhost:3001/categories");
    return dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: allCategories.data,
    });
  };
}
/////////////////////////////////// FILTROS Y ORDENAMIENTOS
export function order(payload) {
  return {
    type: "ORDER",
    payload,
  };
}

export function rating(payload) {
  return {
    type: "RATING",
    payload,
  };
}

export function submitRating(rating) {
  return async function (dispatch) {
    try {
      const res = await axios.post(`http://localhost:3001`, { rating });
      dispatch({ type: "SUBMIT_RATING", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterByCategories(payload) {
  return {
    type: "FILTER_CATEGORIES",
    payload,
  };
}

///////////////////////////REFRESH////////////////////////////
export function refreshPag(payload) {
  return {
    type: "REFRESH_PAG",
    payload: [],
  };
}

///////////////////////////////////////////////////////////

// status from pagination:
export const setNumberPageActive = (pageActive) => {
  return { type: "SET_PAGE_ACTIVE", payload: pageActive };
};

//////////////////////////MERCADOPAGO/////////////////////////////////

export async function payWithMercadoPago(productosComprados) {
  try {
    let data = productosComprados;
    console.log(data, "la data que envio");
    let payment = await axios.post("http://localhost:3001/crearOrden", {
      data,
    });
    console.log(payment.data, "LO QUE RECIBO");
    return payment.data;
  } catch (err) {
    console.error(
      err,
      "el error a la hora de crear la preferencia con el metodo payWithMercadoPago"
    );
    alert(
      "Hubo un problema a la hora de generar el pago, por favor intente de nuevo y sepa disculpar las molestias ocasionadas."
    );
  }
}
//////////////////ACTIONS QUE MANEJAN EL CARRITO DE COMPRAS////////////

export function setCheckoutProducts(selectedProducts) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FILL_CHECKOUT",
        payload: selectedProducts,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//////////////////ACTIONS QUE MANEJAN EL CARRITO DE COMPRAS////////////
export function setSelectedProducts(products) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FILL_CART",
        payload: products,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//////////////////////////PRODUCT/////////////////////////////////
export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      dispatch({ type: "FETCH_PRODUCT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//////////////////////LOGOUT/////////////////////////////////////
export const logOut = () => {
  return { type: "LOG_OUT", payload: [] };
};
/////////////////////////////////SINGUP///////
export function postUser(usuarioDelFormGoogle) {
  return async function (dispatch) {
    try {
      console.log(usuarioDelFormGoogle, "LO QUE MANDO");
      const json = await axios.post(
        "http://localhost:3001/signup",
        usuarioDelFormGoogle
      );
      console.log("entro o alla la estan entrando");
      if (json.status === 200) {
        dispatch(loginPostUser(usuarioDelFormGoogle));
      } else {
        swal({
          title: "Lamentablemente hubo un error al enviar el formulario",
          text: "Clickea para continuar...",
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: `Lamentablemente se produjo un error : ${error.response.data}`,
        text: "Clickea para continuar...",
        icon: "error",
      });
      console.log(error, "el error del post USER");
    }
  };
}

////////////////////////////TODOS LOS USUARIOS///////////////
export function getAllUsers() {
  return async function (dispatch) {
    try {
      let allUsers = await axios.get("http://localhost:3001/users");
      dispatch({
        type: "GET_ALL_USERS",
        payload: allUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/////////////////////////////////LOGIN////////////
export function loginPostUser(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("http://localhost:3001/login", payload);
      swal({
        title: "Bienvenido!!",
        text: "Clickea para continuar...",
        icon: "success",
      });
      localStorage.setItem("user", JSON.stringify(json.data));
      return dispatch({
        type: "LOGIN_USER",
        payload: json.data,
      });
    } catch (error) {
      swal({
        title: "Los datos son incorrectos, vuelva a intentar",
        text: "Clickea para continuar...",
        icon: "warning",
      });
    }
  };
}
/////////////////////////////////////////IMAGE CLOUDINARY////////////////////
export const updateProfileImage = (id, dataFinal) => {
  return async function (dispatch) {
    const data = { dataFinal };
    console.log(id);
    try {
      const api = await axios.put(
        `http://localhost:3001/users/photo/${id}`,
        data
      );
      console.log(api);
      return dispatch({
        type: "UPDATE_PHOTO_PROFILE",
        payload: api.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//////////////////////////////////////////////////UPDATE USER /////////////////////////////////////////////
export const updateProfileUser = (id, data) => {
  return async function (dispatch) {
    try {
      console.log(data);
      const api = await axios.put(
        `http://localhost:3001/users/update/${id}`,
        data
      );
      console.log(api);
      return dispatch({
        type: "UPDATE_PROFILE_USER",
        payload: api.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
///////////////////////////////////////GET ALL USER///////////////////////////
export function allUsers() {
  return async function (dispatch) {
    try {
      let allUsers = await axios.get(`http://localhost:3001/users`);
      dispatch({
        type: "GET_ALL_USERS",
        payload: allUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "SET_LOADING", payload: false });
  };
}
////////////////////////////////////// BANNED Y USER/ADMIN///////////////////////
export const updateUserAdmin = (id, data) => {
  return async function (dispatch) {
    try {
      const json = await axios.put(
        `http://localhost:3001/users/admin/${id}`,
        data
      );
      const updateUsers = await axios.get(`http://localhost:3001/users`);
      const sortedUsers = updateUsers.data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      dispatch({ type: "UPDATE_USER", payload: sortedUsers });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const updateBanned = (id, data) => {
  return async function (dispatch) {
    try {
      const json = await axios.put(
        `http://localhost:3001/users/banned/${id}`,
        data
      );
      const userBanned = await axios.get(`http://localhost:3001/users`);
      const sortedUsers = userBanned.data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      dispatch({ type: "BANNED_USER", payload: sortedUsers });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const loginGoogle = (access_token, id_token) => {
  return async function (dispatch) {
    try {
      console.log("estoy entrando a loginGoogle");

      const params = { id_token };
      const headers = { accessToken: access_token };
      console.log(params, headers, "LO QUE ENVIO");
      const verifyTokens = await axios
        .get(
          `http://localhost:3001/verificacionDeTokensGoogle?id_token=${id_token}`
        )
        .then((response) => response.data);
      const userDeGoogle = [verifyTokens];
      if (verifyTokens) {
        console.log("caso verify Token");
        dispatch({ type: "LOGIN_GOOGLE", payload: userDeGoogle });
        dispatch({ type: "LOGIN_USER", payload: userDeGoogle });
      } else {
        console.log("caso else");
        dispatch({ type: "LOGIN_GOOGLE", payload: null });
        dispatch({ type: "LOGIN_USER", payload: null });
      }
    } catch (err) {
      console.error(err);
      return dispatch({
        type: "LOG_OUT",
        payload: {
          user: [],
          accessToken: null,
          refreshToken: null,
        },
      });
    }
  };
};

export const refrescarToken = (refreshToken) => {
  return async function (dispatch) {
    try {
      console.log("estoy entrando a loginGoogle");
      const params = { refreshToken };
      console.log(params, "LO QUE ENVIO");
      const verifyTokens = await axios
        .get(
          `http://localhost:3001/refrescarTokenDeGoogle?id_token=${refreshToken}`
        )
        .then((response) => response.data);
      console.log(verifyTokens, "LO QUE DEVUELVE EL REFRESH TOKENS");
      if (verifyTokens) {
        const accessToken = verifyTokens.tokens.access_token;
        const id_token = verifyTokens.tokens.id_token;
        dispatch(loginGoogle(accessToken, id_token));
      } else {
        alert("No se recibió un token de verificacion de regreso");
      }
    } catch (err) {
      console.error(err);
      return dispatch({
        type: "LOG_OUT",
        payload: {
          user: [],
          accessToken: null,
          refreshToken: null,
        },
      });
    }
  };
};
//////////////////////////// CLOUDINARY RESTAURANT //////////////////
