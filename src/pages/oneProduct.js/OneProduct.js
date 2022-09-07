import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addPanierItem, getPanier } from '../../action/PanierAction'
import { getProductById } from '../../action/ProductAction'
import Alert from '../../component/Alert/Alert'
import Header from '../../component/Header/Header'
import GetDateLiv from '../../Utiles/GetDateLiv'
import getGeoInfo from '../../Utiles/getGeoInfo'
import './style.css'

export default function OneProduct() {
    const [qty, setQty] = useState(0)
    const params = useParams()
    const [country, SetCountry] = useState()
const[jour,SetJour]=useState()

 
    console.log(GetDateLiv())
    const { productID, error, loading } = useSelector((state) => state.ProductIdReducer)

    const { parnier } = useSelector((state) => state.PanierReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductById(params.id))
    }, [error])

    function addQtyhandler(e) {
        e.preventDefault()
        console.log(productID.data.countInStock)

        if (qty < productID.data.countInStock) {
            setQty(qty + 1)
        }

    }
    function reduceQtyhandler(e) {
        e.preventDefault()
        console.log(productID.data.countInStock)

        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    function addPanierItemHandler() {

        dispatch(addPanierItem({ ...productID.data, qty }))

    }

    function getGeoInfo() {

        axios.get('http://ip-api.com/json').then((response) => {
            let data = response.data;

            SetCountry(data.country)

        }).catch((error) => {
            console.log(error);
        });

    };

    getGeoInfo()
    function addPanierItemHandler(){
          
        dispatch( addPanierItem({...productID, qty }))

   
   }
    return (

        <div>
            <Header />

            <main style={{ paddingTop: '150px' }}>

                <div style={{ marginLeft: '10px', position: 'absolute', top: '15%' }}>
                    <Link to={`/categorie/${productID.category_type}`} ><h3>← Revenir à la Categorie </h3></Link>
                    </div>
                    
                {!error ?
                    productID.name ?
                        <div className='product-item-grid'>
                            <div className='main-image'>
                                <img src="./../image/Desktop-Computer-PNG-File.png" />
                            </div>
                            <div className='product-info' >
                                <div>

                                    <h2>



                                        {productID.name}
                                    </h2>
                                </div>
                                <div className='marque-item'>
                                    <p>Marque :   {productID.brand}</p>
                                    <p>
                                        <i class="fa-solid fa-location-dot" style={{ marginRight: '5px' }}></i>
                                        Votre adresse de livraison:  <i> {country}</i> </p>
                                </div>
                                <div>
                                    {productID.rating} sur 5 étoiles
                                </div>
                                <div className='price-item'>
                                    <p>  {productID.price}<span style={{ fontSize: '12px', position: 'relative', top: '-5px', marginLeft: '5px' }}>DT</span></p>
                                </div>
                                <div className='description-product'>
                                    Description :

                                    <h3>



                                        {productID.description}
                                    </h3>
                                </div>

                            </div>
                            <div className='pay-zone'  >
                                <div>
                                    <h3  >{productID.price}
                                    <span style={{ fontSize: '12px', position: 'relative', top: '-5px', marginLeft: '5px' }}>DT</span></h3>
                                </div>
                                {productID.countInStock > 0 &&                <div >
                                    Livraison à 7 DT <span style={{ fontWeight: 'bold' }}> {GetDateLiv(). weekday_t} { GetDateLiv(). weekday_numb} {GetDateLiv().month_t}.</span> <span style={{ color: 'blue' }}>Détails</span>
                                </div> }
                                {productID.countInStock > 0 ?   <h4 style={{ color: 'green' }}>EN Stock  .</h4> :<h4 style={{ color: 'red' }}> Hors stock .</h4>}
                                <div  >
                                {productID.countInStock > 0 &&      <h4>Quantité : 

                                     <select onChange={(e)=>setQty(Number(e.target.value))}>
                                     <option value="0">0</option>
                                          
                                        {[...Array(productID.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select></h4> }


                                </div>
                                <div>
                                    <span>Expédié par <a>Master TECH</a></span>
                                    <br />
                                    <span  >Vendu par <a>PULEN - DT</a></span>
                                </div>

                                <div>

                                </div>
                                {productID.countInStock > 0 &&         <div className="paybtn">
       <button onClick={addPanierItemHandler} style={{ float:'left' ,marginBottom:'5px',color :'black'}}  disabled={qty == 0 ? true : false} >
           Ajouter au panier </button>
                                  
                                  
  <Link to ='/panier' style={{ backgroundColor: 'orange', padding :'2px' ,width:'90%',float:'left' ,borderRadius :'10px' ,textAlign:'center',color :'black' }}>
       Achetez maintenant </Link></div>
}
                          
                          </div>
                        </div> : <div>
                            <center>erreur de chargement des données. 
                                <br />
                                <Link to='/' > Revenir à la page d'accueil </Link>
                                </center> </div>
                    : ''}

            </main >
        </div >






    )
}
