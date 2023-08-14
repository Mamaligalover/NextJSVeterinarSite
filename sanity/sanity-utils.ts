import {createClient} from "next-sanity";
import groq from "groq";
import {Project} from "@/types/Project";


export async function getProject(): Promise<Project[]>{
    const client = createClient({

        projectId: 'cys4a6ni',

        dataset: 'production',

        apiVersion: "2023-08-14",
    })

    return client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        url,
    }`);
 }