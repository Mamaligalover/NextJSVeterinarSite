'use client'
import Link from "next/link";
import {v4} from "uuid";
import { useState } from 'react'

export type NavLinkProps = {
    customClass?: string,
    href: string,
    lable: string,
    disableRedirect : boolean,
    subitems: NavLinckSubItem[]

}

export type NavLinckSubItem = {
    lable:string,
    href: string,
}

export default function NavLinkComponent(props: NavLinkProps){

    const [isMouseOn, setIsMouseOn] = useState(false);
    const mouseHandler = (currentValue : boolean) => {
         setIsMouseOn(currentValue);
     }
    return (

        <div className={'h-full  relative bg-white hover:text-white capitalize transition-all text-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 px-10 py-5 flex items-center'} onMouseEnter={ () => mouseHandler(true) }
                     onMouseLeave={ () => mouseHandler(false) }>
            <li>

                <Link aria-disabled={props.disableRedirect}  href={props.href} className={`${props.customClass} `}>
                    {props.lable}
                </Link>

                {props.subitems.length > 0 && <div
                  className={`${!isMouseOn ? 'hidden' : ''} rounded translate-y-3.5  absolute  w-52 -translate-x-1/3  z-[99] mt-4 bg-white bg-opacity-150 text-left p-5  max-h-60  overflow-y-auto simple`}>
                    {props.subitems.map((item) => {
                        return (
                            <div key={v4()} className={'p-2'} >
                                <Link  key={v4()} href={item.href} className={' text-black hover:text-blue-400 font-bold font-serif' }>
                                        {item.lable}
                                </Link>
                            </div>

                        )
                    })}
                </div>}
            </li>
        </div>

    )
}