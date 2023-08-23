import {Carousel} from "react-responsive-carousel";
import React from "react";
import urlFor from "@/lib/urlFor";
import Link from 'next/link';
import '../../app/globals.css'


type Props = {
    partners : Partner[]
}
function PartnersComponent({partners}:Props)
{

 return (<div>
     <div className={'text-center'}>
         <h1 className={'text-5xl font-bold text-gray-400 my-4'}>Parteneri</h1>
     </div>
     <div className="mx-8 ">
         <Carousel className={'m-2 rounded bg-opacity-5 bg-gray-400 w-full p-4'}
                   infiniteLoop={true}
                   centerMode={true}
                   centerSlidePercentage={40}
                   showArrows={true}
                   showThumbs={false}
                   swipeScrollTolerance={1}
         >
             {
                 partners.map((partner)=>{
                     return(
                         <div key={partner._id} className={' translate-10px shadow mx-8 rounded bg-white'}  >
                             <div className={'h-40 bg-center bg-contain bg-no-repeat '}
                             style={{
                                 backgroundImage:`url(${urlFor(partner.mainImage).url()})`
                             }}
                             >

                             </div>
                             <div className={'p-8 overflow-y-hidden h-40'}>
                                 <Link className={'hover:text-blue-400'} href={partner.link} >
                                     {partner.name}
                                 </Link>
                                 <p>{partner.decription}</p>

                             </div>
                         </div>
                     )
                 })
             }
         </Carousel>
     </div>
 </div>)
}

export default PartnersComponent;