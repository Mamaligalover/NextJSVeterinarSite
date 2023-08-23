'use client'
import LayoutComponent from "@/components/Layout/layout.component";
import CarouselComponent from "@/components/Carousel/Carousel.component";
import { Carousel } from "react-responsive-carousel";
import ArticleComponent from "@/components/Articole/Article.component";
import React from "react";
import BlogList from "@/components/BlogList";
import client from "@/client";
import groq from "groq";

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
    const query = groq`*[_type =='post']{
    ...,
    author->,
    categories[]->,
    }|order(_createAt desc)`
    const posts = await client.fetch(query);
        console.log(posts)
  return (
    <div>
      <LayoutComponent>
          <CarouselComponent></CarouselComponent>
          <ArticleComponent/>
          <BlogList posts={posts}/>

          <div className="mx-8 ">
              <Carousel className={'m-2 rounded bg-opacity-5 bg-gray-400 w-full p-4'}
                  infiniteLoop={true}
                  centerMode={true}
                  centerSlidePercentage={20}
                  showArrows={true}
                  showThumbs={false}
                  swipeScrollTolerance={1}
              >
                  {
                      prtners.map((partner)=>{
                          return(
                              <div key={partner.id} className={'shadow mx-8 rounded bg-white'}>
                                <div className={'h-40 p-8 bg-gradient-to-r flex items-center from-cyan-500 to-blue-500'}>
                                    <p className={'text-5xl font-bold text-black '}>
                                        Logo
                                    </p>
                                </div>
                                  <div className={'p-8 '}>
                                        <p>Here will be some informations</p>
                                  </div>
                              </div>
                          )
                      })
                  }
              </Carousel>
          </div>
      </LayoutComponent>
    </div>
  )
}
