import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "@/sanity/schemas";
import {visionTool} from '@sanity/vision'

    const projectId = process.env.NEXT_PUBLIC_SANITY_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config = defineConfig({

    projectId: 'cys4a6ni',
    dataset: 'production',
    title: 'VeterinarSite',
    apiVersion: "2023-08-14",
    basePath: '/admin',
    plugins: [ deskTool(), visionTool() ],
    schema: { types: schemas  }
})

export default config;