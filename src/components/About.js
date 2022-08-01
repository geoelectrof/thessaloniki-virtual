import React, {useEffect, useState }  from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    const [author, setAuthor] = useState(null);

    const builder = imageUrlBuilder(sanityClient);

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>

    return (
        <main>
            <Container className="justify-center">
                <h1 className="display-2 text-center my-5 ">About</h1>
                <Row className = "justify-content-center  py-5" >
                    <Col lg={4}>
                        <h2 className="display-5 text-center ">About the Creator</h2>
                    </Col>
                    <Col lg={4}>
                        {/* <img src={urlFor(author.authorImage).url()} className="img-fluid"/> */}
                        <BlockContent 
                                    blocks = {author.bio}
                                    projectId = "5gbfyp9t"
                                    dataset = "production"
                                />
                    </Col>
                </Row>
                <Row className = "justify-content-center  py-5 mb-5" >
                    <Col lg={4}>
                        <h2 className="display-5 text-center ">
                            About <span className="font-weight-strong">"Thessaloniki Virtual Guide" </span>
                        </h2>
                    </Col>
                    <Col lg={4}>
                        <p>
                            Thessaloniki Virtual Guide was made with love as the final project of SHA's front end developer bootcamp.
                        </p>
                        <p>
                            The main technologies used to build this project are React, Bootstrap, and Sanity CMS.
                        </p>
                        <p>
                            I would like to thank the SHA team members for their support and help the last 7 months.
                        </p>
                    </Col>
                </Row>
                {/* <img />
                <div>
                    <section>
                        <img src={urlFor(author.authorImage).url()} />
                        <div>
                            <h1> 
                                Hey there. I'm{" "}
                                <span>{author.name}</span>
                            </h1>
                            <div>
                                <BlockContent 
                                    blocks = {author.bio}
                                    projectId = "5gbfyp9t"
                                    dataset = "production"
                                />
                            </div>
                        </div>
                    </section>
                </div> */}
            </Container>
        </main>
    )
}