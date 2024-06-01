"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Maven_Pro } from "next/font/google";

import 'aos/dist/aos.css';

import Cover from "./sections/cover.section";
import HeroSection from "./sections/hero.section";
import MobileLayout from "./layouts/mobile.layout";
import GroomBrideSection from "./sections/groom_bride.section";
import CountdownSection from "./sections/countdown.section";
import EventSection from "./sections/event.section";
import StoriesSection from "./sections/stories.section";
import GaleriesSection from "./sections/galeries.section";
import GiftSection from "./sections/gift.section";
import SpecialyThanksSection from "./sections/specialy_thanks.section";
import MusicBtn from "./micro/button_music.micro";
import YoutubeSection from "./sections/youtube.section";
import RSVPSection from "./sections/rsvp.component";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

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