import { ADD_PANIER_ITEM, DELETE_PANIER_ITEM, GET_PANIER_SUCCESS, VIDER_PANIER_REQUEST } from "../consts/PanierConst"
export const getPanier = () =>
    async (dispatch) => {


        dispatch({ type: GET_PANIER_SUCCESS })

    }
export const addPanierItem = (produit) =>
    async (dispatch, getState) => {


        dispatch({ type: ADD_PANIER_ITEM, playload: produit  })
        localStorage.setItem("panier", JSON.stringify(getState().PanierReducer.panier))

    }
export const deletePanierItem = (id) =>
    async (dispatch, getState) => {

         
        dispatch({ type: DELETE_PANIER_ITEM, playload: id })
        localStorage.setItem("panier", JSON.stringify(getState().PanierReducer.panier))

    }

    export const viderPanierItem = () =>
    async (dispatch) => {

         
        dispatch({ type: VIDER_PANIER_REQUEST })
        localStorage.removeItem('panier');

 

    }
