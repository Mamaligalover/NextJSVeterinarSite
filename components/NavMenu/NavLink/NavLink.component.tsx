'use client'
import Link from "next/link";
import {v4} from "uuid";
import { useState } from 'react'

export type NavLinkProps = {
    customClass?: string,
    href: string,
    lable: string,
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

        <div className={' relative bg-white hover:text-white capitalize transition-all text-center hover:bg-red-600 px-10 py-4 flex items-center'} onMouseEnter={ () => mouseHandler(true) }
                     onMouseLeave={ () => mouseHandler(false) }>
            <li>
                <Link href={props.href} className={`${props.customClass} `}>
                    {props.lable}
                </Link>

                {props.subitems.length > 0 && <div
                  className={`${!isMouseOn ? 'hidden' : ''} rounded  absolute -translate-x-1/3  z-[99] mt-4 bg-red-100 text-left p-5  max-h-60  overflow-y-auto simple`}>
                    {props.subitems.map((item) => {
                        return (
                            <div key={v4()} className={'p-2'} >
                                <Link key={v4()} href={item.href} className={' text-black hover:text-red-600 font-bold font-serif' }>
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