import NavLinkComponent, { NavLinkProps} from "@/components/NavMenu/NavLink/NavLink.component";
import {v4} from "uuid";
import Link from "next/link";
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
                    href: "/pages/about/biroul-executiv",
                }, {
                    lable:"Comisia de dentologie și litigii",
                    href: "/pages/about/comisia-dentologie-litigii",
                },
            ]
        }
        // {
        //     customClass: "",
        //     href: "/page/evenimente",
        //     lable: "Evenimente",
        //     disableRedirect : false,
        //     subitems: []
        // }
        ,{
            customClass: "",
            href: "/pages/legalinfo",
            lable: "Legislație",
            disableRedirect : true,
            subitems: []
        },{
            customClass: "",
            href: "/pages/medlist",
            lable: "Lista medicilor veterinari",
            disableRedirect : false,
            subitems: [ ]
        },{
            customClass: "",
            href: "#",
            lable: "Formarea profesională continuă",
            disableRedirect : false,
            subitems: [
                {
                    lable:"Componența Comisiei",
                    href: "/pages/profesional",
                }, {
                    lable:"Documente",
                    href: "/pages/formarea-profesionala-docs",
                },
            ]
        }
    ]


    return (
        <div className={'flex justify-around shadow-lg shadow-whites'}>
            <div className={'flex items-center'}>
                <Link href={"/"} className={'text-5xl p-4 font-bold capitalize   bg-gradient-to-r  text-white flex items-center from-cyan-500 to-blue-500 '}>
                    CMV
                </Link>
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