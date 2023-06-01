import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.svg'
import Buttons from '../elements/Buttons'

export default function Header() {
    return (
        <header className="nv">
            <div className="tcontainern">
                <div className="nb">
                    <div className="ny">
                        <h1 className="sv">
                            <Link to="/">
                                <img src={Logo} alt="Cube" width="32" height="32"/> 
                            </Link>
                        </h1>
                    </div><button id="tc" className="tc" aria-controls="primary-menu" aria-expanded="false"><span className="im">Menu</span> <span className="th"><span className="tp"></span></span></button>
                    <nav id="nw" className="nw">
                        <div className="nx">
                            <ul className="ig h n_">
                                <li>
                                    <Link to="#">Secondary page</Link>
                                </li>
                            </ul>
                            <ul className="ig n_">
                                <li>
                                    <Link to="#">
                                        <Buttons isPrimary isSmalle>Sign up</Buttons>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
