import Card from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Data, IData } from '@/data/Data'
import Image from 'next/image'
import React from 'react'

interface Iprops{
    params:{
        id:number
    }
    }



const product = ({params}:Iprops) => {


    const data=Data
    // console.log(data)
    const reqData=data.find((item)=>item.id==params.id)
    // console.log(reqData)

  return (
    <div>
        <Card props={reqData}/>
    </div>
  )
}

export default product