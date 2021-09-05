import React from 'react';
import './Footer.css';
import whast from '../../img/whastup.png'


export default function Footer() {
    return (
        <div className="footer">
            <p>Barbosa Antioquia</p>
            <p>Click sobre el icono de whats up para contactarme</p>
            <a href="https://api.whatsapp.com/send?phone=3114191234&text=Escribe"><img src={whast} width="100px"/></a>
        </div>
    )
}
