'use client'
import { IData } from '@/data/Data'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Card({props}:any) {
    const reqData:IData=props

    const handleAddCart=async()=>{
        const res=await fetch('https://red-waitress-nqmzg.ineuron.app:3000/api/cart',{
            method:"POST",
            body:JSON.stringify({
                product_id:reqData.id
            })
    })
        console.log(res)
    }
  return (
    <div>
        <Image src={reqData!.image} alt={reqData!.title} width={400} height={400}/>
        <Button
        onClick={handleAddCart}>Add to Cart</Button>
    </div>
  )
}
