import React from "react"
import logo from '../../public/images/logo.svg'
import '../css/Header.css';

export default function Header() {
    return (
        <nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="title">Registration</h2> 
        </nav>
    )
}
