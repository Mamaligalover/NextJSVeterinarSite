import React from "react";
import '../../app/globals.css'
import urlFor from "@/lib/urlFor";
import Link from "next/link";


type Props = {
    posts: Post[];
}
 async function ArticleComponent  ({posts}:Props){
    return(
        <div>
            <div className={' flex flex-col mb-8 box-content transition-all duration-300 mx-4'}>
                <div className={'text-4xl text-gray-600 font-bold mx-auto p-10'}>
                    Articole recent publicate
                </div>
            <div className={'mx-16 grid grid-cols-3  gap-8'}>
                {
                    posts.map((post)=>{
                        return (
                            <div key={post._id} className={'translate-10px'}>
                                <div className={'rounded shadow-2xl'}>
                                    <div className={'bg-center bg-cover  bg-no-repeat  h-40'} style={
                                        {
                                            backgroundImage: `url(${urlFor(post.mainImage).url()})`
                                        }
                                    }>
                                    </div>
                                    <div className={'p-2 h-48 '}>
                                        <h4 className={'text-2xl '}>{post.title}</h4>
                                        <div className={'box-content h-28 overflow-y-auto simple'}>
                                            <p >{post.description}</p>
                                            <p>
                                                <Link className={'hover:text-blue-400'} href={`/pages/post/${post.slug.current}`} >
                                                    ...află mai multe
                                                </Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        )
                    })
                }

            </div>
            <div className={'mx-auto my-8'}>
                <Link href={"/pages/post/all"} className={'translate-10px py-4 px-8 shadow rounded-3xl bg-gradient-to-r text-2xl text-white flex items-center from-cyan-500 to-blue-500'}>
                   Mai multe articole
                </Link>
            </div>
            </div>
        </div>
    )
}
export default ArticleComponent

