import React from "react"
import { Container, Col, Row,  } from "react-bootstrap"
import { GiTowerFlag } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";


export default function Footer(){
    return (
        <footer>
            <Container fluid className = "m-0 bg-dark text-light py-5 mt-5" >
                <Container>
                    <Row>
                        <Col md={4}>
                            <p className=""><GiTowerFlag size="2.5em" className="text-primary"/></p>
                            <h4 className="m-0 p-0">Thessaloniki Virtual Guide</h4>
                            <p className="text-light mt-2">
                                Thessaloniki Virtual Guide is a project for people to meet the city of Thessaloniki. Must see places and highlights available with all the info you need. 
                            </p>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={3}>
                            <h5 className="m-0 p-0">Navigation</h5>
                            <ul className="list-unstyled pt-2">
                                <li className="text-white">
                                    <NavLink 
                                        to = "/" exact
                                        activeClassName = "text-primary"
                                        className = "nav-item nav-link text-light" >
                                            HOME 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/post" 
                                        activeClassName = "text-primary"
                                        className="nav-item nav-link text-light">
                                            HIGHLIGHTS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to = "/about" 
                                        activeClassName = "text-primary"
                                        className = "nav-item nav-link text-light" >
                                            ABOUT 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to = "/contact" 
                                        activeClassName = "text-primary"
                                        className = "nav-item nav-link text-light" >
                                            CONTACT 
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5 className="m-0 p-0"> <a href="https://socialhackersacademy.org/" className="nav-item nav-link text-light"><FaHeart /> Thank You SHA</a></h5>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </footer>
    )

}