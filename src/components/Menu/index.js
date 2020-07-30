import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="IzaFlix Logo"/>
            </Link>
            
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;