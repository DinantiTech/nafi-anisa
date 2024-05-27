"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';
import { useState } from "react";

// Styles
import 'react-modern-drawer/dist/index.css';

const newYorkFont = localFont({ src: "../../assets/fonts/NewYork.otf" });
const creattionDemoFont = localFont({ src: "../../assets/fonts/CreattionDemo.otf" })

import Cover from "@/assets/cover.png";
import MobileLayout from "@/components/layouts/mobile.layout";
import BgAnd from "@/assets/bg_&.svg";

export default function CoverSection() {
    const [drawer, setDrawer] = useState<boolean>(true);

    return (
        <Drawer open={drawer} direction="left" zIndex={100} customIdSuffix="cover-drawer" size="100%">
            <div className="fixed top-0 left-0 max-h-screen min-h-screen w-full bg-white">
                <MobileLayout>
                    
                    <Image src={BgAnd} sizes='100vw' alt="" className="absolute top-0 left-0 z-10 w-full min-h-max h-full bg-white/50 object-cover opacity-60 " />

                    <div className="absolute z-20 h-full w-full flex flex-col items-center justify-center px-8 gap-y-36 xxs:gap-y-44 md:gap-y-52 lg:gap-y-60">

                        <div className="flex justify-start flex-col items-start w-full font-semibold text-xs xxs:text-lg text-black">

                            <p data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="1200" data-aos-duration="500">JOIN US FOR</p>
                            <p data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="1400" data-aos-duration="600">THE WEDDING OF</p>

                        </div>

                        <div className="w-full flex justify-end">
                            <div className="flex flex-col items-center justify-center text-black">
                                <div className={`${newYorkFont.className} relative text-4xl xxs:text-6xl font-medium leading-6 xxs:leading-8`}>

                                    <h4 className="text-left" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="1200" data-aos-duration="600">Nafi</h4>

                                    <div className="text-right">
                                        <p className={`${creattionDemoFont.className}`} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="1400" data-aos-duration="700">and</p>
                                        <h4 className="xxs:mt-3 -mr-10" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="1600" data-aos-duration="800">Alif</h4>
                                    </div>

                                </div>

                                <div data-aos="fade-right" data-aos-delay="1700" data-aos-duration="800" className="h-0.5 xxs:h-1 w-20 bg-black mt-3 xxs:mt-6 rounded-full" />

                                <p 
                                    className="xxs:my-5 my-3 font-bold text-[0.6rem] xxs:text-sm"
                                    data-aos="flip-down"
                                    data-aos-delay="1800"
                                    data-aos-duration="800"
                                >
                                    20 - 21 JUNE 2024
                                </p>

                                <button
                                    onClick={() => setDrawer(false)}
                                    className="btn btn-sm xxs:btn-md bg-[#A97373] hover:bg-[#A97373]/90 duration-300 text-white font-semibold border-none xss:text-md text-xs"
                                    data-aos="zoom-in"
                                    data-aos-delay="1900"
                                    data-aos-duration="900"
                                    data-aos-offset="0"
                                >    
                                    OPEN INVITATION
                                </button>
                            </div>
                        </div>
                    </div>

                    <Image 
                        src={Cover}
                        data-aos="zoom-out-up"
                        data-aos-offset="300"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-sine"
                        alt="couple cover"
                        sizes='100vw' 
                        className="object-cover object-top z-0 md:object-top h-screen" />

                </MobileLayout>
            </div>
        </Drawer>
    );
}