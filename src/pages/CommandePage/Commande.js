import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { createCommande } from '../../action/CommandeAction';
import { LogOut } from '../../action/UserAction';
 
 

export default function Commande() {

    const [style1, setStyle] = useState('path');
    const [style2, setStyle2] = useState('path');
    const [style3, setStyle3] = useState('path2');
    const[Paiement,setPaiement]=useState('livraison')
    const { user } = useSelector((state) => state.UserSiginReducer)
    const { panier, error } = useSelector((state) => state.PanierReducer)
    const  commande  = useSelector((state) => state.addCommandeReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function sendCommande() {
        dispatch(createCommande(user.id,user.name,user.adresse,panier,Paiement,panier.reduce((a, c) => a + c.price * c.qty, 0.6)))
        if(commande.success){
            navigate('/historique')
        }
    }
    useEffect(()=>{
        if (!user.name){
            navigate('/sigin')
        }
        if (panier.length === 0){
            navigate('/panier')
        }
       
    })
    function deconnexion() {
        dispatch(LogOut())
    }
    const changeStyle = (e) => {

        switch (e.currentTarget.id) {
            case 'infoperso':
                if (style1 === 'path') {
                    setStyle("path2");
                }
                else {
                    setStyle("path");
                }
                break;
            case 'adresse':
                if (style2 === 'path') {
                    setStyle2("path2");
                }
                else {
                    setStyle2("path");
                }
                break;
            case 'modeliv':
                console.log(e.currentTarget.id)
                if (style3 === 'path') {
                    setStyle3("path2");
                }
                else {
                    setStyle3("path");
                }
                break;

        }


    };
    return (
         
        <header id="header">
            <div id="logo-group" style="width: 30%;">
    
    
    
                
                <div id="hide-menu" class="btn-header pull-right">
                    <span> <a data-action="toggleMenu" title="Collapse Menu"> </a> </span>
                </div>
    
    
               
            </div>
    
            <div id="user-instance">
    
    
            </div>
    
            
            <div class="pull-right" style="  width: 30%;">
              
    
    
    
                <div class="aa">
    
                    <a id="mainHelpLink" class="smart-style-5" target="_blank" title="Pulse Help Page">
                        <i class="fa fa-question-circle question-icon" aria-hidden="true"></i>
                    </a>
    
                    <a target="pulse_frame" id="pulse-logo"> 
                    <img src="./logo-ctx.png" alt="Pulse"/> </a>
    
    
                </div>
    
              
                <div class="js-hactive zt-notif" style="width: 200px;" data-action="toggleActive" id="notificationBtn"
                    title="Notifications">
                    <i class="fa  fa-cart-arrow-down  " style=" font-size: 32px; color :#fff">
                        <div style="position :absolute; top:40%; right: 48%; color:#fff;
                        background-color: orange;
                         width: 15px;
                         height: 15px;
                         border-radius: 50%;
                          padding: 5px;">
                            <p style=" font-size: 10px; color:#fff; font-weight: bold;"> 5</p>
                        </div>
                    </i>
    
                    <p style="color: #fff; font-size: 12px; position: relative; top:5px; margin-left: 10px;">0.000</p>
                </div>
    
                <div class="js-hactive zt-notif" style="display:none" data-action="toggleAltops" id="altopsNotificationBtn">
    
    
    
    
                </div>
           
                <div class=" ">
                    <a class="dropdown-toggle" data-toggle="dropdown"><i class="user-icon">OM</i></a>
                    <div class="dropdown-menu user-profile" id="dropdown">
                        <div class="user-info">
                            <div class="userprofile-icon">OsM</div>
                            <p title="Omar Moussi"><strong>Omar Moussi</strong></p>
                            <p title=" "><a href=" ">omar.moussi@concentrix.com</a></p>
                            <p id="profileWidgetUserOperationalRole" class="zt-s-userrole">Agent</p>
                        </div>
    
                        <div class="profile-signout">
                            <a id="logout" class="btn btn-default signout" title="Sign Out" data-action="userLogout"
                                data-logout-msg="You can improve your security further after logging out by closing this opened browser">Sign
                                Out</a>
                        </div>
    
    
                    </div>
                </div>
                
            </div>
     
    
    
        </header>
    )
}
