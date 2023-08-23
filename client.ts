import {createClient} from "next-sanity";

const client = createClient({
    projectId: 'cys4a6ni',
    dataset: 'production',
    apiVersion: "2023-08-14",
})

export default client;