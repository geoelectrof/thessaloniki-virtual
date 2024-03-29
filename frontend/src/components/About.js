import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Container, Row, Col } from "react-bootstrap";
import { client } from "../client";

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    );

  return (
    <main>
      <Container className="justify-center">
        <h1 className="display-2 text-center my-5 ">About</h1>
        <Row className="justify-content-center  py-5">
          <Col lg={4}>
            <h2 className="display-5 text-center ">About the Creator</h2>
          </Col>
          <Col lg={4}>
            <BlockContent
              blocks={author.bio}
              projectId="5gbfyp9t"
              dataset="production"
            />
          </Col>
        </Row>
        <Row className="justify-content-center  py-5 mb-5">
          <Col lg={4}>
            <h2 className="display-5 text-center ">
              About{" "}
              <span className="font-weight-strong">
                "Thessaloniki Virtual Guide"{" "}
              </span>
            </h2>
          </Col>
          <Col lg={4}>
            <p>
              Thessaloniki Virtual Guide was made with love as the final project
              of SHA's front end developer bootcamp.
            </p>
            <p>
              The main technologies used to build this project are React,
              Bootstrap, and Sanity CMS.
            </p>
            <p>
              I would like to thank the SHA team members for their support and
              help the last 7 months.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
