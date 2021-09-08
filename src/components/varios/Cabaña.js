import React from 'react';
/* import cabaña from '../../img/cabaña.jpeg'; */
import cabaña2 from '../../img/cabaña2.jpeg';
import cabaña3 from '../../img/cabaña3.jpeg';
import azador from '../../img/azador.jpeg';
import comedor from '../../img/comedor.jpeg';
import cocina from '../../img/cocina.jpeg';
import piscina from '../../img/piscina.jpeg';

import './Cabaña.css'


export default function Cabaña() {
    return (
        <div>
            <h1>Informacion importante</h1>
            <h3>Cabaña para 15 personas</h3>
            <h3>Fin de semana 600.000</h3>
            <h3>Fin de semana festivo 750.000</h3>
            <h3>Deposito 60.000</h3>
            <h3>Taza de aseo 50.000</h3>
            <h3>Pesca deportiva</h3>
            <h3>Piscina de agua natural</h3>
            <h3>Amplia zona verde para camping (No incluye carpas)</h3>
            <h3>Fogón para azados y sancocho</h3>
            <h3>Para poder ingresar debe estar cancelada</h3>
        <div className="cabaña">
            <img src={piscina} className="fotoCabaña" alt="cabaña"/>
            <img src={cabaña3} className="fotoCabaña" alt="cabaña"/>
            <img src={azador} className="fotoCabaña" alt="cabaña"/>
            <img src={cabaña2} className="fotoCabaña" alt="cabaña"/>
            <img src={comedor} className="fotoCabaña" alt="cabaña"/>
            <img src={cocina} className="fotoCabaña" alt="cabaña"/>
        </div>
        </div>

    )
}
