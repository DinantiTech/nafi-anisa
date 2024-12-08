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
import GiftSection from "./sections/gift.section";
import SpecialyThanksSection from "./sections/specialy_thanks.section";
import MusicBtn from "./micro/button_music.micro";
import RSVPSection from "./sections/rsvp.component";
import RulesSection from "./sections/rules.component";
import PrayerSection from "./sections/prayer.section";
import Navigation from "./sections/navigation.section";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function IndexComponent({ to }: { to?: string }) {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <main className={`${mavenPro.className} w-full h-full bg-[#FFFBEF]`}>
            <Cover to={to} />
            <MobileLayout>
                <HeroSection to={to} />
                <GroomBrideSection />
                <CountdownSection />
                <EventSection />
                {/* <StoriesSection /> */}
                {/* <GaleriesSection /> */}

                {/* <YoutubeSection /> */}

                <RulesSection />
                <PrayerSection />

                <RSVPSection />
                <GiftSection />
                <SpecialyThanksSection />

                <MusicBtn />
                <Navigation />
            </MobileLayout>
        </main>
    );
}