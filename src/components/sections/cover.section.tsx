"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';

// Styles
import 'react-modern-drawer/dist/index.css';
const schoolbell = localFont({ src: "../../assets/fonts/Schoolbell-Regular.ttf" });
const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

import CoverHero from "@/assets/cover_hero.jpg";
import MobileLayout from "@/components/layouts/mobile.layout";
import { useCoverStore } from "@/components/libs/stores/cover.store";
import { useMusicStore } from "@/components/libs/stores/music.store";
import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

export default function CoverSection({ to }: { to?: string }) {
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
                                className="object-cover object-top z-0 md:object-top w-96" priority />


                            <div className="absolute top-10 left-0 right-0"
                                data-aos="fade-down"
                                data-aos-delay="1200"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                <p className={` ${babyDoll.className}  flex w-full justify-center text-white font-normal text-4xl lg:text-6xl drop-shadow-2xl`} style={{ textShadow: '1px 1px 10px rgba(0,0,0, 0.5)' }}
                                >
                                    01 . 02 . 2025
                                </p>
                                <p className={`${shorelinesScript.className} flex w-full justify-center my-5 text-lg xxs:text-2xl`}>{NEWLYWEDS_TITLE}</p>
                            </div>


                            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black w-full p-4 mx-auto">
                                <div className={`${babyDoll.className} flex flex-col items-center pt-3 pb-2 justify-center text-balck text-xs xxs:text-base text-[#E8B787]`}
                                    data-aos="fade-up"
                                    data-aos-delay="2100"
                                    data-aos-duration="900"
                                    data-aos-offset="0"
                                >
                                    <p>{to? 'Kepada Yth:' : ""}</p>
                                    <h5 className="text-xl xxs:text-2xl font-semibold">{to ?? ""}</h5>
                                    {/* <p>di tempat</p> */}
                                </div>
                                <button
                                    onClick={handleOpenInvitation}
                                    className={`${schoolbell.className} btn btn-sm lg:btn-4xl rounded-full shadow-lg hover:shadow-xl bg-[#E8B787] hover:bg-[#E6B07B]/90 text-white font-normal border-none xss:text-md sm:text-base lg:text-lg`}
                                    data-aos="fade-up"
                                    data-aos-delay="1800"
                                    data-aos-duration="900"
                                    data-aos-offset="0"
                                >
                                    Open Invitation
                                </button>
                            </div>
                        </div>
                        <p className={` ${babyDoll.className} text-black font-normal text-xl lg:text-2xl text-pretty text-center`}
                            data-aos="fade-right"
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