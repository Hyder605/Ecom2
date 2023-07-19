import { Wrapper } from "@/shared/wrapper"
import { CarosuelCard } from "./CarosuelCard"


export const Products = () => {
    return (
        <section>
            <Wrapper>
                <div className="mt-16">
                    <div className="text-xl text-center">PRODUCTS</div>
                    <div className="text-3xl text-center">Check What We Have</div>
                    <CarosuelCard />

                </div>
            </Wrapper>
        </section>
    )
}