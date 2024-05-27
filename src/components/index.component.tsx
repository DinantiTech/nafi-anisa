"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Maven_Pro } from "next/font/google";

import 'aos/dist/aos.css';

import Cover from "./sections/cover.section";
import HeroSection from "./sections/hero.section";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function IndexComponent() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <main className={`${mavenPro.className} w-full h-full bg-white`}>
            {/* <Cover /> */}
            <HeroSection />
        </main>
    );
}