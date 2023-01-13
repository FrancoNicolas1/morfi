const initialState = {
  allRestaurants: [],
  restaurant: [],
  restaurantDetail: [],
  categories: [],
  loading: false,
  pageActive: 1,
  user: [],
  allUsers: [],
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
      const allCategories = state.allRestaurants;
      const categoriesFiltered =
        action.payload === "All Restaurant"
          ? allCategories
          : allCategories.filter((el) => el.category.includes(action.payload));
      return {
        ...state,
        restaurant: categoriesFiltered,
      };
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
    case "GET_ALL_USERS":
      return {
        ...state,
        allUsers: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
}
