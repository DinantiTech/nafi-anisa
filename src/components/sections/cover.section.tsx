"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';
import { Archivo_Black } from 'next/font/google'

// Styles
import 'react-modern-drawer/dist/index.css';
const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
// const britannic = localFont({ src: "../../assets/fonts/britanic.ttf", display: 'swap', });
const doraefont = localFont({ src: "../../assets/fonts/Doraefont.ttf" });
const archivo = Archivo_Black({
    subsets: ['latin'],
    weight: "400"
})
// const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

import CoverHero from "@/assets/cover_name_only.webp";
import CurvedText from "@/assets/curved_text.svg";
import MobileLayout from "@/components/layouts/mobile.layout";
import { useCoverStore } from "@/components/libs/stores/cover.store";
import { useMusicStore } from "@/components/libs/stores/music.store";
// import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

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
                        <div className="h-20 bg-[#C03030] w-full relative z-30">
                            <div className="h-20 bg-[#FBFD78] w-20 rounded-full absolute -bottom-9 left-1/2 -translate-x-1/2"></div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center px-8 gap-y-4 w-full pt-28  before:bg-white before:content-['*'] before:absolute before:z-0 before:top-[-13rem] before:h-[50rem] before:w-[40rem] before:rounded-full ">
                            <Image
                                src={CurvedText}
                                alt="curved text"
                                className="object-contain z-0 absolute top-10 max-w-96 w-full" priority />

                            <div id="curve" className="overflow-hidden relative shadow-2xl rounded-full "
                                data-aos="zoom-out-up"
                                data-aos-offset="300"
                                data-aos-delay="300"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-sine"
                            >
                                <Image
                                    src={CoverHero}
                                    alt="couple cover"
                                    className="object-cover object-top z-0 md:object-top w-64 " priority />


                                <div className="absolute top-0 left-0 right-0"
                                    data-aos="fade-down"
                                    data-aos-delay="1200"
                                    data-aos-duration="900"

                                    data-aos-offset="0">
                                    <p className={` ${archivo.className} drop-shadow-[10px_10px_11.4px_0_#00000070]  flex w-full justify-center text-white font-normal text-3xl pt-10`} style={{ textShadow: '1px 1px 10px rgba(0,0,0, 0.5)' }}
                                    >
                                        31.03.25
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center  w-full p-4 mx-auto bg-[#4FBBE7] pt-32 -mt-24 pb-32">
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