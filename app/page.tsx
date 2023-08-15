import {getProject} from "@/sanity/sanity-utils";
import {Project} from "@/types/Project";
import LayoutComponent from "@/components/Layout/layout.component";
import CarouselComponent from "@/components/Carousel/Carousel.component";

export default async function Home() {

  const data: Project[]  = await getProject();

  return (
    <div>
      <LayoutComponent>
          <CarouselComponent></CarouselComponent>
      </LayoutComponent>
    </div>
  )
}
