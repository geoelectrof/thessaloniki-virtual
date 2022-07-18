import React from "react"
import { Button, Container, Row, Col, Image } from "react-bootstrap"
import { GiTowerFlag } from 'react-icons/gi'

export default function Home() {
    return  (
        <main>
            <Container fluid>
                <Col>
                    <h1 className="text-center mt-5"><GiTowerFlag size="2em" className="primary"/></h1>
                    <h1 className="display-2 text-center mb-5">Must see places in Thessaloniki</h1>
                    {/* <img src = "https://picsum.photos/1140/480" alt="thessaloniki" className="shadow-4" /> */}
                    <Image src="https://picsum.photos/1440/480" className="img-fluid"/>
                </Col>
                
            </Container>
            <Container>
                <Row>
                <Col></Col>
                <Col md={7} className="text-center">
                    <p className="lead mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <Button> Press </Button>
                </Col>
                <Col></Col>
                </Row>
                <Row className="mt-5">
                    <h2 className="text-center display-5">SAMPLES</h2>
                </Row>
                <Row className="my-5">
                    <Col>
                        <Image src="https://picsum.photos/600/400" className = "img-fluid" />
                    </Col>
                    <Col>
                        <h3>Museum</h3>
                        <p>
                            A supplement to the North Capet;
                            the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                        </p>
                    </Col>
                </Row>
                < Row className = "my-5" >
                    <Col>
                        <h3>Museum</h3>
                        <p>
                            A supplement to the North Capet;
                            the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                        </p>
                    </Col>
                    <Col>
                        <Image src="https://picsum.photos/600/400" className = "img-fluid" />
                    </Col>
                </Row>

            </Container>
        </main>
    )
}