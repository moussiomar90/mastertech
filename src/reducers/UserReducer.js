import {   CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCESS, GET_USER_SIGIN_FAIL, GET_USER_SIGIN_REQUEST, GET_USER_SIGIN_SUCCESS, LOGOUT_REQUEST, } from "../consts/UserConst"

export const UserSiginReducer = (state = { user: {}, error: false, loading: false }, action) => {
    switch (action.type) {

        case GET_USER_SIGIN_SUCCESS:
            return { ...state, user: action.playload.data, error: false, loading: false }

        case GET_USER_SIGIN_REQUEST:
            return { ...state, loading: true, error: false }

        case GET_USER_SIGIN_FAIL:
            return { ...state, error: true, loading: false }

            case  LOGOUT_REQUEST:
                
                return   {...state,  user:{} }  
        default:
            return state
    }
}
export const UserRegisterReducer = (state = { user: {}, error: false, loading: false }, action) => {
    switch (action.type) {

        case CREATE_USER_REQUEST:
            return { ...state, user: {},   error: false, loading: true }

            case CREATE_USER_SUCESS:
                return { ...state, user: action.playload.data,   error: false, loading: false }

        case CREATE_USER_FAIL:
            return { ...state, user: {},   error: true, loading: false }
     
        
        default:
            return state
    }
}
 