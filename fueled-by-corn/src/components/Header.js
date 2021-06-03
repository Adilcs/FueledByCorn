import React from 'react';
import '../App.css'


const Header = () =>{
    return(
        <header >
        <div className = "header">
            <img src="../images/corn.png" alt="corn"/> 
            <img src="../images/gas-pump.png" alt="gas"/> 
            <h1 className = "headerText">Fueled by Corn</h1>
        </div>
        </header>
    );
};



export default Header;