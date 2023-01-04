const initialState={
    allRestaurants:[],
    restaurantByname:[]
}
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "ALL_RESTAURANT":
            return {
                ...state,
                allRestaurants:action.payload

            }
        case "RESTAURANT_BY_NAME":
            return {
                ...state,
                allRestaurants:action.payload
            }    
        
        default: return {...state}
    }
}