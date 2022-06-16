import { actionType } from "../actionType/actionType"

export const add = (data) =>{
    return{
        type:actionType.add,
        payload:data
    }
}
