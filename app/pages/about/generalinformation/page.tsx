'use client'
import {getGeneralInformarion} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react"
import {RichTextComponent} from "@/components/RichText.component";

type GeneralInformation = {
    title : string;
    content: string;
}


export default async function  GeneralInformation(){
 const content = await getGeneralInformarion()
    return(
        <>
            <div className={'bg-gray-400 bg-opacity-30 py-8 min-h-screen'} >
                <div className={'text-center py-10 text-5xl text-black font-bold'}>
                    <h1>
                        {content.title}
                    </h1>
                </div>
                <div className={'justify-center w-full flex'}>
                    <div className={'w-2/3 text-lg'}>
                        <PortableText value={content.content} components={RichTextComponent} />
                    </div>
                </div>
            </div>
        </>
    )
}

