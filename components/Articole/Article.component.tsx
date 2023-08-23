import React from "react";
import { GetFirstTreeArticles } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


export default async function ArticleComponent  (){
    const content = await GetFirstTreeArticles()

    return(
        <div>
            <div className={'flex flex-col mb-8 box-content transition-all duration-300 mx-4'}>
                <div className={'text-4xl text-gray-600 font-bold mx-auto p-10'}>
                    Articole recent publicate
                </div>
            <div className={'flex mx-auto  gap-8'}>
                {
                    content.map((content)=>{
                        return (
                            <div key={content._id} className={'rounded shadow-2xl  hover:translate-y-2'}>
                                <div className={'h-40 p-8 bg-gradient-to-r flex items-center from-cyan-500 to-blue-500'}>
                                    <p className={'text-5xl font-bold text-black '}>
                                        Here will be the image the main
                                    </p>
                                </div>
                                <div className={'p-2 h-20 '}>
                                    <PortableText value={content.content} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className={'mx-auto my-8'}>
                <button className={'py-4 px-8 shadow hover:translate-y-2 rounded-3xl bg-gradient-to-r text-2xl text-white flex items-center from-cyan-500 to-blue-500'}>
                   Mai multe artocole
                </button>
            </div>
            </div>
        </div>
    )
}

