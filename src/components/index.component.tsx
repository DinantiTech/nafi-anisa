"use client";

import AOS from "aos";
import { useEffect } from "react";
import { Maven_Pro } from "next/font/google";
import { useSearchParams } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import 'aos/dist/aos.css';
import Image from "next/image";

import BgCloud1 from "@/assets/cloud.webp";
import BgCloud2 from "@/assets/cloud_2.webp";

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

gsap.registerPlugin(ScrollTrigger);

export default function IndexComponent({ slug }: { slug?: string }) {
    useEffect(() => {
        AOS.init();
    }, [])

    const queryParams = useSearchParams();

    const guestSlug = slug?.toString()?.replace(/=/g, '')?.replace(/[-+_]/g, ' ')?.replace(/%20/g, ' ')?.replace(/%2C/g, ',');
    const guestString = queryParams?.toString()?.replace(/=/g, '')?.replace(/[-+_]/g, ' ')?.replace(/%20/g, ' ')?.replace(/%2C/g, ',');

    const to = guestSlug ?? guestString

    return (
        <main className={`${mavenPro.className} w-full h-full bg-[#F9FCFF]`}>
            <Cover to={to} />
            <MobileLayout>
                <HeroSection />
                <div id="bg-parallax" className="relative bg-[#4CB4DE] py-8">
                    <div className="absolute top-0 h-full z-0 w-full">
                        <div className="z-0 sticky top-0 ">
                            <Image data-aos="fade-right" data-aos-duration="1000" src={BgCloud1} alt="cloud background" className="h-auto z-0 image-animation" />
                            <Image data-aos="fade-right" data-aos-duration="1000" src={BgCloud2} alt="cloud background" className="h-auto z-0 left-32 image-animation" style={{ animationDelay: '2s' }} />
                        </div>
                    </div>
                    <GroomBrideSection />
                    <div className="bg-[#FFFFFF7D] rounded-xl mx-auto p-6 z-10 max-w-[calc(100%_-_2rem)] xs:max-w-[calc(100%_-_4rem)]" >
                        <CountdownSection />
                        <EventSection />
                    </div>
                </div>

                <RulesSection />
                <PrayerSection />

                <RSVPSection />
                <GiftSection />
                <SpecialyThanksSection />

                <MusicBtn />
                <Navigation />
            </MobileLayout>
        </main >
    );
}