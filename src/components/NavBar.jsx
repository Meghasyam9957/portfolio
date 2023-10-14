import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ];

    const navContainerStyle = {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        padding: '0 20px',
    };

    const logoStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#FDCB46',
    };

    const navLinksStyle = {
        listStyleType: 'none',
        display: 'flex',
    };

    const linkItemStyle = {
        margin: '0 10px',
        cursor: 'pointer',
        fontSize: '16px',
        color: 'gray',
        transition: 'color 0.3s',
    };

    const mobileMenuIconStyle = {
        cursor: 'pointer',
        fontSize: '24px',
        color: 'gray',
    };

    const mobileNavLinksStyle = {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        color: 'white',
    };

    return (
        <div style={navContainerStyle}>
            <div>
                <h1 style={logoStyle}>Meghasyam</h1>
            </div>

            <ul style={navLinksStyle}>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        style={linkItemStyle}
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li style={linkItemStyle}>
                    <a href="#Projects">Projects</a>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                style={mobileMenuIconStyle}
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul style={mobileNavLinksStyle}>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            style={linkItemStyle}
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li style={linkItemStyle}>
                        <a href="#Projects" onClick={() => setNav(!nav)}>Projects</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default NavBar;

