 
 
import HomePage from "./pages/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Categorie from "./pages/CategoriePage/Categorie";
import OneProduct from "./pages/oneProduct.js/OneProduct";
import Panier from "./pages/Panier/Panier";
import SiginPage from "./pages/SiginPage.js/SiginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HistoriquePage from "./pages/HistoriquePage/HistoriquePage";
import SingleCommand from "./pages/CommandePage/SingleCommand";
 
 
function App() {
  return (
 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/categorie/:id" element={<Categorie />}/>
    <Route path="/produit/:id" element={<OneProduct />}/> 
    <Route path="/panier" element={<Panier />}/> 
   <Route path="/sigin" element={<SiginPage />} />
   <Route path="/registration" element={<RegisterPage />} />
   <Route path="/historique" element={<HistoriquePage /> } />
   <Route path="/singlecommande/:id" element={<SingleCommand /> } />
     </Routes>
  </BrowserRouter>
   
  );
}

export default App;
