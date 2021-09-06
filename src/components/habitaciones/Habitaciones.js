import React from 'react'
import habitacion from '../../img/habitacion.jpeg';
import habitacion2 from '../../img/habitacion2.jpeg';
import habitacion3 from '../../img/habitacion3.jpeg';
import './Habitaciones.css'

export default function Habitaciones() {
    return (
        <div>
            <h1>Habitaciones</h1>
        <div className="habitaciones">
            <img src={habitacion} className="habitacion" alt="Habitacion"/>
            <img src={habitacion2} className="habitacion" alt="Habitacion"/>
            <img src={habitacion3} className="habitacion" alt="Habitacion"/>
        </div>
        </div>

    )
}
