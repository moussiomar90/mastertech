import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
import './style.css'
import { getAllCommand } from '../../action/CommandeAction'
import Header from '../../component/Header/Header'
import { Link, useNavigate } from 'react-router-dom'
export default function HistoriquePage() {
    const commande = useSelector((state) => state.listCommandeReducer)
    const { user } = useSelector((state) => state.UserSiginReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user.id){
            navigate ('/sigin')
        }
        dispatch(getAllCommand(user.id))
    }, [])
    
    return (
<>
        <div>
        <Header/>
        <main style={{ paddingTop: '150px' ,paddingLeft:'15px',paddingRight:'15px' }} >
            <div>
                <div className="row top">
                    <table border="1" >
                        <thead>
                            <tr>
                                <th>Référence De Commande	</th>
                                <th>Date</th>
                                <th>Prix Total	</th>
                                <th>Paiement</th>
                                <th>État</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commande.list ? (
                                commande.list.map((item) => (
                                    <tr>
                                        <td ><Link to ={`/singlecommande/${item._id}`}>{item._id}</Link> </td>
                                        <td >{item.date}	</td>
                                        <td >{item.totalprice} DT	</td>
                                        <td >{item.paiement.methode}	</td>
                                        <td  ><div id="traitement"> {item.etat}</div>	</td>
                                    </tr>
                                ))
                            ) : ''}



                        </tbody>
                    </table>

                </div>
            </div></main>

        </div></>
    )
}
