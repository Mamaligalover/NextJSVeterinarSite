
type FooterComponentType = {
    customClass? : string;
}
export default function FooterComponent( { customClass } : FooterComponentType){

    return(
        <div className={`${ customClass } w-full h-20 bg-white`}>
   Hello World
    </div>
    )
}