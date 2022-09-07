import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategorieProduct } from '../../action/CategorieAction'

export default function Submenu() {
    const { categorie, loading } = useSelector((state) => state.CategorieListReducer)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCategorieProduct())
  
    }, [])
    return (
        <>

            <div className="submenu"   >
                <ul className="nav">

                    {
                        loading ? <div style={{ maxHeight: "54px", padding: '15px' }}><center><i class="fas fa-circle-notch fa-spin"></i></center></div> :

                            !categorie.data ? '' : (
                                categorie.data.map((x, y) => (<li>
                                    <a >{x.title}</a><div>
                                        {x.sous_cat.map((item) =>
                                            <div class="nav-column">
                                                <h3 id="Sous_Cat">{item.types.length > 0 && item.title}</h3>
                                                <ul style={{ paddingLeft: "0px" }} >
                                                    {item.types.map((types) =>
                                                    (
                                                        <li><Link to={`/categorie/${types._id}`}>{types.title}</Link></li>
                                                    )

                                                    )}
                                                </ul>
                                            </div>
                                        )

                                        } </div>


                                </li>))
                            )}







                </ul>
            </div>
        </>
    )
}
