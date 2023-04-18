import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import CustomModal from "./buttons/CustomModal/CustomModal";

const links = [
    { id: 0, name: 'About Us', link: '/' },
    { name: 'Art Center', link: '/art-center' },
    { name: 'Humanitarian Center', link: '/humanitarian-center' },
    { name: 'Support Us', link: '/support' },
    { name: 'Contacts', link: '/contacts' }
];

const dropLinks = [
    { name: 'Shelter for refugees', link: '/shelter' },
    { name: 'Our Team', link: '/team' },
    { name: 'Our Projects', link: '/projects' },
    { name: 'Media About Us', link: '/media' }
]

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar fixed="top" bg="dark" variant='dark' expanded={expanded} expand="lg">
            <Container>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Image src={logo} style={{ height: '50px' }} />
                    ATS 267
                </NavLink>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {links.map(item => {
                            return (
                                <NavLink
                                    key={item.name}
                                    onClick={() => setExpanded(false)}
                                    to={item.link}
                                    style={{color: 'white', textDecoration: 'none', marginRight: '15px', textTransform: 'uppercase'}}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })}
                    </Nav>
                    <NavDropdown style={{ color: 'white' }} title="MORE TABS" align='end' id="basic-nav-dropdown">
                        {dropLinks.map(link => {
                            return (
                                <NavDropdown.Item key={link.name}>
                                    <NavLink
                                        to={link.link}
                                        style={{color: 'black', textDecoration: 'none', marginRight: '15px', textTransform: 'uppercase'}}
                                    >
                                        {link.name}
                                    </NavLink>
                                </NavDropdown.Item>
                            ) 
                        })}
                    </NavDropdown>
                </Navbar.Collapse>
                <CustomModal />
            </Container>
        </Navbar>
    )
}

export default NavBar;
