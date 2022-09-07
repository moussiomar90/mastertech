import axios from "axios"
import { GET_CATEGORIE_REQUEST, GET_CATEGORIE_SUCCESS } from "../consts/CategorieConsts"



export const getCategorieProduct = () =>
    
async (dispatch) => {
   
    dispatch({ type: (GET_CATEGORIE_REQUEST) })
    const categorie = await axios.get('https://servernodemastertech.herokuapp.com/categorie/')

    dispatch({ type: GET_CATEGORIE_SUCCESS, playload: categorie })

}