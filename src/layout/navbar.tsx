import { Wrapper } from '@/shared/wrapper'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/Logo.webp"
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';


function Navbar() {
    return (
        <section>
            <Wrapper>
                <div className='flex justify-between px-6 py-4'>
                    <div>
                        <Image src={Logo} alt='logo' />
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
                        <ShoppingCart />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Navbar