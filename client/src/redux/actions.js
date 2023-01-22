import axios from "axios";

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
    let json = await axios.get(
      "http://localhost:3001/restaurants/name/getbyname",
      {
        params: {
          name: searchInput,
        },
      }
    );
    if (json.length === 0) {
      alert("No se encontro ese Restaurante");
      const all = await axios.get(`http://localhost:3001/restaurants`);
      return dispatch({
        type: "GET_ALL_RESTAURANT",
        payload: all.data,
      });
    } else {
      return dispatch({
        type: "SEARCH_RESTAURANT",
        payload: json.data,
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

export function createRestaurant(data) {
  return async function (dispatch) {
    try {
      let createRestaurant = await axios.post(
        "http://localhost:3001/restaurants",
        data
      );
      return dispatch({
        type: "CREATE_RESTAURANT",
        payload: createRestaurant.data,
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

//////////////////////LOGOUT/////////////////////////////////////
export const logOut = () => {
  return { type: "LOG_OUT", payload: [] };
};
/////////////////////////////////SINGUP///////
export function postUser(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("http://localhost:3001/signup", payload);
      console.log(json);
    } catch (error) {
      console.log(error.response.data.error);
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
      return dispatch({
        type: "LOGIN_USER",
        payload: json.data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
}
