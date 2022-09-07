import React, { useEffect } from 'react'
import './siginstyle.css'
import logo from './masterlogo.png'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSigin } from '../../action/UserAction'
import { Link, useNavigate } from 'react-router-dom';
export default function SiginPage() {
    const { user, error, loading } = useSelector((state) => state.UserSiginReducer)
    
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (user.name) {
            if (user.name.length > 0) {
                navigate('/')
            }
        }

    }


        , [user])
    function onFormSubmit(data) {
        dispatch(getUserSigin(data.email, data.password))

    }
    return (<>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='logopos'><div> <img src={logo} />  </div> </div>
            <div className='registration' style={{ height: '350px' }}>
                <div ><h3>S'identifier</h3></div>
                <div className='form-login'>

                    <div>
                        <label>Adresse e-mail ou numéro de téléphone portable</label>
                        <input type="email" {...register('email')} />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password"  {...register('password')} />
                    </div>
                    <div>
                        <input type="submit" id="sub" value="Continuer" />
                        {
                            loading && <center>Loading..</center>
                        }

                        {
                            error &&
                            <p style={{ color: ' red' }}>login ou mot de passe incorrect</p>
                        }
                        {
                            user.name && user.name.length > 0 && <p>Bonjour :{user.name}</p>
                        }
                    </div>
                    <div><p>En passant votre commande, vous acceptez les Conditions
                        générales de vente de Master TECH. Veuillez consulter notre Notice Protection de vos informations personnelles, notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.
                    </p></div>
                </div>
            </div>
        </form>
        <div className='textreg-btn'><div><p>Nouveau chez Master TECH</p></div></div>

        <div className='btn-reg'><Link to="/registration" id="linkbtn">Créer votre compte Amazon</Link></div>
    </>
    )
}
