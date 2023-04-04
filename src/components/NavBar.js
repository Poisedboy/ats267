import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../assets/logo.png';
import CustomModal from "./buttons/CustomModal";

const links = [
    { name: 'About Us', link: '/' },
    { name: 'Art Center', link: '/art-center' },
    { name: 'Humanitarian Center', link: '/humanitarian-center' },
    { name: 'Shelter For Refugees', link: '/shelter' },
    { name: 'Our Team', link: '/team' },
    { name: 'Our Projects', link: '/projects' },
    // { name: 'Blog', link: '/blog' },
    { name: 'Support Us', link: '/support' },
    { name: 'Media About Us', link: '/media' },
    { name: 'Contacts', link: '/contacts' }
];

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar fixed="top" bg="dark" variant='dark' expanded={expanded} expand="lg">
            <Container>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Image src={logo} style={{ height: '50px' }} />
                    ATS267
                </NavLink>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {links.map(item => {
                            return <NavLink
                                key={item.name}
                                onClick={() => setExpanded(false)}
                                to={item.link}
                                style={{color: 'white', textDecoration: 'none', marginRight: '5px', textTransform: 'uppercase'}}
                            >
                                {item.name}
                            </NavLink>
                        })}
                    </Nav>
                </Navbar.Collapse>
                <CustomModal />
            </Container>
        </Navbar>
    )
}

export default NavBar;