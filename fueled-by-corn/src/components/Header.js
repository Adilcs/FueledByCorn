import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'


const Header = () =>{
    return(
        <header >
            
            
            <nav className ="navbar navbar-expand-sm bg-dark navbar-dark">

            <img src="../images/corn.png" alt="corn"/> 
            <img src="../images/gas-pump.png" alt="gas"/> 
            <h1 className = "headerText">Fueled by Corn</h1>

        
            
            <ul className = "navbar-nav ">
                <li className = "navbar-item bg-dark">
                    <button className="btn btn-outline-secondary btn-sm"><Link to ="/" className = "nav-link">Home</Link></button>
                </li>
                <li className = "navbar-item">
                    <button className="btn btn-outline-secondary btn-sm"><Link to ="/add" className = "nav-link">Add Marker</Link></button>
                </li>
            </ul>
            </nav>

        </header>

    );
};



export default Header;