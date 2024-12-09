"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import localFont from 'next/font/local';
import dynamic from "next/dynamic";

import { Helpers } from '@/components/libs/helpers/index.helper';
import ringAnimationJson from "@/assets/icon-animation/ring-animation.json";
import cheersAnimationJson from "@/assets/icon-animation/cheers-animation.json";
import { AKAD_DATE, AKAD_TIME, START_TIME_RECEPTION, MAPS_LOCATION, ADDRESS_LOCATION } from '@/components/libs/constants/event.const';
import { Icon } from '@iconify/react';
import HeadingTitle from '../micro/heading_title.micro';

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false }); 

export default function EventSection() {

    return (
        <div className="w-full flex flex-col items-center justify-center my-5 text-black" id='event'>
            {/* AKAD */}
            <div className='w-20 xxs:w-24'>
                {/* <div ref={animationContainer} /> */}
                <DynamicLottie
                    loop
                    animationData={ringAnimationJson}
                    autoplay
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
            </div>

            <HeadingTitle className={` ${babyDoll.className}`} title='AKAD' />

            <div className={` ${babyDoll.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                    <div className='w-fit overflow-hidden'>
                        <div className='underline text-center' data-aos="fade-left">Sabtu, {Helpers.formatDateRange(AKAD_DATE)} <br /> Pukul {AKAD_TIME}</div>
                    </div>
                </div>

                <div className='w-11/12 overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance'>
                        {ADDRESS_LOCATION}
                    </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#E8B787]/90 border-none btn btn-sm xxs:btn-md bg-[#E8B787] text-white font-normal gap-x-1'>
                    <Icon icon="simple-icons:googlemaps" />
                    Maps
                </button>
            </div>

            {/* RECEPTION */}
            <div className='w-20 xxs:w-24 mt-3 xxs:mt-5'>
                <DynamicLottie
                    loop
                    animationData={cheersAnimationJson}
                    autoplay
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
            </div>

            <HeadingTitle className={` ${babyDoll.className}`} title='RESEPSI' />

            <div className={` ${babyDoll.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                    <div className='w-fit overflow-hidden'>
                        <div className='underline text-center' data-aos="fade-left">
                            Sabtu, {Helpers.formatDateRange(AKAD_DATE)}
                            <br /> Pukul {START_TIME_RECEPTION}
                        </div>
                    </div>
                </div>

                <div className='w-11/12 overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance'>
                        {ADDRESS_LOCATION}
                    </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#E8B787]/90 border-none btn btn-sm xxs:btn-md bg-[#E8B787] text-white font-normal gap-x-1'>
                    <Icon icon="simple-icons:googlemaps" />
                    Maps
                </button>
            </div>
        </div>
    );
}