import { ADD_PANIER_ITEM, DELETE_PANIER_ITEM, GET_PANIER_SUCCESS, VIDER_PANIER_REQUEST } from "../consts/PanierConst";

export const PanierReducer = (state = { panier: [], error: false }, action) => {
    switch (action.type) {
        case GET_PANIER_SUCCESS:

            return state

        case ADD_PANIER_ITEM:

            const existItem = state.panier.filter((item) => item._id === action.playload._id)

            if (existItem.length > 0) {
                const product = state.panier.map((item) => item._id === action.playload._id ? item.qty = item.qty + action.playload.qty : item)
                console.log(product)

            }

            else {
                return { ...state, panier: [...state.panier, action.playload] }
            }





        case DELETE_PANIER_ITEM:

            const newPanier = state.panier.filter((item) => item._id !== action.playload)
           

            return { ...state, panier: newPanier }

        case VIDER_PANIER_REQUEST:
            return { ...state, panier: [] }

        default:
            return state
    }
}
