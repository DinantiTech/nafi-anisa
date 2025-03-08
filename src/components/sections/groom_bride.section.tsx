import Image from "next/image";
import localFont from "next/font/local";

import IconGroomBride from "@/assets/stand_by_me.webp";
import Bubble from "@/assets/bubble.svg";
import GroomImg from "@/assets/couple/groom.svg";
import BrideImg from "@/assets/couple/bride.svg";
import { BRIDE_FATHER, BRIDE_MOTHER, BRIDE_NAME, BRIDE_USERNAME, GROOM_FATHER, GROOM_MOTHER, GROOM_NAME, GROOM_USERNAME } from "@/components/libs/constants/others.const";
import Link from "next/link";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

export default function GroomBrideSection() {
    return (
        <div className="flex flex-col justify-center align-middle py-7 px-2 text-black z-10" id='couple'>
            <div data-aos="fade-down" data-aos-offset="300" data-aos-duration="1200" className="flex flex-col gap-y-2 items-center pb-5 px-6">
                <Image src={IconGroomBride} className="w-full" sizes="100vw" alt="icon groom and bride" />
            </div>

            <div className="mt-12 ml-6 sm:ml-12 flex flex-col items-start justify-center gap-y-10">
                {/* Bride */}
                <div className="flex flex-col justify-center items-center">
                    <div className={`-mt-5 bg-no-repeat bg-cover bg-center bg-fixed relative`}>
                        <Image data-aos="fade-right" data-aos-duration="1200" src={Bubble} alt="bride" className="w-[296px]" />
                        <p data-aos="fade-right" data-aos-duration="1200" className={`${babyDoll.className} text-right text-sm p-5 leading-4 text-gray-600 absolute top-1 right-2 w-full`}>
                            <span className="font-bold text-black">{BRIDE_NAME}</span> <br />
                            Putri Keempat dari <br /> Bapak {BRIDE_FATHER} <br/>& Ibu {BRIDE_MOTHER} <br />
                            <span><Link href={`https://www.instagram.com/${BRIDE_USERNAME.replace(/@/g, '')}`} target="_blank">{BRIDE_USERNAME}</Link></span>
                        </p>
                    </div>
                    <Image data-aos="fade-right" data-aos-duration="1200" src={BrideImg} alt="groom" className="h-auto xs:h-56 w-1/2 xs:w-auto image-animation-updown" />
                </div>
            </div>
            <div className="-mt-8 mr-0 sm:mr-12 flex flex-col items-end justify-center gap-y-10">
                {/* GROOM */}
                <div className="flex flex-col justify-center items-center">
                    <Image data-aos="fade-right" data-aos-duration="1200" src={GroomImg} alt="groom" className="h-auto w-1/2 xs:h-56 xs:w-auto image-animation-updown" style={{ animationDelay: '2s' }} />
                    <div className={`-mt-5 bg-no-repeat bg-cover bg-center bg-fixed relative`}>
                        <Image data-aos="fade-right" data-aos-duration="1200" src={Bubble} alt="GROOM" className="w-auto xs:w-[326px]" style={{ transform: 'rotate(180deg)' }} />
                        <p data-aos="fade-right" data-aos-duration="1200" className={`${babyDoll.className} text-left text-sm py-5 px-8 pt-8 xs:pt-7 leading-4 text-gray-600 absolute top-7 xs:top-8 left-1 w-full`}>
                            <span className="font-bold text-black">{GROOM_NAME}</span> <br />
                            Putra Ketiga dari <br /> Bapak {GROOM_FATHER} <br/>& Ibu {GROOM_MOTHER} <br />
                            <span><Link href={`https://www.instagram.com/${GROOM_USERNAME.replace(/@/g, '')}`} target="_blank">{GROOM_USERNAME}</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}