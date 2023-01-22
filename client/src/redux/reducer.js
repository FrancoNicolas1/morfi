const initialState = {
  allRestaurants: [],
  restaurant: [],
  restaurantDetail: [],
  categories: [],
  loading: false,
  pageActive: 1,
  payment: {},
  loading: false,
  error: null,
  product: [],
  user: [],
  allUsers: [],
  cart: [],
  checkOut: [],
  restaurantProducts: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PAGE_ACTIVE":
      return {
        ...state,
        pageActive: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_ALL_RESTAURANT":
      return {
        ...state,
        allRestaurants: action.payload,
        restaurant: action.payload,
      };
    // case 'RESTAURANT_BY_NAME':
    //   return {
    //     ...state,
    //     allRestaurants: action.payload,
    //   };
    case "SEARCH_RESTAURANT":
      return {
        ...state,
        restaurant: action.payload,
      };
    case "GET_RESTAURANT_BY_ID":
      return {
        ...state,
        restaurantDetail: action.payload,
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "ORDER":
      let sortedOrder;
      const allRestaurants = [...state.restaurant];

      if (action.payload === "asc") {
        sortedOrder = allRestaurants.sort(function (a, b) {
          //comparo ambos valores
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        sortedOrder = allRestaurants.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        restaurant: sortedOrder,
      };
    case "RATING":
      let sortedOrdeR;
      const allRestaurants2 = [...state.restaurant];

      if (action.payload === "Rating-") {
        sortedOrdeR = allRestaurants2.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "Rating+") {
        sortedOrdeR = allRestaurants2.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        restaurant: sortedOrdeR,
      };
    case "FILTER_CATEGORIES":
      const allCategory = state.allRestaurants;
      const categoriesFiltered =
        action.payload === "All categories"
          ? allCategory
          : allCategory.filter((item) => {
              return item.Categories.some(
                (category) => category.name === action.payload
              );
            });
      console.log(
        allCategory.filter((item) => {
          return item.Categories.some(
            (category) => category.name === action.payload
          );
        })
      );
      return {
        ...state,
        restaurant: categoriesFiltered,
      };
    case "REFRESH_PAG":
      return {
        ...state,
        allRestaurants: action.payload,
      };
    case "PAY_WITH_MERCADOPAGO":
      return {
        ...state,
        loading: true,
      };
    case "PAY_WITH_MERCADOPAGO_SUCCESS":
      return {
        ...state,
        loading: false,
        payment: action.payload,
      };
    case "PAY_WITH_MERCADOPAGO_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "FETCH_PRODUCT":
      return { ...state, product: action.payload };
    case "REFRESH_PAG":
      return {
        ...state,
        allRestaurants: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: action.payload,
      };
    case "FILL_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "FILL_CHECKOUT":
      const filteredProducts = action.payload.filter(
        (el) => el.selected === true
      );
      console.log(filteredProducts, "los productos filtrados del reducer");
      return {
        ...state,
        checkOut: filteredProducts,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: [action.payload],
      };
    case "UPDATE_PHOTO_PROFILE":
      return {
        ...state,
        user: [action.payload],
      };
    case "UPDATE_PROFILE_USER":
      return {
        ...state,
        user: [action.payload],
      };
    case "RETURN_USER":
      return {
        ...state,
        user: [action.payload],
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        allUsers: action.payload,
      };
    case "UPDATE_USER": {
      return { ...state, allUsers: action.payload };
    }
    case "BANNED_USER": {
      return { ...state, allUsers: action.payload };
    }
    case "CREATE_RESTAURANT":
      return {
        ...state,
        restaurantProducts: [action.payload],
      };
    default:
      return { ...state };
  }
}
