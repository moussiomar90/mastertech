 
import { GET_PRODUCT_SUCCESS, 
    
    GET_PRODUCT_ID,  
     GET_PRODUCT_ID_ERROR, GET_PRODUCT_BY_CATEGORIE_ERROR,
      GET_PRODUCT_BY_CATEGORIE_SUCCESS,
       GET_PRODUCT_BY_CATEGORIE_REQUEST, 
       GET_PRODUCT_ID_REQUEST,
       GET_PRODUCT_ID_SUCCESS} from '../consts/ProductConst'

export const ProductListReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:

            return { ...state, product: action.playload }


        default:
            return state
    }
}
export const ProductListByCategorieReducer = (state = { product: [], error: false,loading:true }, action) => {

    switch (action.type) {
        case GET_PRODUCT_BY_CATEGORIE_REQUEST : 
        return {...state,loading:true}


        case GET_PRODUCT_BY_CATEGORIE_SUCCESS:
        return { ...state,  product: action.playload.data.product, error: false,loading:false }

        case GET_PRODUCT_BY_CATEGORIE_ERROR:
        return { ...state, error: true ,loading:false }

       
        default:
            return state
    }
}
 

export const ProductIdReducer = (state = { productID: {}, error: false,loading:false }, action) => {
    switch (action.type) {
        case GET_PRODUCT_ID_REQUEST:
            return { ...state,  error: false ,loading:true}

            case GET_PRODUCT_ID_SUCCESS:
                return { ...state, productID : action.playload.data, error: false ,loading:false}
     

        default:
            return state
    }
}