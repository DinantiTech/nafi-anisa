import Image from "next/image";
import Lottie from "lottie-react";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import toast, { Toaster } from "react-hot-toast";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import MobileLayout from "../layouts/mobile.layout";
import giftAnimationData from "@/assets/icon-animation/gift-animation.json";
import HeadingTitle from "../micro/heading_title.micro";

import IconMastercard from "@/assets/logo/mastercard.svg";
import LogoDana from "@/assets/logo/dana.png";
import LogoCIMB from "@/assets/logo/CIMB.png";
import LogoBSI from "@/assets/logo/BSI.png";

import { ADDRESS_GIFT } from "@/libs/constants/others.const";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

const inter = Inter({ subsets: ['latin'] })


export default function GiftSection() {
    const copyToClipboard = ({ value, type }: { value: string, type: "REK" | "ADDRESS" | "VIR" }) => {
        navigator.clipboard.writeText(value);
        return toast.success(type === "REK" ? `Bank account number : ${value} has been copied successful` : type === "VIR" ? `E-wallet phone number : ${value} has been copied successful` : "Address has been copied successful");
    };

    const payments = [
        { name: 'DANA', img: LogoDana, value: '085692609144', beneficiary: 'Zuhrotun Firdausi Azhar' },
        { name: 'CIMB', img: LogoCIMB, value: '762426742400', beneficiary: 'Zuhrotun Firdausi Azhar' },
        { name: 'BSI', img: LogoBSI, value: '7166039937', beneficiary: 'Zuhrotun Firdausi Azhar' }
    ]

    return (
        <MobileLayout className={`${babyDoll.className} flex items-center flex-col`}>
            <Toaster position="top-center" reverseOrder={false} />

            <div className='w-24 xxs:w-28 sm:w-32' id="gift">
                <Lottie
                    loop
                    animationData={giftAnimationData}
                    autoplay
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
            </div>

            <HeadingTitle title="SEND GIFT" className={` ${babyDoll.className} -mt-5`} />

            <p className="text-center mt-4 text-xs xxs:text-sm sm:text-base px-4" data-aos="fade-down">Jika memberi adalah bentuk tanda kasih Anda, fitur ini dapat memberikan Anda kemudahan</p>

            <button data-aos="fade-in" onClick={() => copyToClipboard({ value: ADDRESS_GIFT, type: "ADDRESS" })} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#E8B787] hover:bg-[#E8B787]/90 mt-4 sm:mt-6 font-normal border-0">
                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                <p>COPY ADDRESS</p>
            </button>

            <Carousel className={`${inter.className} w-full my-10 sm:my-10`} showArrows={true} infiniteLoop autoPlay showThumbs={false} >
                { payments?.map((data, idx) => (
                    <div key={idx} className="w-full bg-white">
                        <div className="flex items-center justify-between flex-col w-full h-60 p-6 border">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col items-start justify-center">
                                    <div className="md:w-52 sm:w-40 xxs:w-32 w-24">
                                        <Image src={data?.img} alt={data?.name} sizes="100vw" className="" loading="lazy" />
                                    </div>
                                    {/* <p className="font-semibold text-xs xxs:text-sm sm:text-lg">Bank Rakyat Indonesia</p> */}
                                </div>
                                <div className="xxs:w-14 w-10">
                                    <Image src={IconMastercard} alt="icon mastercard" sizes="100vw" loading="lazy" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col items-start justify-center xxs:text-base text-sm">
                                    <p className="font-semibold text-lg">{data?.value}</p>
                                    <p className="italic">{data?.beneficiary}</p>
                                </div>
                                <button onClick={() => copyToClipboard({ value: data?.value, type: "REK" })} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#E8B787] hover:bg-[#E8B787]/90 font-normal">
                                    <Icon className="text-lg" icon="solar:copy-line-duotone" />
                                    COPY
                                </button>
                            </div>
                        </div>
                    </div>
                )) }
            </Carousel>
        </MobileLayout>
    );
}