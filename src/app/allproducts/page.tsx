import { Data } from '@/data/Data'
import { Wrapper } from '@/shared/wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const allproducts = () => {
  return (
    <Wrapper>
      <div className='bg-green-200 grid grid-cols-4 gap-4 justify-items-center py-16 px-32'>
        {Data.map((item) => {
          return (
            <Link href={`/product/${item.id}`}>

              <div key={item.id} className="">
                <Image src={item.image} width={250} height={256} alt={item.title} />
                <p className='mt-2 text-base font-bold'>{item.title}</p>
                <p className='mt-2'>{item.subCategory}</p>
                <p className='mt-2 text-base font-bold'>${item.price}</p>
              </div>
            </Link>

          )
        })}


      </div>
    </Wrapper>

  )
}

export default allproducts
