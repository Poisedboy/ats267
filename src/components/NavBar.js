import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

const links = [
    { name: 'About Us', link: '/' },
    { name: 'Art Center', link: '/art-center' },
    { name: 'Humanitarian Center', link: '/humanitarian-center' },
    { name: 'Shelter For Refugees', link: '/shelter' },
    { name: 'Our Team', link: '/team' },
    { name: 'Our Projects', link: '/projects' },
    { name: 'Blog', link: '/blog' },
    { name: 'Support Us', link: '/support' },
    { name: 'Media About Us', link: '/media' },
    { name: 'Contacts', link: '/contacts' }
];

const NavBar = ({toggleBg}) => {
    const [expanded, setExpanded] = useState(false);
    
    const handleBg = () => {
        toggleBg(prevState => !prevState);
    };

    return (
        <Navbar fixed="top" bg="dark" variant='dark' expanded={expanded} expand="lg">
            <Container>
                <NavLink to="/"><Image src={logo} style={{height: '50px'}} />ATS267</NavLink>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="d-flex justify-content-around">
                        {links.map(item => {
                            return <NavLink key={item.name} onClick={() => setExpanded(false)} to={item.link}>{item.name}</NavLink>
                        })}
                        {/* <NavLink onClick={() => setExpanded(false)} to='/'>About Us</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to='/breakfast'>Сніданки</NavLink>    
                        <NavLink onClick={() => setExpanded(false)} to='/about'>Про нас</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to='/extra'>Extra</NavLink> */}
                        <Button variant="light" onClick={handleBg}>bg</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
