import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '/assets/logo-pack/black.png'
function Nav(props) {
    const pages = ['About', 'Projects', 'Contact', 'Resume'];

    return(
    <ul className="nav-list">
        {pages.map(page => (
            <li className="list-item" key={page}>
                <a href={'#' + page.toLowerCase()}
                    onClick={() => props.setCurrentPage(page)}
                    className={props.currentPage === page ? 'navActive' : 'nav-link'}
                >
                    <h2>{page}</h2>
                </a>
            </li>
        ))}
    </ul>
    // <Navbar bg="light" expand="lg">
    //     <Navbar.Brand>
    //         <h1>ali rueter</h1>
    //     </Navbar.Brand>
    //     <Nav className="mr-auto">
    //             <Nav.link>
                    
    //             </Nav.link>
    //     </Nav>
    // </Navbar>
    )
}

export default Nav;