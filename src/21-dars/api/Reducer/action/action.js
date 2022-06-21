import { actionType } from "../actionType/actionType"

export const add = (data) =>{
    return{
        type:actionType.add,
        payload:data
    }
}

export const deleteFun = (data) =>{
    return{
        type:actionType.delete,
        payload:data
    }
}


export const listAdd = (data) =>{
    return{
        type:actionType.listAdd,
        payload:data
    }
}
