import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap'
import { FaWheelchair } from "react-icons/fa"
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default function Post() {
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
    
    return (
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
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                <Row key={index} className="py-5 border-bottom border-2 border-dark" >
                    <Col md={6} className="py-3 pe-5 mr-5">
                        <p className="mb-0 text-secondary samples-sub-title">{work.tags[0]}</p>
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
                </Row>
                ))}
            </motion.div>
        </Container>
    )
}