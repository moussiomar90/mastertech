import React, { useEffect, useState } from 'react'
import Header from '../../component/Header/Header'
 
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategorie } from '../../action/ProductAction'

export default function Categorie() {
    const { id } = useParams()
    const [nbproduct, setNbProduct] = useState(0)
    const[detailShow,setDetailShow]=useState(false)
    
    const dispatch = useDispatch()
    const {product ,error,loading} = useSelector((state)=>state.ProductListByCategorieReducer)
     
    
    useEffect(() => {
        dispatch(getProductByCategorie(id))
    }, [id])
 if(product){console.log(product)}

 

    return (
        <>
            <Header />

 
            <main id="main" role="main" style={{ top: "100px" }}  >

 
                <div className='showbtn'>
                    <button type="button"  id="details-active-btn"   onClick={(e) => setDetailShow(true)}>
                        <i class="fas fa-th"></i>
                    </button>
                    <button type="button" id="details-active-btn" onClick={(e) => setDetailShow(false)}>
                        <i class="fas fa-list-ul"></i>
                    </button>


                </div>


                <div class="main-wrapper " style={{ padding: '10px' }}>

                    <div class="container" >

                        <div>

                        </div>
                        <div className={detailShow ? "item-list" : "item-list details-active"} >

                      
                        {loading ?    <center><i class="fas fa-circle-notch fa-spin"></i></center> :  
                        product.map((item)=>(


                       
                            <div class="item">
                                <div class="item-img">
                                    <img src="./../image/Desktop-Computer-PNG-File.png" />
                                    <div class="icon-list">
                                        <button type="button">
                                            <i class="fas fa-sync-alt"></i>
                                        </button>
                                        <button type="button">
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                        <button type="button">
                                            <i class="far fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="item-detail">
                                    <Link to={`/produit/${item._id}`} > {item.name}</Link>
                                    <div class="item-price">
                                        <span class="new-price">{item.price} DT </span>
                                        
                                    </div>
                                    <p>{item.description}</p>
                                    <Link to={`/produit/${item._id}`}    class="add-btn" id='link-btn'>Afficher les détails</Link>
                                </div>
                            </div>

))}
                   
                           

                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}
