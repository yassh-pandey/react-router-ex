import React from 'react'
import './../styles/Navbar.css'
import atom_logo from './../icons/atom.svg' 
import {NavLink, Link, withRouter} from 'react-router-dom' 
function Navbar(props) {
    //Programatic redirect
    // setTimeout(()=>{
    //     props.history.push("/contact")
    // }, 2000) 
    return (
        <div className="Navbar-wrapper">
            <div className="Navbar-logo-wrapper">
                <img src={atom_logo} alt="atom" className="Navbar-logo" />
            </div>
            <ul className="Navbar-content">
                <li className="Navbar-links-wrapper"><NavLink to="/">Home</NavLink></li>
                <li className="Navbar-links-wrapper"><NavLink to="/about">About</NavLink></li>
                <li className="Navbar-links-wrapper"><NavLink to="/Products">Products</NavLink></li>
                <li className="Navbar-links-wrapper"><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default withRouter(Navbar) //HOC that lets us use programatic redirects on App component too

