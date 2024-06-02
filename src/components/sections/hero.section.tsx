"use client";

import { useMemo, useState } from "react";
import localFont from 'next/font/local';
import Image from "next/image";

import IconCouple from "@/assets/icon_N_A.svg";
import IconRSVP from "@/assets/icon_RSVP.svg";
import { HeroImage } from "@/constants/hero_images.const";
import { useMusicStore } from "@/stores/music.store";
import { useCoverStore } from "@/stores/cover.store";
import { Helpers } from "@/helpers/index.helper";

const newYorkFont = localFont({ src: "../../assets/fonts/NewYork.otf" });
const creattionDemoFont = localFont({ src: "../../assets/fonts/CreattionDemo.otf" })

export default function HeroSection({ to }: { to?: string }) {
    const { setMusic } = useMusicStore();
    const { isCover, setCover } = useCoverStore();

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useMemo(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === HeroImage.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleOpenInvitation = () => {
        // setMusic(false);
        setCover(true);
    }

    return (
        <>
            <nav className="flex items-center justify-between px-7 w-full left-0 sm:hidden py-1 xxs:py-0">
                <Image onClick={() => handleOpenInvitation()} src={IconCouple} sizes='100vw' className="w-8 xxs:w-12 h-8 xxs:h-12" alt="icon couple" />
                <Image onClick={() => Helpers.scrollToElement("rsvp")} src={IconRSVP} sizes='100vw' className="w-8 xxs:w-12 h-8 xxs:h-12" alt="icon RSVP" />
            </nav>

            <div className="relative w-full h-[500px]">
                {HeroImage?.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        alt={`Image ${idx}`}
                        sizes='100vw'
                        className={`absolute object-cover transition-opacity z-10 duration-[4000ms] h-full ease-in-out  ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}

                <div className="flex flex-col items-center justify-around w-full min-h-full absolute top-0 left-0 z-50 text-black bg-gradient-to-t from-black/60 to-transparent">
                    <div className={`${newYorkFont.className} relative text-4xl xxs:text-6xl font-medium leading-6 xxs:leading-8`}>

                        <h4 className="text-left -ml-6 text-[#945C5C] -mt-10" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-duration="600">Nafi</h4>

                        <div className="text-right">
                            <p className={`${creattionDemoFont.className}`} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="500" data-aos-duration="700">and</p>
                            <h4 className="xxs:mt-3 -mr-10 text-[#945C5C]" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="600" data-aos-duration="800">Alif</h4>
                        </div>

                    </div>

                    <div
                        className="flex flex-col items-center justify-center text-white text-xs xxs:text-base"
                        data-aos="fade-up"
                        data-aos-delay="900"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                    >
                        <p>Kepada Bapak / Ibu / Saudara / i,</p>
                        <h5 className="text-xl xxs:text-2xl font-semibold">{to ?? ""}</h5>
                        <p>di tempat</p>
                    </div>
                </div>
            </div>
        </>
    );
}