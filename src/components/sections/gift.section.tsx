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

export default function GiftSection() {
    const copyToClipboard = (value: string) => {
          navigator.clipboard.writeText(value);
        //   toast.custom((t) => (
        //     <div
        //       className={`${t.visible ? 'animate-enter' : 'animate-leave'
        //         } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 justify-between items-center py-4 px-4`}
        //     >
        //       <div className="flex items-center justify-center gap-x-2">
        //         <p className="text-sm text-gray-900">
        //           No REK {value} berhasil disalin
        //         </p>
        //       </div>
    
        //       <Icon icon="ep:success-filled" className="text-lg text-green-600" />
        //     </div>
        //   ))
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

            <button className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 mt-4 sm:mt-6 font-normal">
                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                COPY ADDRESS
            </button>
            
            <Carousel className="w-full my-10 sm:my-16" showArrows={true} infiniteLoop >
                <div className="aspect-video w-full">
                    <div className="flex items-center justify-between flex-col w-full h-full p-6 shadow-md border">

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
                            <button onClick={() => copyToClipboard("1732240455")} className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 font-normal">
                                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                                COPY
                            </button>
                        </div>
                    </div>
                </div>

                <div className="aspect-video w-full">
                    <div className="flex items-center justify-between flex-col w-full h-full p-6 shadow">

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
                            <button className="btn btn-sm sm:btn-md text-white flex items-center justify-center bg-[#945C5C] hover:bg-[#945C5C]/90 font-normal">
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