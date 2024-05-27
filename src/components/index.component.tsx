"use client";

import { useEffect, useMemo } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import Cover from "./sections/cover.section";

export default function IndexComponent() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <main className="w-full h-full bg-white">
            <Cover />
            <p>wkwkwkw</p>
        </main>
    );
}