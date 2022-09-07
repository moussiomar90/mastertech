import axios from "axios"
import { CREATE_COMMANDE_FAIL, CREATE_COMMANDE_SUCCESS, GET_ALL_COMMANDE_BY_USER, CREATE_COMMANDE_REQUEST, GET_COMMAND_DETAILS_REQUEST } from "../consts/CommandeConsts"

export const createCommande = (id, name, adresse, panier, Paiement, total) =>
  async (dispatch) => {
    dispatch({ type: CREATE_COMMANDE_REQUEST, playload: false })

    try {
      
      const commande = await axios.post('https://servernodemastertech.herokuapp.com/commande/insert', { id, name, adresse, panier, Paiement, total })
      dispatch({ type: CREATE_COMMANDE_REQUEST })

      if (commande) {
        dispatch({ type: CREATE_COMMANDE_SUCCESS, playload: commande.data })

        localStorage.removeItem("panier");
      }

      else {
        dispatch({ type: CREATE_COMMANDE_FAIL, playload: 'error' })
      }

    }
    catch (error) {
      dispatch({ type: CREATE_COMMANDE_FAIL, playload: 'error' })
    }




  }

export const getAllCommand = (id) =>
  async (dispatch) => {
    const commande = await axios.post('http://127.0.0.1:8080/commande/', { id })

    dispatch({ type: GET_ALL_COMMANDE_BY_USER, playload: commande })


  }

export const getCommandInfo = (id) =>
  async (dispatch) => {
    const commande = await axios.post('http://127.0.0.1:8080/commande/commandinfo', { id })

    dispatch({ type: GET_COMMAND_DETAILS_REQUEST, playload: commande })


  }