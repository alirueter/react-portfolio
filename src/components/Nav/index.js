import React from 'react';

function Nav() {
    return(
        <header>
            <h2>
                <a href='/'>Ali Rueter</a>
            </h2>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Nav;