import {v4} from "uuid";
import Image from "next/image"
import urlFor from "@/lib/urlFor";

type Props = {
    posts: Post[];
}

function BlogList({posts} :Props)
{
    // console.log(posts)
    return(
        <div>
            {posts.map((post)=>{
                console.log(post.mainImage)
                return <div key={v4()}>
                    <div className={'relative w-full h-80'}>
                        <Image
                            className={'object-cover object-left lg:object-center'}
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>
                </div>
            })}
        </div>
    )
}
export default BlogList