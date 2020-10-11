import React from 'react';

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
    )
}

export default Nav;