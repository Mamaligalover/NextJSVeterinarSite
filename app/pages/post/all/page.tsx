import groq from "groq";
import client from "@/client";
import urlFor from "@/lib/urlFor";
import Link from "next/link";
import '../../../globals.css'

 async function AllPages(){

    const query = groq`*[_type=='post']|order(_createdAt)
    {
       ...,
    }`
    const posts = await client.fetch<Post[]>(query)


    return(
        <div className={'flex  flex-col items-center mt-20 min-h-screen '}>
            {posts.map(post=>{
                return <div key={post._id} className={'translate-10px w-1/2 mb-20 shadow '}>
                    <div className={'bg-center hover:bg-tops h-80 bg-cover bg-no-repeat'} style={{
                        backgroundImage:`url(${urlFor(post.mainImage).url()})`
                    }}>

                    </div>
                <div className={'p-8'}>
                    <p className={'text-3xl'}>
                        {post.title}
                    </p>
                    <p>
                        {post.description}
                    </p>
                </div>
                    <div className={' translate-10px flex justify-end mx-8 p-3'}>
                        <Link className={'px-8 py-4 hover:animate-pulse shadow rounded bg-blue-300'} href={`/pages/post/${post.slug.current}`} >
                            Află mai multe
                        </Link>
                    </div>
                </div>
            })}
        </div>
    )
}

export default AllPages;