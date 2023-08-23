import NavMenuComponent from "@/components/NavMenu/NavMenu.component";


type HeaderComponentProps = {
  customClass? : string;
}

export default function HeaderComponent({customClass,}:HeaderComponentProps){

    return (
        <div className={`${customClass} w-full`}>
            <NavMenuComponent customClass={''}/>
        </div>
    )
}