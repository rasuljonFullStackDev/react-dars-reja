import { actionType } from "./actionType/actionType";
export const intialState = {
    data: [
        {
            id: 1,
            name: "Bahrom"
        }
    ],
    list: [
        {
            id: 1,
            name: "Bahrom"
        }
    ]
}
export const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case actionType.add:
            return {
                ...state,
                data: [...state.data, payload]
            }
        case actionType.delete:
            const filter = state.data.filter((val) => val.id !== payload)
            return {
                ...state,
                data: filter
            }
        case actionType.listAdd:
            return {
                ...state,
                list: [...state.list, payload]
            }
        default:
            return state
    }
}
