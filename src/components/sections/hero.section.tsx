/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useMemo, useState } from "react";
import localFont from 'next/font/local';
import Image from "next/image";

import { HeroImage } from "@/components/libs/constants/hero_images.const";
import { useMusicStore } from "@/components/libs/stores/music.store";
import { useCoverStore } from "@/components/libs/stores/cover.store";
import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });



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
            <div className="flex flex-col gap-y-4 my-8 items-center" id="home">
                <p className={` ${babyDoll.className} text-black font-normal text-4xl lg:text-4xl text-pretty text-center`}>
                    THE WEDDING OF
                </p>

                <div className="w-full h-full">
                    <div className="relative h-[200px] flex justify-center items-center">
                        {HeroImage?.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`Image ${idx}`}
                                className={`absolute object-contain transition-opacity z-10 duration-[4000ms] h-full ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>

                <p className={` ${shorelinesScript.className} text-black font-normal text-xl lg:text-2xl text-pretty text-center`}>
                    {NEWLYWEDS_TITLE}
                </p>
                {/* <div className={`${babyDoll.className} flex flex-col items-center justify-center text-balck text-xs xxs:text-base`}>
                    <p>Kepada Bapak / Ibu / Saudara / i,</p>
                    <h5 className="text-xl xxs:text-2xl font-semibold">{to ?? ""}</h5>
                    <p>di tempat</p>
                </div> */}
                {/* <Image
                    src={HurufArab}
                    alt="Huruf Arab"
                    sizes='250px'
                    className="w-48 mx-auto"
                /> */}

                {/* <p className="text-center text-balance text-2xl" data-aos="fade-right">
                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                </p> */}
                <p className={`${babyDoll.className} text-center text-sm md:text-base text-balance w-11/12 mt-3`} data-aos="fade-left">
                    &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari
                    (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta
                    dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir.&quot; <br />(QS Ar Rum : 21).
                </p>
            </div>
        </>
    );
}