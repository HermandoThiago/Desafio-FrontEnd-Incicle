import './header.css'
import logo from '../../Assets/LogoIncicle.jpeg'
import Container from '../container/container';
import React from "react";

const Header = () =>{
    return (
        <header>
            <Container>
                <img src={logo} alt="" />
            </Container>
        </header>
    )
}

export default Header
