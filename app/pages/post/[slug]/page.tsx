import { groq } from "next-sanity"
import client from "../../../../client"
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichText.component";

type Props = {
    params:{
        slug:string;
    }
}
async function Post({params:{slug}}:Props){

    const query = groq`*[_type == 'post' && slug.current== $slug][0]
    {
        ...,
        author->,
        categories[]->
    }`
    const post = await client.fetch(query, { slug })
    return(
        <div className={'min-h-screen'}>
            <article className={'flex flex-col bg-gray-400 bg-opacity-30 '}>
                <section className={'mx-auto my-8'}>
                    <div className='text-5xl'>
                        {post.title}
                    </div>
                </section>
                <section className={'mx-auto'}>
                    <PortableText value={post.body} components={RichTextComponent} />
                </section>
            </article>
        </div>

    )
}
export default Post