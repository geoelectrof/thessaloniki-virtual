import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"
// import { urlFor } from "../client.js"
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaWheelchair } from "react-icons/fa"

// import "./Work.scss"



import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);



export default function Post() {
    // CODE FROM JSM
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "post"]';

        sanityClient.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);

        if (item === 'All') {
            setFilterWork(works);
        } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
        }, 500);
    };
    // END OF  CODE FROM JSM, CONTINUED...



    // const [postData, setPost] = useState(null);

    // useEffect(() => {
    //     sanityClient
    //         .fetch(
    //             `*[_type == "post"]{
    //                 title,
    //                 slug,
    //                 mainImage{
    //                     asset->{
    //                         _id,
    //                         url
    //                     },
    //                     alt
    //                 }
    //         }`
    //         )
    //         .then((data) => setPost(data))
    //         .catch(console.error);
    // }, [])

    return (
        // ...CONTINUED CODE FROM JSM
        <Container>
            
            <h1 className="display-2 text-center my-5">Browse all the highlights</h1>

            <div className="app__work-filter">
                {['MUSEUMS', 'MONUMENTS', 'ARCHAEOLOGICAL SITES', 'RELIGIOUS SITES', 'HISTORICAL SITES', 'GARDENS', 'ALL'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </div>

            {/* < Row className = "my-5 align-items-center" >
                <Col md={{span: 6}} className="py-3 px-5">
                    <p className="mb-0 text-secondary samples-sub-title">MONUMENTS</p>
                    <h3 className="h1 display-5 text-primary pb-3 samples-title"><span className="border-bottom border-2 border-primary">Museum</span></h3>
                    <p className="text-secondary">
                        A supplement to the North Capet;
                        the end point Hav??ysund and the islands beyond offer a encounter with a thriving community on the coast of Finnmark.
                    </p>
                    <p className="pt-3 pb-0">
                        <FaWheelchair size="1.3rem" className="text-secondary" /> 
                        <span className="text-secondary">
                            Partially wheelchair accessible.
                        </span>
                    </p>
                </Col>
                <Col md={{span:6}}>
                    <Image src="https://picsum.photos/600/300" className = "img-fluid" />
                </Col>
            </Row> */}

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                <Row key={index} className="py-5 border-bottom border-2 border-dark" >
                    {/* <div className="app__work-item app__flex" key={index}> */}

                        {/* <div className="app__work-content app__flex"> */}
                            <Col md={6} className="py-3 pe-5 mr-5">
                                {/* <img
                                    src={work.mainImage.asset.url}
                                    alt={work.mainImage.alt}
                                    width="200px"
                                /> */}
                                {/* {console.log(work.mainImage.asset.url)} */}
                                {/* <div className="app__work-tag app__flex"> */}
                                <p className="mb-0 text-secondary samples-sub-title">{work.tags[0]}</p>
                                {/* </div> */}
                                <Link to={"/post/" + work.slug.current} key={work.slug.current} className="text-decoration-none">
                                    <h3 className="h1 display-5 text-primary pb-3 samples-title">
                                        <span className="border-bottom border-2 border-primary pb-1">
                                            {work.title}
                                        </span>
                                    </h3>
                                </Link>
                                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                                <p className="pt-3 pb-0">
                                    <FaWheelchair size="1.2rem" className="text-secondary mr-5" />
                                    <span className="text-secondary ps-2 ">
                                        {work.wheelchairAccess} 
                                    </span>
                                </p>
                            </Col>
                            <Col md={6}>
                                <div className="app__work-img app__flex">
                                    <img src={urlFor(work.mainImage)} alt={work.name} className="img-fluid" />
                                </div>

                            </Col>
                        {/* </div> */}
                    {/* </div> */}
                </Row>
                ))}
            </motion.div>
            
        </Container>
        //END OF JSM CODE


    //     <main>
    //         <section>
    //             <h1>Blog Posts Page</h1>
    //             <h2>Welcome to our blog posts</h2>
    //             <div>
    //             {postData && postData.map((post, index) => (

    //                 <article>
    //                     <Link to={"/post/" + post.slug.current} key={post.slug.current}>
    //                         <span>
    //                             <img 
    //                                 src={post.mainImage.asset.url}
    //                                 alt={post.mainImage.alt}
    //                                 width="200px"
    //                             />
    //                             <span>
    //                                 <h3>{post.title}</h3>
    //                             </span>
    //                         </span>
    //                     </Link>
    //                 </article>
                    
    //             ))}
    //             </div>
    //         </section>
    //     </main>
    )
}