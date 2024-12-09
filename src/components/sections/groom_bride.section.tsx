import Image from "next/image";
import localFont from "next/font/local";

import IconGroomBride from "@/assets/icon_groom_bride.svg";
import GroomImg from "@/assets/couple/groom.png";
import BrideImg from "@/assets/couple/bride.png";
import { BRIDE_FATHER, BRIDE_MOTHER, BRIDE_NAME, BRIDE_USERNAME, GROOM_FATHER, GROOM_MOTHER, GROOM_NAME, GROOM_USERNAME } from "@/components/libs/constants/others.const";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

export default function GroomBrideSection() {
    return (
        <div data-aos="fade-down" data-aos-offset="300" className="flex flex-col justify-center py-7 px-7 text-black" id='couple'>
            <div className="flex flex-col gap-y-2 items-center pb-5">
                <Image src={IconGroomBride} className="w-28" sizes="100vw" alt="icon groom and bride" />
                <h3 className={` ${babyDoll.className} text-[#E8B787] tracking-widest font-semibold xxs:text-2xl text-lg`}>GROOM & BRIDE</h3>
                <svg className="w-fit -mt-3" width="220" viewBox="0 0 1664 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 106.402C5 81.8974 61.0263 77.2147 96.8889 70.1725C339.728 22.4877 728.039 -40.7568 956.403 54.4209C1116.92 121.319 712.093 157.733 774.039 100.889C795.098 81.5648 890.239 77.5779 924.596 74.8982C1166.39 56.0386 1415.83 59.2924 1659 56.7835" stroke="#E8B787" strokeWidth="10" strokeLinecap="round" />
                </svg>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-y-10">
                {/* Groom */}

                <div className="flex flex-col xxs:flex-row justify-center items-center xxs:items-end">
                    <Image data-aos="fade-right" data-aos-duration="500" src={GroomImg} alt="groom" className="h-auto w-1/2 xs:h-56 xs:w-auto" />
                    <div className={`-mt-5 bg-no-repeat bg-cover bg-center bg-fixed p-5 xs:pl-14 xxs:-ml-4 xs:pr-7 xs:p-9 xs:-ml-12 md:pr-8 lg:pr-8`} id="couple_texture">
                        <p className={`${babyDoll.className} text-left text-sm leading-6 md:leading-7 lg:leading-8 text-gray-600`}>
                            <span className="font-bold text-black">{GROOM_NAME}</span> <br />
                            Putra dari {GROOM_FATHER} <br /> & {GROOM_MOTHER} <br />
                            {GROOM_USERNAME}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col xxs:flex-row-reverse justify-center items-center xxs:items-end">
                    <Image data-aos="fade-left" data-aos-duration="500" src={BrideImg} alt="Bride" className="h-auto w-1/2 xs:h-56 xs:w-auto"/>
                    <div className={`-mt-5 bg-no-repeat bg-cover bg-center bg-fixed p-5 xs:pr-14 xxs:-mr-5 xxs:pl-5 sm:p-9 xs:-mr-12`} id="couple_texture">
                        <p className={`${babyDoll.className} text-left text-sm leading-6 md:leading-7 lg:leading-8 text-gray-600`}>
                            <span className="font-bold text-black">{BRIDE_NAME}</span> <br />
                            Putri dari {BRIDE_FATHER} <br /> & {BRIDE_MOTHER} <br />
                            {BRIDE_USERNAME} 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}