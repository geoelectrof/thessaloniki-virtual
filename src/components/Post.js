import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
            }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, [])

    return (
        <main>
            <section>
                <h1>Blog Posts Page</h1>
                <h2>Welcome to our blog posts</h2>
                <div>
                {postData && postData.map((post, index) => (

                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span>
                                <img 
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    width="200px"
                                />
                                <span>
                                    <h3>{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    
                ))}
                </div>
            </section>
        </main>
    )
}