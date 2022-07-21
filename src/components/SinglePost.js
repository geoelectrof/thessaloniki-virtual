import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import thessalonikiView from "./images\\thessaloniki-view.jpg"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name, 
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>;

    return (
        <main>
            <article>
                <Container>
                    <header className="text-center py-5">
                        <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                        <h1 className="h1 display-2 text-primary pb-3 samples-title">
                            <span className="">Museum</span>
                        </h1>
                    </header>
                    <Image src={thessalonikiView}  width="1440px" className="d-block m-auto img-fluid"/>
                    <section>
                    <Row>
                        <Col></Col>
                        <Col lg={6} className="">
                            <p className="lead mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <Button> Press </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <h2 className="font-weight-lighter">Useful Info</h2>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </section>
                </Container>


                <header>
                    <div>
                        <div>
                            <h1> {singlePost.title} </h1>
                            <div>
                                <img 
                                src={urlFor(singlePost.authorImage).url()}
                                // src={(singlePost.authorImage).url}
                                width="200px"
                                alt={singlePost.name} /></div>
                                <p>{singlePost.name}</p>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} width="400px" />
                </header>
                <div> 
                    <BlockContent 
                        className="blackBack"
                        blocks={singlePost.body}
                        projectId="5gbfyp9t" 
                        dataset="production"
                        style={{color: "red"}}
                    /> 
                </div>
            </article>
        </main>
    )
}