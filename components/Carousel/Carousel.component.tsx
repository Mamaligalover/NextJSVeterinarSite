'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import "./CaruselStyle.scss"




export default function CarouselComponent(){
    const responsive = [
        {
            id: 1,
            title: "Swiper Carousel Example",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            imageUrl: "https://images.pexels.com/photos/7121954/pexels-photo-7121954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "Swiper Carousel Example",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            imageUrl: "https://images.pexels.com/photos/64231/cows-cow-austria-pasture-sky-64231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "Swiper Carousel Example",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            imageUrl: "https://images.pexels.com/photos/828784/pexels-photo-828784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    return(
        <div className={'mt-8'} >
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                showThumbs={true}
                swipeable={true}
            >
                {responsive.map((item) => (
                    <div key={item.id} >
                        <div className={`w-full relative h-80  bg-no-repeat bg-center bg-cover mx-auto `} style={{
                            backgroundImage: `url(${item.imageUrl})`,
                            maxWidth: "1440px",
                        }} >
                            <div className={'flex flex-row-reverse'}>
                                <div className={`bg-white mr-20 bg-no-repeat bg-center bg-contain logo  absolute w-40 h-full`} />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
