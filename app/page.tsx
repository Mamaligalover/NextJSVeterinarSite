'use client'
import LayoutComponent from "@/components/Layout/layout.component";
import CarouselComponent from "@/components/Carousel/Carousel.component";
import { Carousel } from "react-responsive-carousel";
import ArticleComponent from "@/components/Articole/Article.component";
import React from "react";
import BlogList from "@/components/BlogList";
import client from "@/client";
import groq from "groq";
import PartnersComponent from "@/components/Prtners/partners.component";

export default async function Home() {
 const prtners = [
     {
         id:'1',
         shortname: 'MAIA',
         longName: 'Ministerul Agriculturii și Industriei Alimentare'

     },
     {
         id:'2',
         shortname: 'ANSA',
         longName: 'Agenția Națională pentru Siguranța Alimentelor'
     },
     {
         id:'3',
         shortname: 'FMV',
         longName: 'Facultatea Medicină Veterinară a Universității Tehnice a Moldovei'
     },
     {
         id:'4',
         shortname: 'UTM',
         longName: 'Universitatea Tehnică a Moldovei'
     },
     {
         id:'5',
         shortname: 'AMVAC',
         longName: 'Asociația Medicilor Veterinari pentru Animale de Companie din România'
     },
 ]

    const content = [
        {id:'1'},
        {id:'2'},
        {id:'3'},

    ]

    const query = groq`*[_type =='post'][0...3]{
    ...,
    author->,
    categories[]->,
    }|order(_createAt desc)`

    const partnersQuery = groq`*[_type == 'partner']{
    name,
    mainImage,
    decription,
    link
    }`
    const threePost = await client.fetch(query);
    const partners = await client.fetch(partnersQuery)
  return (
    <div>

      <LayoutComponent>
          <div className={'p-4 bg-gradient-to-r  text-white flex items-center from-cyan-500 to-blue-500'}>
          </div>
          <CarouselComponent></CarouselComponent>
          <ArticleComponent posts={threePost}/>
          <PartnersComponent partners={partners}/>
      </LayoutComponent>
    </div>
  )
}
