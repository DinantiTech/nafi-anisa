import Image from "next/image";

import MobileLayout from "@/components/layouts/mobile.layout";
import ImageCountdown from "@/assets/img_countdown.png";
import useTimer from "@/hooks/countdown.hook";

export default function CountdownSection() {
    const { days, hours, minutes, seconds } = useTimer(new Date("2024-06-20T09:00:00"));

    return (
        <MobileLayout>
            <div className="relative w-full h-fit overflow-hidden text-white">
                <Image src={ImageCountdown} className="w-full h-full invert" alt="image negative" sizes="100vw" />
                <div
                    className="absolute top-0 w-full h-full"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                >
                    <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-center justify-center xxs:gap-y-2">
                        <div className="flex flex-col items-center justify-center xxs:gap-y-2">
                            <p className="font-light xxs:text-xl tracking-wider">COUNT DOWN</p>
                            <h2 className="font-medium sm:text-4xl xxs:text-3xl text-2xl tracking-widest text-center">OUR SPECIAL DAYS</h2>
                        </div>
                        <div className="flex items-center justify-center xxs:gap-6 gap-3">

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <h5 className="xxs:text-2xl text-sm font-normal">{days}</h5>
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Days</p>
                            </div>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <h5 className="xxs:text-2xl text-sm font-normal">{hours}</h5>
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Hours</p>
                            </div>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <h5 className="xxs:text-2xl text-sm font-normal">{minutes}</h5>
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Minutes</p>
                            </div>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <h5 className="xxs:text-2xl text-sm font-normal">{seconds}</h5>
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Seconds</p>
                            </div>
                        </div>
                    </div>

                    <Image src={ImageCountdown} className="" alt="image negative" sizes="100vw" />
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/30" />
                </div>
            </div>
        </MobileLayout>
    );
}