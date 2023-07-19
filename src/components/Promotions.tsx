import { Wrapper } from "@/shared/wrapper"
import Image from "next/image";

import event1 from "../assets/event1.webp";
import event2 from "../assets/event2.webp";
import event3 from "../assets/event3.webp";


export const Promotions = () => {
    return (
        <section>
            <Wrapper>
                <div className="mt-16">
                    <div className="text-xl text-center">PROMOTIONS</div>
                    <div className="text-3xl text-center">Our Promotions Events</div>
                    <div className="flex px-12 gap-4 pt-4">
                        <div className="space-y-4">
                            <div className="flex-1 flex bg-[#d7d7d9] justify-between px-4">
                                <div className="px-6 pt-8 ">
                                    <p className="text-3xl font-extrabold w-[110px]">GET UP TO 60%</p>
                                    <p>For the summer season</p>
                                </div>
                                <div className="flex-1 pl-32" >
                                    <Image src={event1} alt="event1" />
                                </div>
                            </div>
                            <div className="bg-black text-white flex flex-col justify-center items-center pt-12 pb-10 px-10">
                                <div className="text-4xl font-extrabold">GET 30% Off</div>
                                <p className="pt-4">USE PROMO CODE</p>
                                <button className="tracking-widest bg-slate-400 px-8 py-1 h-full">DINEWEEKENDSALE</button>
                            </div>

                        </div>
                        <div className="flex-1 flex space-x-4">
                            <div className="flex-1 bg-slate-400">
                                <div className="pl-4 pt-4">
                                    <p>Flex Sweatshirt</p>
                                    <span className="line-through pr-2">$100.00</span><span>$75.00</span>
                                </div>

                                <Image src={event2} alt="event2" />
                            </div>
                            <div className="flex-1 bg-[#d7d7d9]">
                                <div className="pl-4 pt-4">
                                    <p>Flex Push Button Bomber</p>
                                    <span className="line-through pr-2">$225.00</span><span>$190.00</span>
                                </div>

                                <Image src={event3} alt="event2" />

                            </div>

                        </div>

                    </div>

                </div>
            </Wrapper>
        </section>
    )
}