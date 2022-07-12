import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import project from "../../thessaloniki/schemas/project.js";
// import project from "../../thessaloniki/schemas/project.js";
// import project from "../../thessaloniki/schemas/project.js";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "project"]{
                title,
                date,
                place,
                projectType,
                description,
               
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    },[]);

    return (
        <main>
            <section>
                <h1>The projects page</h1>
                <h2>Check our projects</h2>
                <section>
                    {projectData && projectData.map((project, index) => (
                        <article>
                            <h3>
                                {project.title}
                            </h3>
                            <div>
                                <span>
                                    {project.date}
                                </span>
                                <span>
                                    Company: {project.place}
                                </span>
                                <span>
                                    Type: {project.projectType}
                                </span>
                                <p>{project.description}</p>
                                
                                <span>
                                </span>
                            </div>
                        </article>
                    ))
                    }
                </section>
            </section>
        </main>
    )
    
}