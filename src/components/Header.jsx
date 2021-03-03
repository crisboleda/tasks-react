
import React from 'react'
import '../styles/Header.css'

// Images
import wave_header from '../images/wave_header.svg'
import wave_desktop from '../images/wave_desktop.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="header_top">
                <Link className="hyperHref" to="/"><i className="fas fa-tasks"></i>  Tareas becall</Link>
            </div>
            
            <div className="container_waves">
                <img src={wave_desktop} alt="Wave of header" className="wave_desktop" />
                <img src={wave_header} alt="Wave of header" className="wave_header" />
            </div>

            <div className="option_contact">
                <Link className="hyperHref" to="/contact"><b>Contactar  </b> <i className="fas fa-id-card-alt fa-lg"></i></Link>
            </div>
        </header>
    )
}

export default Header