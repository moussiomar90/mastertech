import { CREATE_COMMANDE_FAIL,CREATE_COMMANDE_REQUEST, GET_ALL_COMMANDE_BY_USER ,CREATE_COMMANDE_SUCCESS, GET_COMMAND_DETAILS_REQUEST} from "../consts/CommandeConsts";



export const addCommandeReducer = (state = {id:'', error: false, success: false }, action) => {

    switch (action.type) {

        case CREATE_COMMANDE_REQUEST:
            console.log('CREATE_COMMANDE_REQUEST')
            return { ...state,  success: false }

        case CREATE_COMMANDE_FAIL:
            console.log('CREATE_COMMANDE_FAIL')
            return { ...state, error: true }

        case CREATE_COMMANDE_SUCCESS:
            console.log('CREATE_COMMANDE_SUCCESS')
            return { ...state, id:action.playload ,success: true }

        default:
            return state
    }

}
export const listCommandeReducer = (state = { list: [] }, action) => {

    switch (action.type) {

        case GET_ALL_COMMANDE_BY_USER:

            return { ...state, list: action.playload.data }


        default:
            return state
    }

}
export const getCommandeReducer = (state = { commande:{} }, action) => {

    switch (action.type) {

        case GET_COMMAND_DETAILS_REQUEST:

            return { ...state, commande: action.playload.data }


        default:
            return state
    }

}