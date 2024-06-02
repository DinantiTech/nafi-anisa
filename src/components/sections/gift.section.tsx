import Lottie from "react-lottie";
import { Icon } from "@iconify/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import MobileLayout from "../layouts/mobile.layout";
import giftAnimationData from "@/assets/icon-animation/gift-animation.json";
import HeadingTitle from "../micro/heading_title.micro";

import LogoBNI from "@/assets/logo/BNI_logo.svg";
import IconMastercard from "@/assets/logo/mastercard.svg";
import LogoShopeepay from "@/assets/logo/ShopeePay.svg";
import LogoDana from "@/assets/logo/DANA.svg";
import LogoOvo from "@/assets/logo/OVO.svg";
import toast, { Toaster } from "react-hot-toast";
import { ADDRESS_GIFT } from "@/constants/others.const";

export default function GiftSection() {
    const copyToClipboard = ({ value, type }: { value: string, type: "REK" | "ADDRESS" }) => {
        navigator.clipboard.writeText(value);
        return toast.success(type === "REK" ? `Bank account number : ${value} has been copied successful` : "Address has been copied successful");
    };

    return (
        <MobileLayout className="flex items-center flex-col">
            <Toaster position="top-center" reverseOrder={false} />

            <div className='w-24 xxs:w-28 sm:w-32'>
                <Lottie
                    options={{
                        loop: true,
                        animationData: giftAnimationData,
                        autoplay: true,
                    }}
                />
            </div>

            <HeadingTitle title="SEND GIFT" className="-mt-5" />

            <p className="text-center mt-4 text-xs xxs:text-sm sm:text-base px-4">Jika memberi adalah bentuk tanda kasih Anda, fitur ini dapat memberikan Anda kemudahan</p>

            <button onClick={() => copyToClipboard({value: ADDRESS_GIFT, type: "ADDRESS"})} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 mt-4 sm:mt-6 font-normal border-0">
                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                COPY ADDRESS
            </button>
            
            <Carousel className="w-full my-10 sm:my-16" showArrows={true} infiniteLoop >
                <div className="aspect-video w-full bg-white">
                    <div className="flex items-center justify-between flex-col w-full h-full p-6 border">

                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-center">
                                <div className="md:w-52 sm:w-40 xxs:w-32 w-24">
                                    <Image src={LogoBNI} alt="Icon BNI" sizes="100vw" className="" />
                                </div>
                                <p className="font-semibold text-xs xxs:text-sm sm:text-lg">Bank Negara Indonesia</p>
                            </div>
                            <div className="xxs:w-14 w-10">
                                <Image src={IconMastercard} alt="icon mastercard" sizes="100vw" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-center xxs:text-base text-sm">
                                <p className="font-semibold">1732240455</p>
                                <p>Annisa Fikri Annafi</p>
                            </div>
                            <button onClick={() => copyToClipboard({value: "1732240455", type: "REK"})} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 font-normal">
                                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                                COPY
                            </button>
                        </div>
                    </div>
                </div>

                <div className="aspect-video w-full bg-white">
                    <div className="flex items-center justify-between flex-col w-full h-full p-6 border">

                        <div className="flex items-center justify-between w-full">

                            <div className="flex flex-col items-center justify-end w-fit">
                                <div className="flex items-center justify-center gap-x-1 sm:w-16 xxs:w-14 w-10">
                                    <Image src={LogoShopeepay} alt="Icon BNI" sizes="100vw" />
                                    <Image src={LogoDana} alt="Icon BNI" sizes="100vw" />
                                    <Image src={LogoOvo} alt="Icon BNI" sizes="100vw" />
                                </div>
                                <p className="font-semibold text-xs xxs:text-sm sm:text-lg">SHOPEE, DANA, OVO</p>
                            </div>

                            <div className="xxs:w-14 w-10">
                                <Image src={IconMastercard} alt="icon mastercard" sizes="100vw" />
                            </div>

                        </div>

                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-center xxs:text-base text-sm">
                                <p className="font-semibold">081215210445</p>
                                <p>Ridzki Alif Kurniawan</p>
                            </div>
                            <button onClick={() => copyToClipboard({value: "081215210445", type: "REK"})} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 font-normal">
                                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                                COPY
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </MobileLayout>
    );
}