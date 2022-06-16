export const initialState = {
    data:[
        {id:0, name:"Ali"}
    ],
    data1:{
    }
}
export const reducer = (state=initialState,action) =>{
    const {type,payload} = action;
    switch (type) {
        case "add":
            return{
                ...state,
                data:[...state.data,payload]
            }
            case "delete":
                const del = state.data.filter((val)=>val.id!==payload)
                return{
                    ...state,
                    data:del
                }
        default:
                return state
    }
}