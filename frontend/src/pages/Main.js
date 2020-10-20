import React from 'react';
import logo from '../assets/logo.svg'


function Main({match}) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/67937973?v=4" alt="foto de dev"/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Javascripto dev </p>
                    </footer>
                </li>
            </ul>
        </div>
    )
}

export default Main;