import {createClient} from "next-sanity";


const projectId = process.env.NEXT_PUBLIC_SANITY_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
    projectId,
    dataset,
    apiVersion,
})

export default client;