import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from '../../action/UserAction';

import logo from './masterlogo.png';
export default function Navbar() {

    const { panier } = useSelector((state) => state.PanierReducer)
    const { user } = useSelector((state) => state.UserSiginReducer)
    const [userInfoshow, setUserInfoshow] = useState(false)
    const [userinf, SetUserInfo] = useState(user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

    }, [user, panier])

    function showInfo() {

        if (userInfoshow) {
            setUserInfoshow(false);

        }
        else {
            setUserInfoshow(true);
        }
    }
    const logout = () => {
        dispatch(LogOut())

    }
    return (
        <>

            <header id="header">
                <div id="logo-group" style={{ width: '30%' }}>




                    <div id="hide-menu" className="btn-header pull-right">
                        <span> <a data-action="toggleMenu" title="Collapse Menu">
                        </a> </span>
                    </div>



                </div>

                <div id="user-instance">


                </div>


                <div className="pull-right" style={{ width: '30%' }}>




                    <div className="aa">



                     
                        <Link to ={"/"} id="pulse-logo" style={{ top: "-1px" }}  >
                            <img src={logo} alt="Pulse" style={{
                                width: '150px',
                            }} /> </Link>


                    </div>


                    <Link to={'/panier'} className="js-hactive zt-notif" style={{ width: "200px" }} data-action="toggleActive" id="notificationBtn"
                        title="Notifications">
                        <i className="fa  fa-cart-arrow-down  " style={{ fontSize: '32px', color: '#fff' }}>
                            <div style={{
                                position: "absolute",
                                top: "40%",
                                right: "48%",
                                color: "#fff",
                                backgroundColor: "orange",
                                width: "30px auto",
                                height: "20px",
                                borderRadius: "50%",
                                padding: "5px"

                            }}>
                                <Link to={'/panier'} style={{
                                    fontSize: "10px",
                                    color: "#fff",
                                    position: 'relative',
                                    top: '-20px'

                                }} > {panier.reduce((a, c) => a = a + c.qty, 0)}</Link>
                            </div>
                        </i>

                        <p style={{
                            color: "#fff",
                            fontSize: "12px", position: "relative", top: "5px", marginLeft: "10px"
                        }} >{panier.reduce((a, c) => a = a + c.qty * c.price, 0)}</p>
                    </Link>

                    <div className="js-hactive zt-notif" style={{ display: "none" }}  >




                    </div>

                    {user.name && user.name.length > 0 ?
                        <div className=" "  >
                            <a className="dropdown-toggle" data-toggle="dropdown" onClick={showInfo}><i className="user-icon">{user.name[0].toUpperCase()}{user.name[1].toUpperCase()}</i></a>
                            <div className="dropdown-menu user-profile" id="dropdown" style={{ display: userInfoshow && 'block' }} >
                                <div className="user-info">
                                    <div className="userprofile-icon">{user.name[0].toUpperCase()}{user.name[1].toUpperCase()}</div>
                                    <p title="Omar Moussi"><strong>{user.name}</strong></p>
                                    <p title=" "><a href=" ">{user.email}</a></p>
                                    <Link to={`/historique`}>mon historique</Link>

                                </div>

                                <div className="profile-signout">
                                    <a id="logout" className="btn btn-default signout" title="Sign Out" data-action="userLogout" onClick={logout}>Sign
                                        Out</a>
                                </div>


                            </div>
                        </div> : <div> <Link to="/sigin" style={{ color: '#fff', fontWeight: 'bold' }}>Sigin</Link> </div>
                    }

                </div>



            </header>
        </>
    )
}
