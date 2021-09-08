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
                    <img src={iguana} className="fotoIguana" alt="iguana"/>
                    <div className="textos_cascada">
                        <p>¡Naturaleza, Autenticidad y <br />
                        Exclusividad<br />
                        Una experiencia que nunca<br />
                        olvidaras!</p>
                    </div>
                    <img src={cascada} className="fotoCascada" alt="cascada"/>                
                </div>

                <div className="separador"></div>

                <div className="quiosko">
                    <div className="textos_quiosko">
                        <p>Amplio espacio para tus celebraciones<br />
                        y gran zona verde para que juegues con<br />
                        tus amigos, familiares o disfrutes del camping</p>
                    </div>                    
                    <img src={quiosko} className="fotoQuiosko" alt="quiosko"/>
                    <img src={zonaVerde} className="fotoZonaVerde" alt="zona verde"/>
                </div>
                
            </div>
        </div>

    )
}
