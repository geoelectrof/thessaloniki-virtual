import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { Container, Image, Row, Col} from "react-bootstrap";

import { FaWheelchair } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
// import { ImLocation } from "react-icons/im"
import { FiExternalLink } from "react-icons/fi";

import { client} from "../client.js";

import './SingleHighlight.scss'

export default function SingleHighlight() {
  const [singleHighlight, setSingleHighlight] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            tags,
            description,
            wheelchairAccess,
            toiletFacilities,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            usefulLinks,
        }`
      )
      .then((data) => setSingleHighlight(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleHighlight)
    return (
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    );

  return (
    <main>
      <article>
        <Container>
          <header className="text-center pt-5 pb-3">
            <p className="mb-0 text-secondary samples-sub-title">
              {singleHighlight.tags[0]}
            </p>
            <h1 className="h1 display-2 text-primary samples-title">
              <span className="">{singleHighlight.title}</span>
            </h1>
            <p className="px-5 pt-2 text-secondary">
              {singleHighlight.description}
            </p>
          </header>
          <Image
            src={singleHighlight.mainImage.asset.url}
            width="1440px"
            className="d-block m-auto img-fluid"
          />
          <section>
            <Row className="justify-content-center  pb-5">
              <Col lg={6} className="single-highlight-content">
                <p className="lead mt-5">
                  <BlockContent
                    className="img-fluid"
                    blocks={singleHighlight.body}
                    projectId="5gbfyp9t"
                    dataset="production"
                    style={{ color: "red" }}
                  />
                </p>
              </Col>
            </Row>
          </section>
          <section className="bg-light my-5">
            <Row className="justify-content-center ">
              <Col lg={6}>
                <h2 className="font-weight-lighter text-center display-5 py-5 text-primary">
                  Useful Info
                </h2>
              </Col>
            </Row>
            <Row className="justify-content-center text-center pb-5">
              <Col lg={2} className="mb-3">
                <FaWheelchair size="3rem" className="" />
                <h3 className="h4">ACCESSIBILITY</h3>
                <p>{singleHighlight.wheelchairAccess}</p>
              </Col>
              <Col lg={2} className="mb-3">
                <ImManWoman size="3rem" />
                <h3 className="h4">TOILETS</h3>
                <p>{singleHighlight.toiletFacilities}</p>
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center">
              <Col lg={6}>
                <h2 className="font-weight-lighter text-center display-5 py-5 text-primary">
                  Useful Links
                </h2>
                <div>
                  {singleHighlight.usefulLinks.map((usefulLink, index) => {
                    return (
                      <div key={index}>
                        <h3 className="h5">{usefulLink.linkTitle}</h3>
                        <a
                          href={usefulLink.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-secondary"
                        >
                          {usefulLink.linkUrl}
                        </a>
                        <span className="link-secondary">
                          {" "}
                          <FiExternalLink />
                        </span>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </article>
    </main>
  );
}
