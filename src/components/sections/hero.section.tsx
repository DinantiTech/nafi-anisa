"use client";

// import { useEffect, useState } from "react";
import localFont from 'next/font/local';
import Image from "next/image";

// import { HeroImage } from "@/components/libs/constants/hero_images.const";
import CoverHero from "@/assets/cover_character_only.webp";
import WeddingText from "@/assets/wedding_text.webp";
// import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
// const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

export default function HeroSection() {
    // const [currentIndex, setCurrentIndex] = useState<number>(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex === HeroImage.length - 1 ? 0 : prevIndex + 1));
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="h-10 bg-[#C03030] w-full flex align-middle justify-center relative z-20"
                id="home">
                <div className="h-10 bg-[#FBFD78] w-10 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-y-4 mb-8 items-center relative" style={{ maxHeight: 'calc(100% - 100px)' }}>
                <Image
                    src={CoverHero}
                    alt="couple cover"
                    className="object-cover w-full h-dvh z-0 relative -m-8" />
                <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full flex flex-col gap-y-7 items-center justify-center">
                    <Image
                        src={WeddingText}
                        alt="couple cover"
                        className="object-contain self-center w-52 sm:w-60 mt-2" priority />
                    <div
                        data-aos="fade-up" data-aos-offset="" data-aos-duration="1000" data-aos-anchor="#home"
                        className="z-10 bg-[#ffffffcb] w-full flex flex-col gap-y-4 items-center justify-center p-5 rounded-xl"
                        style={{ maxWidth: 'calc(100% - 2rem)' }}>
                        <p className={`text-center text-2xl md:text-3xl text-balance`} >
                            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </p>
                        <p className={`text-center text-xl md:text-2xl text-balance`}>
                            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                        </p>
                        <p className={`${babyDoll.className} text-center text-sm md:text-base text-balance`}>
                            &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari
                            (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta
                            dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
                            (kebesaran Allah) bagi kaum yang berpikir.&quot; <br />(QS Ar Rum : 21).
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}