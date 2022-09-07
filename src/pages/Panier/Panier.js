import React, { useEffect, useState } from 'react'
import Header from '../../component/Header/Header'
import './panier.css'
import { useDispatch, useSelector } from 'react-redux'
import { deletePanierItem, viderPanierItem } from '../../action/PanierAction'
import { Link, useNavigate } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createCommande } from '../../action/CommandeAction'
import Success from '../../component/Success/Success'
export default function Panier() {
  const { panier, } = useSelector((state) => state.PanierReducer)
  const { user } = useSelector((state) => state.UserSiginReducer)
  const { success, error, id } = useSelector((state) => state.addCommandeReducer)
  const [pay, setPay] = useState(false)
  const [panelstyle, setPanelStyle] = useState(false)
  const [paymod, setPaymod] = useState("livraison")
  const [modalsuc, setModealsuc] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

  }, [])
  function deleteItemPanel(id) {

    dispatch(deletePanierItem(id))

  }

  function ValiderCommande() {

    if (pay) {
      const total = panier.reduce((a, c) => a = a + c.qty * c.price, 0)

      if (total !== 0) {
        dispatch(createCommande(user.id, user.name, user.adresse, panier, paymod, total))
        dispatch(viderPanierItem())
        if (success) {
          setModealsuc(true)
        }


      }
      else {
        setPanelStyle(true)
      }


      if (user.name.length == 0) (
        navigate('/sigin')
      )

    }
    else {

      setPay(true)
    }
  }


  return (


    <div>
      <Header />

      <main style={{ paddingTop: '150px' }} >
        {
          modalsuc && <Success id={id} />
        }

        <div className='panier-main' style={{ border: panelstyle && '1px solid red' }} >

          <div className='main-text'>

            <p>Votre panier  </p>
            {
              panier.length == 0 && <center ><h2 style={{ padding: '10px' }}>votre panier est vide</h2></center>
            }

          </div>
          <div>
            {panier.map((item) => (
              <div className='panier-item-detail'>
                <div className='detail-img'> <img src={item.image} /></div>
                <div className='detail-text'>
                  <div> <Link to={`/produit/${item._id}`} style={{ fontWeight: '600', fontSize: '15px', color: 'black' }}>
                    {item.name}
                  </Link>
                  </div>
                  <div>
                    <p style={{ color: 'green' }}>En stock</p>
                  </div>

                  <div>
                    <div style={{ float: 'left' }}>
                      <select>
                        <option>{item.qty}</option>
                      </select>
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                      <div id="panier-option" onClick={() => deleteItemPanel(item._id)}>
                        Supprimer
                      </div>
                      <div id="panier-option">
                        Mettre de cote
                      </div>
                      <div id="panier-option">
                        Voir plus de produits similaires
                      </div>
                    </div>
                  </div>

                </div>
                <div style={{ position: 'relative', right: '0px', top: '-15px' }}>
                  <h3>Prix   : {item.price} DT</h3>
                  <h3> Total :{item.price * item.qty}  DT </h3>

                </div>

              </div>

            ))}





          </div>
          <div style={{ textAlign: 'right' }}>

            <h3>Sous-total ({panier.reduce((a, c) => a = a + c.qty, 0)} articles): {panier.reduce((a, c) => a = a + c.qty * c.price, 0)}DT</h3>

          </div>
        </div>
        {
          panier.length > 0 &&
          <div className="totalzone">
            <div style={{ marginBottom: '15px' }} >
              <p style={{ fontWeight: '400', fontSize: '15px' }}>
                Sous-total ({panier.reduce((a, c) => a = a + c.qty, 0)} articles):</p>
              <p style={{ fontWeight: 'bold', }}>{panier.reduce((a, c) => a = a + c.qty * c.price, 0)} DT</p>


            </div>

            {pay &&
              <div style={{ height: '250px', marginBottom: '25px' }} className="pay-section" >

                <div><h3>Payment Method  </h3></div>
                <div>
                  <input type="radio" id="huey" name="drone" value="huey" onChange={() => setPaymod('livraison')}
                    checked />
                  <label style={{ marginLeft: "5px" }}> Payment a la livraison</label>
                  <br />
                  <input type="radio" id="huey" name="drone" value="huey" onChange={() => setPaymod('cart')}
                  />
                  <label style={{ marginLeft: "5px" }}> Payment par Carte bancaire</label>


                </div>
                <div className='carte-list ' >

                  <select name="currency" style={{ height: '26px' }}>
                    <option value="VISA"> VISA&emsp; &emsp;&emsp;💶</option>
                    <option value="MASTER CARD"> MASTER &emsp;&emsp;💷</option>

                  </select>
                  &emsp;
                  <input type="text" value="15654684654354654" />

                  <input type="text" value={user.name && user.name} style={{ marginTop: '5px' }} />
                  <input type="text" value={user.adresse && user.adresse} style={{ marginTop: '5px', marginLeft: '5px' }} />
                  <input type="text" value={user.codepostal && user.codepostal} style={{ marginTop: '5px' }} />

                </div>
                <div>

                  {
                    modalsuc && <p style={{ color: 'green' }} >votre commande a bien été prise en compte</p>
                  }

                </div>
              </div>

            }
            <div> <button id="btncmd" onClick={() => ValiderCommande()}  >Passer la commande</button> </div>


          </div>

        }
      </main >
    </div >





  )
}
