import Lottie from 'react-lottie';

import { Helpers } from '@/helpers/index.helper';
import ringAnimationJson from "@/assets/icon-animation/ring-animation.json";
import cheersAnimationJson from "@/assets/icon-animation/cheers-animation.json";
import { AKAD_DATE, AKAD_TIME, END_DATE_RECEPTION, END_TIME_RECEPTION, MAPS_LOCATION, START_DATE_RECEPTION, START_TIME_RECEPTION } from '@/constants/event.const';
import { Icon } from '@iconify/react';

export default function EventSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center my-5 text-black">
            {/* AKAD */}
            <div className='w-20 xxs:w-32'>
                <Lottie
                    options={{
                        loop: true,
                        animationData: ringAnimationJson,
                        autoplay: true,
                    }}
                />
            </div>

            <h2 className='-mt-1 tracking-wide font-semibold text-lg xxs:text-2xl sm:text-3xl xxs:font-semibold'>AKAD</h2>

            <div className='flex flex-col items-center justify-center my-3 gap-y-3'>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl my-2 sm:my-3'>
                    <div className='w-fit overflow-hidden'>
                        <div data-aos="fade-left">{Helpers.formatDateRange(AKAD_DATE)}</div>
                    </div>

                    <div data-aos="fade-down" className="divider divider-horizontal divider-neutral mx-0" />

                    <div className='w-fit overflow-hidden'>
                        <div data-aos="fade-right">{AKAD_TIME}</div>
                    </div>
                </div>

                <div className='w-fit overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center'>PESAREN, RT. 02/ RW.02, <br /> SUKOREJO, KENDAL, JAWA TENGAH. </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#945C5C]/90 border-none btn btn-sm xxs:btn-md bg-[#945C5C] text-white font-normal gap-x-1'>
                    <Icon icon="jam:paper-plane" />
                    Maps
                </button>
            </div>

            {/* RECEPTION */}
            <div className='w-20 xxs:w-32 mt-3 xxs:mt-5'>
                <Lottie
                    options={{
                        loop: true,
                        animationData: cheersAnimationJson,
                        autoplay: true,
                    }}
                />
            </div>

            <h2 className='-mt-1 tracking-wide font-semibold text-lg xxs:text-2xl sm:text-3xl xxs:font-semibold'>RESEPSI</h2>

            <div className='flex flex-col items-center justify-center my-3 gap-y-3'>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl my-2 sm:my-3'>
                    <div className='w-20 xxs:w-24 sm:w-32 overflow-hidden text-right'>
                        <div data-aos="fade-left">{Helpers.formatDateRange(START_DATE_RECEPTION, END_DATE_RECEPTION)}</div>
                    </div>
                    
                    <div data-aos="fade-down" className="divider divider-horizontal divider-neutral mx-0" />

                    <div className='w-20 xxs:w-24 sm:w-32 overflow-hidden'>
                        <div data-aos="fade-right">{START_TIME_RECEPTION} - {END_TIME_RECEPTION?.toLowerCase() === "finish".toLowerCase() ? "Selesai" : ""}</div>
                    </div>
                </div>

                <div className='w-fit overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center'>PESAREN, RT. 02/ RW.02, <br /> SUKOREJO, KENDAL, JAWA TENGAH. </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#945C5C]/90 border-none btn btn-sm xxs:btn-md bg-[#945C5C] text-white font-normal gap-x-1'>
                    <Icon icon="jam:paper-plane" />
                    Maps
                </button>
            </div>
        </div>
    );
}