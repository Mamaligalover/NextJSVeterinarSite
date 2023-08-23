import NavLinkComponent, { NavLinkProps} from "@/components/NavMenu/NavLink/NavLink.component";
import {v4} from "uuid";

type NavMenuComponentProp = {
    customClass : string,

}

export default function NavMenuComponent({customClass} : NavMenuComponentProp){

    const navLinckitems :NavLinkProps[] = [
        {
            customClass: "",
            href: "/",
            lable: "Acasă",
            disableRedirect : false,
            subitems: []
        },{
            customClass: "",
            href: "#",
            lable: "Despre CMV",
            disableRedirect : true,
            subitems: [
                {
                    lable:"Prezentarea generală",
                    href: "/pages/about/generalinformation",
                }, {
                    lable:"Biroul executiv",
                    href: "/homw/1",
                }, {
                    lable:"Comisia de dentologie și litigii",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "Evenimente",
            disableRedirect : false,
            subitems: []
        },{
            customClass: "",
            href: "#",
            lable: "Legislație",
            disableRedirect : true,
            subitems: [
                {
                    lable:"Prezentare generală",
                    href: "/homw/1",
                },
            ]
        },{
            customClass: "",
            href: "/home",
            lable: "Lista medicilor veterinari",
            disableRedirect : false,
            subitems: [ ]
        },{
            customClass: "",
            href: "/home",
            lable: "Formarea profesională continuă",
            disableRedirect : false,
            subitems: [
            ]
        }
    ]


    return (
        <div className={'flex justify-around shadow-lg shadow-whites'}>
            <div className={'flex items-center'}>
                <p className={'text-5xl font-bold capitalize text-black '}>
                    CMV
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