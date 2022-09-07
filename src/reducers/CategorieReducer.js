import { GET_CATEGORIE_REQUEST, GET_CATEGORIE_SUCCESS } from "../consts/CategorieConsts"

export const CategorieListReducer = (state = { categorie: {}, loading: false }, action) => {


    switch (action.type) {

        case GET_CATEGORIE_REQUEST:
            return { ...state ,loading :true  }

        case GET_CATEGORIE_SUCCESS:

            return { ...state, categorie: action.playload ,loading :false  }

        default:
            return state
    }
}
