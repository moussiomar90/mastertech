import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCommandInfo } from '../../action/CommandeAction'
import Header from '../../component/Header/Header'
import './cmdstyle.css'
export default function SingleCommand() {
  const { id } = useParams()
  const { commande } = useSelector((state) => state.getCommandeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommandInfo(id))
  }, [])
  console.log(commande)
  return (<>
    <Header />

    {commande._id && 
    <main id="main" role="main" style={{ top: "100px" }}  >
      <Link to ="/historique"> Retour Historique</Link>
      <div className='cmd-section'>
        <div>  <h3 >Coordonnées :</h3>  </div>
        <div >  <p style={{ fontWeight: 'bold', fontSize: '15px' }} >Nom :
          <span style={{ fontWeight: '400' }}>{commande.user.name}</span></p> </div>
        <div >  <p style={{ fontWeight: 'bold', fontSize: '15px' }} >Adresse client  :
          <span style={{ fontWeight: '400' }}>{commande.adresse.useradresse}</span></p> </div>
        <div >  <p style={{ fontWeight: 'bold', fontSize: '15px' }} >Adresse facturation   :
          <span style={{ fontWeight: '400' }}>{commande.adresse.adressefacturation}</span></p> </div>
      </div>
      <div className='cmd-section'>
        <div>  <h3 >Payement :</h3>  </div>
        <div >  <p style={{ fontWeight: 'bold', fontSize: '15px' }} >Methode  :

          <span style={{ fontWeight: '400' }}> {commande.paiement.methode}</span></p> </div>

      </div>
      <div className='cmd-section'>
        <div>  <h3 >Produits :</h3>  </div>
        {
          commande.product.map((item) => (
            <div className='list-produit-cmd' >

              <span style={{ fontWeight: '400' }}> {item.name}</span>  <span>( quantité : {item.qty} ) </span>  <span>( Total : {item.qty * item.price} ) </span>  </div>
              
          ))
        }
        <h3>Total :{commande.product.reduce((a,c)=>a =a + c.qty *c.price,0)  }</h3>


      </div>
    </main> }
  </>
  )
}
