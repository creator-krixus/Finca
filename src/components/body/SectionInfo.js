import React from 'react'
import cascada from '../../img/cascada.jpeg';
import quiosko from '../../img/quiosko.jpeg';
import zonaVerde from '../../img/zonaVerde.jpeg';
import iguana from '../../img/iguana.jpeg';
import './SectionInfo.css';

export default function SectionInfo() {
    return (
        <div>
            <h2>El mejor destino para descansar en un espacio campestre </h2>
            <h2>a tan solo una hora de Medellin</h2>
            <div className="contenido">

                <div className="cascada">
                    <img src={iguana} className="fotoIguana"/>
                    <div className="textos_cascada">
                        <p>¡Naturaleza, Autenticida y </p>
                        <p>Exclusividad</p>
                        <p>Una experiencia que nunca</p>
                        <p>olvidaras!</p>
                    </div>
                    <img src={cascada} className="fotoCascada"/>                
                </div>

                <div className="separador"></div>

                <div className="quiosko">
                    <div className="textos_quiosko">
                        <p>Amplio espacio para tus celebraciones</p>
                        <p>y gran zona verde para que juegues con</p>
                        <p>tus amigos, familiares o disfrutes del camping</p>
                    </div>                    
                    <img src={quiosko} className="fotoQuiosko"/>
                    <img src={zonaVerde} className="fotoZonaVerde"/>
                </div>
                
            </div>
        </div>

    )
}
