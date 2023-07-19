'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "@/data/Data";


export const CarosuelCard = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
    return (

        <div className=" justify-items-center px-32">
            <Slider {...settings}>
                    {Data.map((item) => {
                        return (
                            <div key={item.id} className="">
                                <Image src={item.image} width={380} height={400} alt={item.title} />
                                <p className='mt-2 text-base font-bold'>{item.title}</p>
                                <p className='mt-2 text-base font-bold'>${item.price}</p>
                            </div>
                        )
                    })}

            </Slider>
        </div >
    )
}