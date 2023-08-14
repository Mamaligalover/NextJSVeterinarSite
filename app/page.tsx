import Image from 'next/image'
import {getProject} from "@/sanity/sanity-utils";
import {v4} from "uuid";
import {Project} from "@/types/Project";

export default async function Home() {

  const data: Project[]  = await getProject();

  return (
    <div>
      {data.map((project: Project)=>(
          <div key={v4()}> {}</div>
      ))}
    </div>
  )
}
