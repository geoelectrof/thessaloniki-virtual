import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { GiTowerFlag } from "react-icons/gi";
import Nav from "react-bootstrap/Nav";
import { FaHeart } from "react-icons/fa";

import "../custom.scss"

export default function Footer() {
  return (
    <footer>
      <Container fluid className="m-0 bg-dark text-light py-5 mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <p className="">
                <GiTowerFlag size="2.5em" className="text-primary" />
              </p>
              <h4 className="m-0 p-0">Thessaloniki Virtual Guide</h4>
              <p className="text-light mt-2">
                Thessaloniki Virtual Guide is a project for people to meet the
                city of Thessaloniki. Must see places and highlights available
                with all the info you need.
              </p>
            </Col>
            <Col md={2}></Col>
            <Col md={3}>
              <h5 className="m-0 p-0">Navigation</h5>
              <ul className="list-unstyled pt-2">
                <li>
                  <LinkContainer
                    to="/"

                    activeClassName="text-primary"
                    className="nav-item nav-link"
                  >
                    <Nav.Link>
                      HOME
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li>            
                  <LinkContainer
                    to="/highlights"
                    activeClassName="text-primary"
                    className="nav-item nav-link "
                  >
                    <Nav.Link>
                      HIGHLIGHTS
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li>                 
                  <LinkContainer
                    to="/about"
                    activeClassName="text-primary"
                    className="nav-item nav-link "
                  >
                    <Nav.Link>
                      ABOUT
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li>
                  <LinkContainer
                    to="/contact"
                    activeClassName="text-primary"
                    className="nav-item nav-link "
                  >
                    <Nav.Link>
                      CONTACT
                    </Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="m-0 p-0">
                {" "}
                <a
                  href="https://socialhackersacademy.org/"
                  className="nav-item nav-link text-light"
                >
                  <FaHeart /> Thank You SHA
                </a>
              </h5>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
