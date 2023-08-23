import groq from "groq";


type Props = {
    params :{
        slug :string;
    }
}
async function Post({params:{slug}}: Props){

    const quety = groq``
    return(
        <div>{slug}</div>
    )
}
export default Post