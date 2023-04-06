import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Col, Image, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { client, urlFor} from "../client.js"

import { GiTowerFlag } from 'react-icons/gi';
import thessalonikiView from "../images/thessaloniki-view.jpg"
import skgMap from "../images/thessaloniki-map-bw.jpg";
import { FaWheelchair } from "react-icons/fa"

import './Home.scss'


const Home = () => {

  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
      const query = '*[_type == "post"]';

      client.fetch(query)
          .then((data) => {
          // setWorks(data);
          setFilterWork(data.filter((work) => work.tags.includes("SELECTED")));
      });
  }, []);

  return (
    <>
      <Container fluid className="pb-5">
        <Col>
          <h1 className="text-center mt-5">
            <GiTowerFlag size="2em" className="text-primary" />
          </h1>
          <h1 className="display-2 text-center mb-5">
            Must see places in Thessaloniki
          </h1>
          <Image
            src={thessalonikiView}
            width="1440px"
            className="d-block m-auto img-fluid"
          />
        </Col>
      </Container>
      <Container>
        <section>
          <Row>
            <Col></Col>
            <Col md={7} className="text-center">
              <p className="lead mt-5">
                Thessaloniki is the Greek capital of Balkans, and the country’ s
                gastronomic and cultural capital. With her countless Byzantine
                churches and grand cathedrals, with her beautiful monasteries
                and Mount Athos close by, Thessaloniki is love at first sight.
                Is one of the largest student centers in South - Eastern Europe
                while 15 th of its monuments are included on the UNESCO World
                Heritage List when there are around 800 in the whole world!
              </p>
              <p className="lead mt-5">
                Whether you‘ re coming for a weekend, a week, as a student, or
                stay forever, our travel guide brings together the best of
                everything the city has to offer.Our mobile friendly website
                designed, to help you visit a clutch of sights in a sort space
                of time.Add inspiring photography, and the best suggestions of
                the locals, and you have the best travel companion for an
                unforgettable vacation.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </section>

        <section className="py-5">
          <Row className="mt-5">
            <h2 className="text-center display-4">SELECTED HIGHLIGHTS</h2>
          </Row>
          {filterWork.map((work, index) => (
            <Row
              key={index}
              className="py-5 border-bottom border-2 border-dark"
            >
              <Col md={6} className="py-3 pe-5 mr-5">
                <p className="mb-0 text-secondary samples-sub-title">
                  {work.tags[0]}
                </p>
                <Link
                  to={"/highlights/" + work.slug.current}
                  key={work.slug.current}
                  className="text-decoration-none"
                >
                  <h3 className="h1 display-5 text-primary pb-3 samples-title">
                    <span className="border-bottom border-2 border-primary pb-1">
                      {work.title}
                    </span>
                  </h3>
                </Link>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <p className="pt-3 pb-0">
                  <FaWheelchair size="1.2rem" className="text-secondary mr-5" />
                  <span className="text-secondary ps-2 ">
                    {work.wheelchairAccess}
                  </span>
                </p>
              </Col>
              <Col md={6}>
                <div className="app__work-img app__flex">
                  <img
                    src={urlFor(work.mainImage)}
                    alt={work.name}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          ))}
        </section>

        <section>
          <Row className="bg-light my-5 align-items-center text-center py-5 mb-5">
            <Col md={{ order: "last", span: 6 }}>
              <Image
                src={skgMap}
                alt="thessaloniki-map"
                className="img-fluid"
                width="400px"
              />
            </Col>
            <Col className="p-5 text-center" md={{ order: "first", span: 6 }}>
              <h3 className="display-5">Discover Thessaloniki</h3>
              <p className="text-secondary">
                Discover the homeland of Saints, Apostles, heroes, leaders, and
                philosophers.Discover the city which is justifiably considered
                as an open - air museum of Byzantine art. Discover Thessaloniki.
              </p>
              <Button
                variant="lg"
                className="bg-primary text-white rounded-0 px-5 py-2"
              >
                <Link
                  to="/post"
                  // activeClassName = "text-light"
                  className="nav-item nav-link text-decoration-none text-light"
                >
                  VIEW ALL HIGHLIGHTS
                </Link>
              </Button>
            </Col>
          </Row>
        </section>
      </Container>

      <Button>press me</Button>
    </>
  );
}

export default Home