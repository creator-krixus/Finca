import React from 'react';
import './Home.css';
import portada from '../../img/portada.jpeg';

export default function Home() {
    return (
        <div className="portada">
            <img src={portada} className="foto"/>
        </div>
    )
}

