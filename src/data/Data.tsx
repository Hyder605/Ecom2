import p1 from "../assets/products/1.png"
import p2 from "../assets/products/2.png"
import p3 from "../assets/products/3.png"
import p4 from "../assets/products/4.png"
import p5 from "../assets/products/5.png"
import p6 from "../assets/products/6.png"
import p7 from "../assets/products/7.png"
import p8 from "../assets/products/8.png"
import p9 from "../assets/products/9.png"
import p10 from "../assets/products/10.png"
import p11 from "../assets/products/11.png"
import { StaticImageData } from "next/image"



export interface IData{
    id:number,
    title:string,
    price:number,
    image:StaticImageData
    category:string,
    subCategory:string
}

export const Data:IData[]=[
    {
    id:1,
    title:"Flex Push Button Bomber",
    price:225,
    image:p1,
    category:"Male",
    subCategory:"Jacket"
},
{
    id:2,
    title:"Brushed Bomber",
    price:225,
    image:p2,
    category:"Female",
    subCategory:"Jacket"
},
{
    id:3,
    title:"Raglan Sweatshirt",
    price:195,
    image:p3,
    category:"Male",
    subCategory:"Sweater"
},
{
    id:4,
    title:"Lite Sweatpants",
    price:150,
    image:p4,
    category:"Female",
    subCategory:"Pants"
},
{
    id:5,
    title:"Brushed Raglan Sweatshirt",
    price:195,
    image:p5,
    category:"Female",
    subCategory:"Sweater"
},
{
    id:6,
    title:"Flex Sweatshirt",
    price:195,
    image:p6,
    category:"Female",
    subCategory:"Sweater"
},

{
    id:7,
    title:"Imperial Alpaca Hoodie",
    price:595,
    image:p7,
    category:"Female",
    subCategory:"Jacket"
},
{
    id:8,
    title:"Pink Fleece Sweatpants",
    price:195,
    image:p8,
    category:"Female",
    subCategory:"Pants"
},


]