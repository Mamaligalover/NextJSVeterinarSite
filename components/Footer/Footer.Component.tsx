import React from "react";
import Link from "next/link";
import { BsFacebook,BsInstagram,BsLinkedin } from 'react-icons/bs';

type FooterComponentType = {
    customClass? : string;
}
export default function FooterComponent( { customClass } : FooterComponentType){

    return(
        <div className={`${ customClass } bg-white justify-center flex w-full h-20 p-10 mb-4`}>
           <div className={'flex flex-col w-3/4'}>
               <div className={'flex justify-around gap-8 p-4   border-b-2 border-gray-400'}>
                   <div className={'text-5xl font-black'}>
                       CMV
                   </div>
                   <div className={'text-center'}>
                       <ul className={'flex list-none items-center gap-8'}>

                       </ul>
                   </div>
               </div>
               <div className={'flex justify-between'}>
                    <div className={'flex'}>
                        <ul className={'list-none text-gray-600'}>
                            <li className={'text-1xl opacity-400'}> Contact information :
                            <p>
                                 Adresa juridică: mun. Chișinău, str. Mircești 44
                                Adresa fizică: mun. Chișinău, str. Mircești 52
                                e-mail: cmvmd01@gmail.com
                                tel.: +373 69477443
                            </p></li>
                        </ul>
                    </div>
                   <div>
                       <ul className={'list-none flex gap-8'}>
                           <li className={'cursor-pointer'}><Link href={'facebook.com'}> <BsFacebook></BsFacebook></Link></li>
                           <li className={'cursor-pointer'}><Link href={'facebook.com'}> <BsInstagram></BsInstagram></Link></li>
                           <li className={'cursor-pointer'}><Link href={'facebook.com'}> <BsLinkedin></BsLinkedin></Link></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    )
}