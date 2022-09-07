import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CreateUser, UpdateUser } from '../../action/UserAction'
import BottomBar from '../../component/BottomBar/BottomBar'
import Brands from '../../component/Brands'
import Menu from '../../component/Menu/Menu'
import NavBar from '../../component/NavBar/NavBar'

export default function ProfilePage() {
    const { user } = useSelector((state) => state.UserSiginReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [adresse, setAdresse] = useState(user.adresse)
    const [codepostal, setCodepostal] = useState(user.codepostal)
    const [password, setPassword] = useState('')
    function upDateUser (e){
        e.preventDefault()
        console.log(name, email, adresse,codepostal)
        dispatch(UpdateUser(name, email, adresse,codepostal))

        
    }
    useEffect(()=>{
        if (!user.name){
            navigate('/sigin')
        }
    })
   
    return (

        <div className="grid-container">

            <header className="row">

                <NavBar />

            </header>



            <main>
                <div>

                    <Menu />
                    <div>
                        <div className="row center">


                            <div className="siginform">
                                <form className="form" >
                                    <div>
                                        <h1>User Profile</h1>
                                    </div>
                                    <div className='formdata'>


                                        <div >
                                            <label htmlFor="email">Email address</label>
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            ></input>
                                        </div>

                                        <div>
                                            <label htmlFor="password">Nom é Prenom :  </label>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="nom"
                                                value={name}
                                                required
                                                onChange={(e) => setName(e.target.value)}

                                            ></input>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="password">Address
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="adress"
                                                value={adresse}
                                                required
                                                onChange={(e) => setAdresse(e.target.value)}


                                            ></input>
                                        </div>
                                        <div>
                                            <label htmlFor="password"> CodePostal

                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="codepostal"
                                                value={codepostal}
                                                required
                                                onChange={(e) => setCodepostal(e.target.value)}
                                            ></input>
                                        </div>



                                       
                                    </div>
                                    <div className='validation'>
                                        <div><label />
                                            <button className="Panier" id='sigin' type="submit" onClick={upDateUser} >
                                            Modifier mes info
                                            </button>
                                        </div>
 
                                    </div>

                                </form>



                            </div>
                            <div className="brands">
                                <div className="child"> </div>
                                <Brands />
                                <Brands />
                                <Brands />
                                <Brands />
                                <Brands />
                                <div className="child"> </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <footer className="row center">
                <BottomBar />
            </footer>

        </div>
    )
}
