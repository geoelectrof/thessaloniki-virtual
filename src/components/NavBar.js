import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiTowerFlag } from 'react-icons/gi';
import {LinkContainer} from 'react-router-bootstrap'


export default function NavBar() {
    return (
            <div>
                    <Navbar collapseOnSelect expand="lg" bg="light">
                        <Container>
                            <LinkContainer 
                                to = "/"
                                exact 
                                >
                             <Navbar.Brand href="#home">
                                <GiTowerFlag size="1.5em" className="text-primary"/>
                                Thessaloniki Virtual Guide
                            </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <LinkContainer 
                                    to = "/"
                                    exact 
                                    activeClassName = "text-primary"
                                    className = "nav-item nav-link">
                                    <Nav.Link >
                                            HOME 
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer 
                                    to="/post" 
                                    activeClassName = "text-primary"
                                    className="nav-item nav-link">
                                    <Nav.Link>
                                        HIGHLIGHTS
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer 
                                    to = "/about" 
                                    activeClassName = "text-primary"
                                    className = "nav-item nav-link" >
                                    <Nav.Link>
                                        ABOUT 
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer 
                                    to = "/contact" 
                                    activeClassName = "text-primary"
                                    className = "nav-item nav-link" >
                                    <Nav.Link>
                                        CONTACT 
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
    )
}