import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCESS, GET_USER_SIGIN, GET_USER_SIGIN_FAIL, GET_USER_SIGIN_REQUEST, GET_USER_SIGIN_SUCCESS, LOGOUT, LOGOUT_REQUEST, UPDATE_USER_SUCESS } from "../consts/UserConst"
import axios from "axios"
export const getUserSigin = (email, password) =>
    async (dispatch, getState) => {

        dispatch({ type: GET_USER_SIGIN_REQUEST })
        try {
            const user = await axios.post('https://servernodemastertech.herokuapp.com/user/auth', { email, password })

            dispatch({ type: GET_USER_SIGIN_SUCCESS, playload: user })
            localStorage.setItem("user", JSON.stringify(getState().UserSiginReducer.user))
        }
        catch (e) {
            console.log(e)
            dispatch({ type: GET_USER_SIGIN_FAIL })
        }


    }

export const CreateUser = (data) =>
  

async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST })
    try {
        const user = await axios.post('https://servernodemastertech.herokuapp.com/user/create', data)
        dispatch({ type: CREATE_USER_SUCESS, playload: user })

    } catch (error) {
        dispatch({ type: CREATE_USER_FAIL  })
    }


}

export const UpdateUser = (name, email, adresse, codepostal) =>

    async (dispatch, getState) => {
        console.log(name, email, adresse, codepostal)
        const user = await axios.put('https://servernodemastertech.herokuapp.com/user/update',
            { name, email, adresse, codepostal })
        console.log(user)
        dispatch({ type: UPDATE_USER_SUCESS, playload: user })
        localStorage.setItem("user", JSON.stringify(getState().UserSiginReducer.user))


    }
export const LogOut = () =>

    async (dispatch) => {



        dispatch({ type: LOGOUT_REQUEST })
        localStorage.removeItem("user");


    }
