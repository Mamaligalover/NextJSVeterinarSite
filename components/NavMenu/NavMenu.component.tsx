import NavLinkComponent, { NavLinkProps} from "@/components/NavMenu/NavLink/NavLink.component";
import {v4} from "uuid";

type NavMenuComponentProp = {
    customClass : string,

}

export default function NavMenuComponent({customClass} : NavMenuComponentProp){

    const navLinckitems :NavLinkProps[] = [
        {
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "test1",
            subitems: [
                {
                    lable:"subitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdaitem1",
                    href: "/homw/1",
                }, {
                    lable:"subasdasditem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                }, {
                    lable:"subitasdasdem1",
                    href: "/homw/1",
                }, {
                    lable:"subiasdasdtem1",
                    href: "/homw/1",
                },
            ]
        },
    ]


    return (
        <div className={'flex justify-around shadow-lg shadow-whites'}>
            <div className={'flex items-center'}>
                <p className={'text-5xl font-bold capitalize text-black '}>
                    logo
                </p>
            </div>
            <div className={`${customClass} flex flex-row`}>
                {
                        navLinckitems.map((link)=>{
                            return(
                                <ul key={v4()}>
                                    <NavLinkComponent customClass={'my-auto'} key={v4()} {...link}/>
                                </ul>
                            )
                        })
                }
            </div>
        </div>

    )
}