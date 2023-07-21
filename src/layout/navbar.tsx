'use client'
import { Wrapper } from '@/shared/wrapper'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/Logo.webp"
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';


function Navbar() {

    const ReduxSelectorCart=useSelector((state: RootState) => state.cart)
    return (
        <section>
            <Wrapper>
                <div className='flex justify-between px-6 py-4'>
                    <div>
                        <Link href={'/'}>
                        <Image src={Logo} alt='logo' />
                        </Link>
                        
                    </div>
                    <div>
                        <ul className='flex gap-x-4'>
                            <li>Male</li>
                            <li>Female</li>
                            <li>Kids</li>
                            <li>
                                <Link href={'/allproducts'}> AllProducts
                                </Link>

                            </li>
                        </ul>
                    </div>
                    <div>
                    <Link href='/checkoutpage'>
                                <button >
                                    <ShoppingCart className="mr-2 h-5 w-5 " />
                                </button>
                            </Link>

                            {ReduxSelectorCart.TotalQuantity> 0 && (
                                <p className='"h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-[5px] right-[24px]
                                text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>{ReduxSelectorCart.TotalQuantity}</p>
                            )}
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Navbar