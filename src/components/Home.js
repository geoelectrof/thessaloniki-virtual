import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { GiTowerFlag } from 'react-icons/gi';
import skgMap from "./images\\thessaloniki-map-bw.jpg";
import whiteTower from "./images\\Thessaloniki-white-tower.jpg"
import thessalonikiView from "./images\\thessaloniki-view.jpg"


export default function Home() {
    return  (
        <main>
            <Container fluid>
                <Col>
                    <h1 className="text-center mt-5"><GiTowerFlag size="2em" className="text-primary"/></h1>
                    <h1 className="display-2 text-center mb-5">Must see places in Thessaloniki</h1>
                    {/* <img src = "https://picsum.photos/1140/480" alt="thessaloniki" className="shadow-4" /> */}
                    <Image src={thessalonikiView}  width="1440px" className="d-block m-auto img-fluid"/>
                </Col>
                
            </Container>
            <Container>
                <section>
                    <Row>
                    <Col></Col>
                    <Col md={7} className="text-center">
                        <p className="lead mt-5"> 
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  */}
                        Thessaloniki is the Greek capital of Balkans, and the country’ s gastronomic and cultural capital.

                        With her countless Byzantine churches and grand cathedrals, with her beautiful monasteries and Mount Athos close by, Thessaloniki is love at first sight.

                        Is one of the largest student centers in South - Eastern Europe
                        while 15 th of its monuments are included on the UNESCO World Heritage List when there are around 800 in the whole world!
                        </p>
                        < p className = "lead mt-5" >
                            Whether you‘ re coming
                        for a weekend, a week, as a student, or stay forever, our travel guide brings together the best of everything the city has to offer.Our mobile friendly website designed, to help you visit a clutch of sights in a sort space of time.Add inspiring photography, and the best suggestions of the locals, and you have the best travel companion
                        for an unforgettable vacation.
                        </p>
                        < p className = "lead mt-5" >
                        Discover the homeland of Saints, Apostles, heroes, leaders, and philosophers. Discover the city which is justifiably considered as an open - air museum of Byzantine art.Discover Thessaloniki.

                        </p>
                        {/* <Button> Press </Button> */}
                    </Col>
                    <Col></Col>
                    </Row>
                </section>
                <section className="py-5">
                    <Row className="mt-5">
                        <h2 className="text-center display-4">SAMPLES</h2>
                    </Row>
                    <Row className = "my-5 align-items-center text-center">
                        <Col md={6}>
                            <Image src="https://picsum.photos/600/300" className = "img-fluid" />
                        </Col>
                        < Col md = {
                            6
                        }
                        className = "py-3 px-5" >
                            <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                            <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                            <p className="text-secondary">
                                A supplement to the North Capet;
                                the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                            </p>
                        </Col>
                    </Row>
                    < Row className = "my-5 align-items-center text-center" >
                        <Col md={{order: 'last', span:6}}>
                            <Image src="https://picsum.photos/600/300" className = "img-fluid" />
                        </Col>
                        <Col md={{order: 'first', span: 6}} className="py-3 px-5">
                            <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                            <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                            <p className="text-secondary">
                                A supplement to the North Capet;
                                the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                            </p>
                        </Col>
                    </Row>
                    <Row className = "my-5 align-items-center text-center">
                        <Col md={6}>
                            <Image src="https://picsum.photos/600/300" className = "img-fluid" />
                        </Col>
                        < Col md = {
                            6
                        }
                        className = "py-3 px-5" >
                            <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                            <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                            <p className="text-secondary">
                                A supplement to the North Capet;
                                the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                            </p>
                        </Col>
                    </Row>
                    < Row className = "my-5 align-items-center text-center" >
                        <Col md={{order: 'last', span:6}}>
                            <Image src="https://picsum.photos/600/300" className = "img-fluid" />
                        </Col>
                        <Col md={{order: 'first', span: 6}} className="py-3 px-5">
                            <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                            <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                            <p className="text-secondary">
                                A supplement to the North Capet;
                                the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                            </p>
                        </Col>
                    </Row>
                </section>
                    <Row className = "bg-light my-5 align-items-center text-center py-5" >
                        <Col md={{order: 'last', span:6}}>
                            <Image src={skgMap} alt="thessaloniki-map" className="img-fluid" width="400px"/>
                        </Col>
                        <Col className="p-5 text-center" md={{order: 'first', span:6}}>
                            <h3 className = "display-5"> The 18 Norwegian Scenic Routes </h3>
                            <p className="text-secondary">
                                Norwegian Scenic Routes are roads that run through unique Norwegian nature. Along the roads you will find artworks, viewpoints and rest areas with innovative architecture in beautiful landscapes.
                            </p>
                            <Button variant="lg" className="bg-primary text-white rounded-0 px-5 py-2">View All Places</Button>
                        </Col>
                    </Row>
                <section>
                    <Row>
                        <h3 className = "display-5 text-center p-5"> RECENT ADDED HIGHLIGHT </h3>
                    </Row>
                    <Row className="teaser">
                        <Col xs={{span:12}} className="teaser-block">
                            <div className="teaser-block-content text-center shadow">
                                <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                                <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                                <p className="text-secondary m-0">
                                    A supplement to the North Capet;
                                    the end point Havøysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                                </p>
                            </div>
                        </Col>
                        <Col xs={{order: 'first', span:12}}>
                            <Image 
                                src = {whiteTower}
                                className = "teaser-block-image img-fluid"
                            />
                        </Col>
                    </Row>
                </section>
            </Container>

        </main>
    )
}