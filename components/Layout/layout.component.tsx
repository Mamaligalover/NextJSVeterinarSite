import { ReactNode,JSX } from "react";
import HeaderComponent from "@/components/Header/header.component";
import FooterComponent from "@/components/Footer/Footer.Component";

export type LayoutComponentProps = {
    children : string | JSX.Element |JSX.Element[]|ReactNode;
    customClass? : string
}

export default function LayoutComponent( { customClass, children }: LayoutComponentProps){

    return(
        <div className={customClass}>
            <HeaderComponent />
            <main>{children}</main>
            <FooterComponent/>
        </div>
    )
}