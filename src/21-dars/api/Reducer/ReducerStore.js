import { actionType } from "./actionType/actionType";
export const intialState = {
    data:[
        {
            id:1,
            name:"Bahrom"
        }
    ]
}
export const reducer = (state=intialState,{type,payload})=>{
    switch (type) {
        case actionType.add:
            return {
                ...state,
                data:[...state.data,payload]
            }
    
        default:
           return state
    }
}
