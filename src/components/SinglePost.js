import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

import { Container, Image, Row, Col, Button } from "react-bootstrap"
import thessalonikiView from "./images\\thessaloniki-view.jpg"
import { FaWheelchair } from "react-icons/fa"
import { ImManWoman } from "react-icons/im"
import { ImLocation } from "react-icons/im"


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
            body
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>;

    return (
        <main>
            <article>
                <Container>
                    <header className="text-center pt-5 pb-3">
                        <p className="mb-0 text-secondary samples-sub-title">{singlePost.tags[0]}</p>
                        <h1 className="h1 display-2 text-primary samples-title">
                            <span className="">{singlePost.title}</span>
                        </h1>
                        <p className="px-5 pt-2 text-secondary">{singlePost.description}</p>
                    </header>
                    <Image src={singlePost.mainImage.asset.url}  width="1440px" className="d-block m-auto img-fluid"/>
                    <section>
                    <Row className="justify-content-center  pb-5">
                        
                        <Col lg={6} className="post-content">
                            <p className="lead mt-5"> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            <BlockContent 
                                className="img-fluid"
                                blocks={singlePost.body}
                                projectId="5gbfyp9t" 
                                dataset="production"
                                style={{color: "red"}}
                            />
                            </p>
                        </Col>
                        
                    </Row>
                </section>
                < section className = "bg-light my-5" >
                    <Row className="justify-content-center ">
                        <Col lg={6}>
                            <h2 className="font-weight-lighter text-center display-5 py-5 text-primary">
                                Useful Info
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center pb-5">
                        <Col lg={2} className="mb-3">
                            <ImLocation size="3rem" />
                            <h3 className="h4">GPS</h3>
                            <p>70.69444912, 24.67410824</p>
                        </Col>
                        <Col lg={2} className="mb-3">
                            <FaWheelchair size="3rem" className=""/>
                            <h3 className="h4">ACCESSIBILITY</h3>
                            <p>{singlePost.wheelchairAccess}</p>
                        </Col>
                        <Col lg={2} className="mb-3">
                            <ImManWoman size="3rem" />
                            <h3 className="h4">TOILETS</h3>
                            <p>{singlePost.toiletFacilities}</p>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <h2 className="font-weight-lighter text-center display-5 py-5 text-primary">
                                Useful Links
                            </h2>
                            <h3 className="h5">Archeological Museum of Thessaloniki</h3>
                            <a href="#" className="link-secondary">www.archaeology.gr</a>
                            <hr />
                            <h3 className="h5">Archeological Museum of Thessaloniki</h3>
                            <a href="#" className="link-secondary">www.archaeology.gr</a>
                            
                        </Col>
                    </Row>
                </section>
                </Container>


                {/* <header>
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
                </div> */}
            </article>
        </main>
    )
}