import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
export default function Success(props) {
    const [visiblity, setVisibility] = useState(true)
    const [spiner, setSpiner] = useState(false)
    const navigate = useNavigate()
     

    const wait = function (duration = 1000) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration)
        })
    }
    function visiblityAndRedirect() {
        
        setSpiner(true)
        setTimeout(() => {
            setSpiner(false)
            setVisibility(false)
            navigate(`/singlecommande/${props.id}`)
        }, 3000);
       



    }
    return (<>
        <div className='gray' style={{ visibility: visiblity ? 'visible' : 'hidden' }}>

        </div>
        <div className='success' style={{ visibility: visiblity ? 'visible' : 'hidden' }}>

            <div className='iconcheck'>
                {spiner ? <i class="fas fa-circle-notch fa-spin fa-2xl "></i> : <i class="fa-solid fa-check fa-2xl  " ></i>}

                <i id="closebn" class="fa-1xl  fa-solid fa-xmark" onClick={() => visiblityAndRedirect()}></i>.
            </div>
            <div><center><h3>BRAVO</h3></center>

                <center><h3>Votre commande a bien été prise en compte : </h3></center>
                <center><a href='/historique'>Voir historique</a></center>

            </div>
        </div>

    </>
    )
}
