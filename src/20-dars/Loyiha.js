export const initialState = {
    data:[]
}

export const reducers = (state=initialState,{type,payload})=>{
    switch (type) {
        case "add":
            return{
                ...state,
                data:[...state.data, payload]
            }
        default:
            return state;
    }
}