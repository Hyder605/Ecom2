import { Wrapper } from '@/shared/wrapper'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import header from "@/assets/header.webp"


const Hero = () => {
    return (
        <section>
        <Wrapper>
            <div className='flex mt-16 px-12'>
                <div className='w-1/2'>
                    <div className='bg-blue-300 w-fit p-2 rounded my-4'>Sale 70%</div>
                    <h1 className="scroll-m-20 w-1/2 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        An Industrial Take on Streetwear
                    </h1>
                    
                    <p className="leading-7 [&:not(:first-child)]:mt-6 w-1/2">
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </p>
                    <div className='my-5'>
                        <Button>
                            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
                        </Button>
                    </div>

                </div>
                <div className='w-1/2'>
                    <div className='bg-pink-200 h-[600px] w-[600px] rounded-full'>
                        <Image src={header} alt="hero" className='flex justify-between items-center absolute top-[90px] w-[650px] h-[650px]'/>
                    </div>

                </div>
            </div>
        </Wrapper>
        </section>
    )
}

export default Hero