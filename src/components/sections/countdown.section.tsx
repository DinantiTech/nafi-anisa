import Image from "next/image";
import localFont from "next/font/local";

import MobileLayout from "@/components/layouts/mobile.layout";
import ImgCountdown from "@/assets/img_countdown.png"
import useTimer from "@/libs/hooks/countdown.hook";
import { AKAD_DATE } from "@/libs/constants/event.const";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

export default function CountdownSection() {
    const { days, hours, minutes } = useTimer(new Date(`${AKAD_DATE}T08:00:00`));

    return (
        <MobileLayout>
            <div className="w-full h-fit overflow-hidden text-black">
                <div className="w-full h-full" data-aos="fade-up" data-aos-easing="linear">
                    <div className="w-full h-full flex flex-col items-center justify-center xxs:gap-y-2">
                        <div>
                            <Image data-aos="fade-right" src={ImgCountdown} alt="countdown decoration" sizes="100vw" className="w-40"/>
                        </div>
                        <div className="flex flex-col items-center justify-center xxs:gap-y-2 py-2">
                            <p className={`${babyDoll.className} text-3xl xss:text-5xl text-nowrap tracking-wider p-2`}>COUNT DOWN</p>
                        </div>
                        <div className={`${shorelinesScript.className} flex items-center justify-center xxs:gap-6 gap-3`}>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-black">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Days</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{days}</h5>
                            </div>

                            <p className="text-4xl mt-5">:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-black">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Hours</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{hours}</h5>
                            </div>

                            <p className="text-4xl mt-6">:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-black">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Minutes</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{minutes}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MobileLayout>
    );
}