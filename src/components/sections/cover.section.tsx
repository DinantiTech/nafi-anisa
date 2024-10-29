"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';

// Styles
import 'react-modern-drawer/dist/index.css';
const schoolbell = localFont({ src: "../../assets/fonts/Schoolbell-Regular.ttf" });
const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

import CoverHero from "@/assets/cover_hero.jpg";
import MobileLayout from "@/components/layouts/mobile.layout";
import { useMusicStore } from "@/stores/music.store";
import { useCoverStore } from "@/stores/cover.store";

export default function CoverSection() {
    const { setMusic } = useMusicStore();
    const { isCover, setCover } = useCoverStore();


    const handleOpenInvitation = () => {
        setMusic(true);
        setCover(false);
    }

    return (
        <Drawer open={isCover} direction="left" zIndex={100} customIdSuffix="cover-drawer" size="100%" className="">
            <div className="fixed top-0 left-0 max-h-screen min-h-screen w-full bg-[#FFFBEF] h-full">
                <MobileLayout className="overflow-hidden h-screen " id="cover">
                    <div className="absolute z-20 h-full w-full flex flex-col items-center justify-center px-8 gap-y-4">
                        <div className="overflow-hidden relative shadow-2xl"
                            data-aos="zoom-out-up"
                            data-aos-offset="300"
                            data-aos-delay="300"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-sine"
                        >
                            <Image
                                src={CoverHero}
                                alt="couple cover"
                                sizes='30vh'
                                className="object-cover object-top z-0 md:object-top" />

                            <p className={` ${babyDoll.className} absolute top-10 left-0 right-0 flex w-full justify-center text-white font-normal text-2xl lg:text-6xl`}
                                data-aos="fade-down"
                                data-aos-delay="1200"
                                data-aos-duration="900"
                                data-aos-offset="0"
                            >
                                24 . 10 . 2024
                            </p>

                            <div className="absolute bottom-6 lg:botton-14 left-0 right-0 flex flex-col items-center justify-center">
                                <button
                                    onClick={handleOpenInvitation}
                                    className={`${schoolbell.className} btn btn-sm lg:btn-2xl rounded-full shadow-lg hover:shadow-xl bg-[#E8B787] hover:bg-[#E6B07B]/90 text-white font-normal border-none xss:text-md sm:text-base lg:text-lg`}
                                    data-aos="fade-up"
                                    data-aos-delay="1800"
                                    data-aos-duration="900"
                                    data-aos-offset="0"
                                >
                                    OPEN INVITATION
                                </button>
                            </div>
                        </div>
                        <p className={` ${babyDoll.className} text-black font-normal text-xl lg:text-2xl text-pretty text-center`}
                            data-aos="fade-down"
                            data-aos-delay="2700"
                            data-aos-duration="900"
                            data-aos-offset="0"
                        >
                            THE BEGINNING OF AN ETERNAL BOND
                        </p>
                    </div>
                </MobileLayout>
            </div>
        </Drawer>
    );
}