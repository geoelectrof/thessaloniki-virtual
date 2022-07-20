import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiTowerFlag } from 'react-icons/gi';

export default function NavBar() {
    return (
        <header className="header">
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <GiTowerFlag size="1.5em" className="text-primary"/>
                            Thessaloniki Guide
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link href="#home"> */}
                            <NavLink 
                                to = "/" exact
                                activeClassName = "text-primary"
                                className = "nav-item nav-link" >
                                    HOME 
                            </NavLink>
                            {/* </Nav.Link> */}
                            <NavLink 
                                to="/post" 
                                activeClassName = "text-primary"
                                className="nav-item nav-link">
                                    HIGHLIGHTS
                            </NavLink>
                            < NavLink 
                                to = "/project"
                                activeClassName = "text-primary"
                                className = "nav-item nav-link" >
                                    PROJECTS
                            </NavLink>
                            < NavLink 
                                to = "/about" 
                                activeClassName = "text-primary"
                                className = "nav-item nav-link" >
                                    ABOUT 
                            </NavLink>


                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"> */}
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            {/* <NavLink to = "/" exact
                                activeClassName = "text-primary"
                                className = "nav-item nav-link" >
                                Virtual Guide 
                            </NavLink>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> */}


                {/* <nav>
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="nav-item"
                    >
                    Virtual Guide
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName = "text-white"
                    className="nav-item">
                    Blog Posts
                    </NavLink>
                    < NavLink to = "/project" className = "nav-item" >
                    Projects
                    </NavLink>
                    < NavLink to = "/about" className = "nav-item" >
                    About 
                    </NavLink>
                </nav> */}


                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        </header>
    )
}