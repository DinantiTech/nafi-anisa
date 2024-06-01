"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Maven_Pro } from "next/font/google";
import dynamic from "next/dynamic";

import 'aos/dist/aos.css';

import Cover from "./sections/cover.section";
import MobileLayout from "./layouts/mobile.layout";
import GroomBrideSection from "./sections/groom_bride.section";
import MusicBtn from "./micro/button_music.micro";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

const CountdownSection = dynamic(() => import("./sections/countdown.section"));
const EventSection = dynamic(() => import("./sections/event.section"));
const StoriesSection = dynamic(() => import("./sections/stories.section"));
const GaleriesSection = dynamic(() => import("./sections/galeries.section"));
const GiftSection = dynamic(() => import("./sections/gift.section"));
const SpecialyThanksSection = dynamic(() => import("./sections/specialy_thanks.section"));
const YoutubeSection = dynamic(() => import("./sections/youtube.section"));
const RSVPSection = dynamic(() => import("./sections/rsvp.component"));
const HeroSection = dynamic(() => import("./sections/hero.section"));

export default function IndexComponent({ to }: { to?: string }) {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <main className={`${mavenPro.className} w-full h-full bg-white`}>
            <MobileLayout>
                <Cover />

                <HeroSection to={to} />
                <GroomBrideSection />
                <CountdownSection />
                <EventSection />
                <StoriesSection />
                <GaleriesSection />
                <YoutubeSection />
                <RSVPSection />
                <GiftSection />
                <SpecialyThanksSection />

                <MusicBtn />
            </MobileLayout>
        </main>
    );
}