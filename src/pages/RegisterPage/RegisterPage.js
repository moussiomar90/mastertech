import React  from 'react'
import './siginstyle.css'
import logo from './masterlogo.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUser } from '../../action/UserAction';
export default function RegisterPage() {
     const { user ,error,loading } = useSelector((state) => state.UserRegisterReducer)
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const dispatch = useDispatch()
 
    function onFormSubmit(data) {
        dispatch (CreateUser(data))
        if (data.password === data.repassword) {

            console.log(data)
        }
        
        else {
             
            console.log('Veiller verifier le MDP tapé ')
        }


    }
    return (<>
        <form onSubmit={handleSubmit(onFormSubmit)}>  </form>
        <div className='logopos'><div> <img src={logo} />  </div> </div>
        <div className='registration' style={{ height: '650px' }}>
            <div ><h3>Créer un compte</h3></div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='form-login'>

                    <div>
                        <label>Nom :</label>
                        <input type="text" {...register('name', { required: true })} style={{border: errors.name && '1px solid red'}}/>
 
                    </div>
                    <div>
                        <label>Adresse e-mail ou numéro de téléphone portable :</label>
                        <input type="text"  {...register('email', { required: true })} style={{border: errors.email && '1px solid red'}}/>

                    </div>
                    <div>
                        <label style={{width :'100%' ,float :'left'}}>Password</label>

                        <input type="password"  {...register('password', { required: true })} style={{width :'48%' ,float :'left' ,border: errors.password && '1px solid red'}}/>
                       
                        <input type="password" {...register('repassword', { required: true })} style={{width :'48%',float :'left'  ,border: errors.repassword && '1px solid red'}}/>
                        <p style={{width :'100%' ,float :'left', marginLeft: '5px' }}>
                            <i class="fa-solid fa-info" style={{ marginRight: '5px' }}></i>
                            <span  >Les mots de passe doivent comporter au moins 6 caractères.</span>
                        </p>
                    </div>
                   
                    <div>
                        <label>Adresse </label>
                        <input type="text" {...register('adresse', { required: true })} style={{border: errors.adresse && '1px solid red'}}/>
                    </div>
                    <div>
                        <label>Code postal </label>
                        <input type="text" {...register('cp', { required: true })} style={{border: errors.cp && '1px solid red'}}/>
                    </div>
                    <div>
                        <input type="submit" id="sub" value="Continuer"  />
                        {
                            loading && 'Loading...'
                        }
                        {
                           error && <center><p style={{color:'red'}} >erreur d'enregistrement de data</p></center>
                        }
                         {
                            user.name && <center><p style={{color:'green',fontWeight:'bold'}} >compte créé avec succes  </p></center>
                        }
                    </div>

                    <div><p>By creating an account, you agree to Amazon's <span style={{ color: 'blue' }}>Conditions of Use</span> and <span style={{ color: 'blue' }}>Privacy Notice. </span></p></div>
                    <div className='notif-section'>Vous avez déjà un compte? <Link to="/sigin" style={{ color: 'blue' }}>S'identifier</Link></div>
                </div>
            </form>
        </div>

    </>
    )
}
