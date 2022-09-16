import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import { FaWheelchair } from "react-icons/fa"
import { ImManWoman } from "react-icons/im"
// import { ImLocation } from "react-icons/im"
import { FiExternalLink } from "react-icons/fi";

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
            body,
            usefulLinks,
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div class="loader-container"><div class="loader"></div></div>;

    function usefulLinksShow () {
        for (let i=0; i<singlePost.usefulLinks.length; i++) {
            
              return  (
                <div>
                    <h3 className="h5">{singlePost.usefulLinks[i].linkTitle}</h3>
                    <a 
                        href={singlePost.usefulLinks[i].linkUrl} 
                        target="_blank" 
                        rel = "noopener noreferrer"
                        className="link-secondary">
                            {singlePost.usefulLinks[i].linkUrl}
                        </a>
                           <span className="link-secondary"> <FiExternalLink /></span>
                    <hr />
                </div>
              )
        }
    }

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
                            <p>{usefulLinksShow()}</p>
                        </Col>
                    </Row>
                </section>
                </Container>
            </article>
        </main>
    )
}