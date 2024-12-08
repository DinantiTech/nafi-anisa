import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image";
import Lottie from "lottie-react";

import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";
import { GaleryImages } from "@/libs/constants/galeries.const";

import galeryAnimationData from "@/assets/icon-animation/galery-animation.json";

export default function GaleriesSection() {
    return (
        <MobileLayout>
            <div className="px-4 py-8 bg-[#945C5C]/70 flex flex-col items-center justify-center gap-y-5 mt-14 h-full w-full text-white">
            <div className='w-16 xxs:w-20'>
                <Lottie
                    loop
                    animationData={galeryAnimationData}
                    autoplay
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
            </div>
                <div className="-mt-7">
                    <HeadingTitle title="OUR GALLERY" className="text-black" />
                </div>

                {/* <Masonry gutter="10px" className="gap-4 mt-3">
                    {GaleryImages?.map((img, idx) => (
                        <Image data-aos="fade-up" key={idx} src={img} alt={img.src} sizes="100vw" className="w-full h-full object-cover rounded-xl" />
                    ))}
                </Masonry> */}
            </div>
        </MobileLayout>
    );
}