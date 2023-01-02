const initialState={
    all:[]
    
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "ALL":
            return {
                ...state,
                all:action.payload

            }
        
        default: return {...state}
    }
}