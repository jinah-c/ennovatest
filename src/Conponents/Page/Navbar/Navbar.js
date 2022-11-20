import React from 'react'
import LogoImg from '../../img/ennovalogo.png';
import LanImg from '../../img/lan.png';
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div className='Nav_Nav'>

        <Link to="MainPage" className='Nev_Logo'>
            <img 
            src={LogoImg}  
            alt='' />
        </Link>

        <div className='Nav_Link'>
            <NavLink to="MainPage">Home</NavLink>
            <NavLink to="Ennova">Ennova</NavLink>
            <NavLink to="FinancialPlatform">Financial Platform</NavLink>
            <NavLink to="Service">Service</NavLink>
        </div>

        <div className='Nav_Language'>
         <img className="Lan_Img" 
                src={LanImg}  
                alt='' />

                <p>KOREA</p>
        </div>


    </div>
  )
}

export default Navbar