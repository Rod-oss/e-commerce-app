import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    let ubicacionPrincipal = window.scrollY
      window.onscroll = function() {
              let desplazamientoActual = window.scrollY
              if(ubicacionPrincipal >= desplazamientoActual) {
                  document.getElementById('navbar').classList.add('top-0')
                  document.getElementById('navbar').classList.remove('-top-20')
              } else {
                  document.getElementById('navbar').classList.remove('top-0')
                  document.getElementById('navbar').classList.add('-top-20')
              }
              ubicacionPrincipal = desplazamientoActual
             }
    return (
      <nav>
        <img src={logo} alt="Logo de la tienda" />
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
   
        <div>
          <CartWidget />
        </div>
      </nav>
    )
  };

  
  export default NavBar;