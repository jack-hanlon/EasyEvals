import React from "react";
import { ModelCards } from "@/components/model-cards/model-cards";
import HeroSectionSimpleCentred from "@/components/model-cards/hero-section";
export default async function Index() {

    return (
        <>
        <main className="flex-1 flex flex-col  px-4">
            {/* <Button className="font-medium text-xl mb-4">
                Test Benchmark
            </Button> */}
            <HeroSectionSimpleCentred />

            <div className="flex flex-row gap-4">
                <ModelCards />
            </div>
        </main>
        </>
    );
}
