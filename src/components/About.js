import React, {useEffect, useState }  from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

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
            <img />
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
            </div>
        </main>
    )
}