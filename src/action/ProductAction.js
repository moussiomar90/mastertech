import {
    GET_PRODUCT_SUCCESS, GET_PRODUCT_ID, GET_PRODUCT_ID_ERROR, GET_PRODUCT_BY_CATEGORIE_ERROR,
    GET_PRODUCT_BY_CATEGORIE_REQUEST,
    GET_PRODUCT_BY_CATEGORIE_SUCCESS,
    GET_PRODUCT_ID_REQUEST,
    GET_PRODUCT_ID_SUCCESS
} from '../consts/ProductConst'
import axios from 'axios'

export const getProductList = () =>
    async (dispatch) => {
        const product = await axios.get('https://servernodemastertech.herokuapp.com/product/')

        dispatch({ type: GET_PRODUCT_SUCCESS, playload: product })

    }



export const getProductByCategorie = (id) =>
    async (dispatch) => {
        dispatch({ type: GET_PRODUCT_BY_CATEGORIE_REQUEST })
        try {
            const categorie = await axios.get(`https://servernodemastertech.herokuapp.com/product/find/${id}`)
            dispatch({ type: GET_PRODUCT_BY_CATEGORIE_SUCCESS, playload: categorie })

        } catch (error) {
            dispatch({ type: GET_PRODUCT_BY_CATEGORIE_ERROR, playload: error })
        }

    }


export const getProductById = (id) =>
    async (dispatch) => {

        dispatch({ type: GET_PRODUCT_ID_REQUEST })

        try {
            const product = await axios.get(`https://servernodemastertech.herokuapp.com/product/getproduct/${id}`,)
            dispatch({ type: GET_PRODUCT_ID_SUCCESS ,playload : product})
        } catch (error) {
            dispatch({ type: GET_PRODUCT_ID_ERROR })

        }

    } 