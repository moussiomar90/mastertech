import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ProductListReducer, ProductIdReducer,
     ProductListByCategorieReducer } from '../reducers/ProductReducer.js'
import { UserSiginReducer } from '../reducers/UserReducer.js';
import { PanierReducer,   } from '../reducers/PanierReducer.js';
import { addCommandeReducer ,listCommandeReducer } from '../reducers/CommandeReducer.js';
import {CategorieListReducer} from '../reducers/CategorieReducer'
 import { UserRegisterReducer } from '../reducers/UserReducer.js';
 import { getCommandeReducer } from '../reducers/CommandeReducer.js';
 import { viderPanierItem } from '../action/PanierAction.js';
const initialState = {
  PanierReducer: {
    panier: localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : []

  },
  UserSiginReducer:{
    user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
  }
  
};

const reducer = combineReducers({
  ProductListReducer,
  ProductIdReducer,
  CategorieListReducer,
  ProductListByCategorieReducer,
  PanierReducer,
  UserSiginReducer,
  addCommandeReducer,
  listCommandeReducer,
  UserRegisterReducer,
  getCommandeReducer,
  viderPanierItem



});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;