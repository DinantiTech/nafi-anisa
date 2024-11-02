import Lottie from 'react-lottie';
import localFont from 'next/font/local';

import { Helpers } from '@/helpers/index.helper';
import ringAnimationJson from "@/assets/icon-animation/ring-animation.json";
import cheersAnimationJson from "@/assets/icon-animation/cheers-animation.json";
import { AKAD_DATE, AKAD_TIME, TASYUKURAN_DATE, MAPS_LOCATION } from '@/constants/event.const';
import { Icon } from '@iconify/react';
import HeadingTitle from '../micro/heading_title.micro';

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

export default function EventSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center my-5 text-black">
            {/* AKAD */}
            <div className='w-20 xxs:w-24'>
                <Lottie
                    options={{
                        loop: true,
                        animationData: ringAnimationJson,
                        autoplay: true,
                    }}
                />
            </div>

            <HeadingTitle className={` ${babyDoll.className}`} title='AKAD' />

            <div className={` ${babyDoll.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                    <div className='w-fit overflow-hidden'>
                        <div className='underline text-center' data-aos="fade-left">Ahad, {Helpers.formatDateRange(AKAD_DATE)} <br /> Pukul {AKAD_TIME}</div>
                    </div>
                </div>

                <div className='w-11/12 overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance'>
                        Jl. Masjid Baitul Matien Gang Situ Elok RT 01/06 Pernasidi Kec. Cilongok Kab. Banyumas
                    </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#E8B787]/90 border-none btn btn-sm xxs:btn-md bg-[#E8B787] text-white font-normal gap-x-1'>
                    <Icon icon="arcticons:google-maps-alt" />
                    Maps
                </button>
            </div>

            {/* RECEPTION */}
            <div className='w-20 xxs:w-24 mt-3 xxs:mt-5'>
                <Lottie
                    options={{
                        loop: true,
                        animationData: cheersAnimationJson,
                        autoplay: true,
                    }}
                />
            </div>

            <HeadingTitle className={` ${babyDoll.className}`} title='RESEPSI' />

            <div className={` ${babyDoll.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                    <div className='w-fit overflow-hidden'>
                        <div className='underline text-center' data-aos="fade-left">
                            Ahad, {Helpers.formatDateRange(AKAD_DATE)}
                            {/* <br /> Pukul {AKAD_TIME} */}
                        </div>
                    </div>
                </div>

                <div className='w-11/12 overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance'>
                        Jl. Masjid Baitul Matien Gang Situ Elok RT 01/06 Pernasidi Kec. Cilongok Kab. Banyumas
                    </p>
                </div>

                <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className='flex items-center justify-center xxs:text-lg hover:bg-[#E8B787]/90 border-none btn btn-sm xxs:btn-md bg-[#E8B787] text-white font-normal gap-x-1'>
                    <Icon icon="simple-icons:googlemaps" />
                    Maps
                </button>
            </div>

            <HeadingTitle className={` ${babyDoll.className} mt-16 text-center`} title='TASYAKURAN <br /> PERNIKAHAN' />

            <div className={` ${babyDoll.className} flex flex-col items-center justify-center my-2 gap-y-3`}>
                <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                    <div className='w-fit overflow-hidden'>
                        <div className='underline text-center' data-aos="fade-left">
                            Ahad, {Helpers.formatDateRange(TASYUKURAN_DATE)}
                            {/* <br /> Pukul {AKAD_TIME} */}
                        </div>
                    </div>
                </div>

                <div className='w-11/12 overflow-hidden'>
                    <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance'>
                        Dusun Sentul, 05/09, Desa Sukorejo, Kec. Sukorejo, Kab. Kendal
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