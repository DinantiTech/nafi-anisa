"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';
import { Archivo_Black } from 'next/font/google'

// Styles
import 'react-modern-drawer/dist/index.css';
const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const doraefont = localFont({ src: "../../assets/fonts/Doraefont.ttf" });

// const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

import CoverHero from "@/assets/cover_character_only.webp";
import CurvedText from "@/assets/curved_text.svg";
import WeddingText from "@/assets/name_only_text.webp";
import MobileLayout from "@/components/layouts/mobile.layout";
import { useCoverStore } from "@/components/libs/stores/cover.store";
import { useMusicStore } from "@/components/libs/stores/music.store";
// import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

const archivo = Archivo_Black({
    subsets: ['latin'],
    weight: "400"
})
export default function CoverSection({ to }: { to?: string }) {
    const { setMusic } = useMusicStore();
    const { isCover, setCover } = useCoverStore();


    const handleOpenInvitation = () => {
        setMusic(true);
        setCover(false);
    }

    return (
        <Drawer open={isCover} direction="left" zIndex={100} customIdSuffix="cover-drawer" size="100%" className="">
            <div className="fixed top-0 left-0 max-h-screen min-h-screen w-full bg-[#4FBBE7] h-full">
                <MobileLayout className="overflow-hidden h-screen" id="cover">
                    <div className="h-full w-full flex flex-col items-center ">
                        <div
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            className="h-12 sm:h-14 bg-[#C03030] w-full z-30 flex justify-center">
                            <div className="h-12 sm:h-14 bg-[#FBFD78] w-12 sm:w-14 rounded-full mt-6"></div>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-delay="800"
                            data-aos-duration="800"
                            data-aos-offset="0"
                            className="relative flex flex-col items-center justify-center px-8 gap-y-4 w-full pt-28  before:bg-white before:content-['*'] before:absolute before:z-0 before:top-[-13rem] before:h-[38rem] xs:before:h-[42rem] sm:before:h-[49rem] before:w-[40rem] before:rounded-full ">
                            <Image
                                data-aos="fade-down"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                src={CurvedText}
                                alt="curved text"
                                className="object-contain z-0 absolute top-10 max-w-96 w-[88%]  sm:w-full" priority />

                            <div id="curve" className="overflow-hidden relative shadow-2xl rounded-full -mt-6 xs:-mt-5 sm:-mt-4"
                                data-aos="zoom-out-up"
                                data-aos-offset="300"
                                data-aos-delay="500"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-sine"
                            >
                                <Image
                                    src={CoverHero}
                                    alt="couple cover"
                                    className="object-cover object-top z-0 md:object-top w-40 xs:w-48 sm:w-64" priority />


                                <div className="absolute top-0 left-0 right-0 flex flex-col align-middle"
                                    data-aos="fade-down"
                                    data-aos-delay="1200"
                                    data-aos-duration="700"
                                    data-aos-offset="0">
                                    <p className={` ${archivo.className} flex w-full justify-center text-white font-normal text-2xl sm:text-4xl pt-10`} style={{ textShadow: 'rgba(0, 0, 0, 0.44) 2px 2px 4px' }}
                                    >
                                        31.03.25
                                    </p>
                                    <Image
                                    src={WeddingText}
                                    alt="couple cover"
                                    className="object-contain self-center w-32 sm:w-40 mt-2" priority />

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center  w-full p-4 mx-auto bg-[#4FBBE7] pt-32 sm:pt-32 -mt-24">
                            <div className={`${babyDoll.className} flex flex-col items-center pt-3 pb-2 justify-center text-xs xxs:text-base text-[#fff]`}
                                data-aos="fade-up"
                                data-aos-delay="2100"
                                data-aos-duration="900"
                                data-aos-offset="0"
                            >
                                <p className="drop-shadow-[-9px_2px_4px_0_#00000040]">{to ? 'Kepada Yth:' : ""}</p>
                                <h5 className="drop-shadow-[-9px_2px_4px_0_#00000040] text-xl xxs:text-2xl font-semibold text-center">{to ?? ""}</h5>
                                {/* <p>di tempat</p> */}
                            </div>
                            <button
                                onClick={handleOpenInvitation}
                                className={`${doraefont.className} btn btn-sm lg:btn-4xl rounded-full shadow-lg hover:shadow-xl bg-[#53C3F1] hover:bg-[#53C9F1]/90 text-white font-normal border-none xss:text-md sm:text-base lg:text-lg`}
                                data-aos="fade-up"
                                data-aos-delay="1800"
                                data-aos-duration="900"
                                data-aos-offset="0"
                            >
                                Open Invitation
                            </button>
                        </div>
                    </div>
                </MobileLayout>
            </div >
        </Drawer >
    );
}