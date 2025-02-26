// import Image from "next/image";
import localFont from "next/font/local";

// import MobileLayout from "@/components/layouts/mobile.layout";
// import ImgCountdown from "@/assets/img_countdown.png"
import useTimer from "@/components/libs/hooks/countdown.hook";
import { AKAD_DATE } from "@/components/libs/constants/event.const";

const doraefont = localFont({ src: "../../assets/fonts/Doraefont.ttf" });
const britannic = localFont({ src: "../../assets/fonts/BRITANIC.ttf" });

export default function CountdownSection() {
    const { days, hours, minutes } = useTimer(new Date(`${AKAD_DATE}T08:00:00`));

    return (
        <>
            <div className="w-full h-fit overflow-hidden text-black mt-5">
                <div className="w-full h-full" data-aos="fade-up" data-aos-easing="linear">
                    <div className="w-full h-full flex flex-col items-center justify-center xxs:gap-y-2">
                        {/* <div>
                            <Image data-aos="fade-right" src={ImgCountdown} alt="countdown decoration" sizes="100vw" className="w-40" />
                        </div> */}
                        <div className="flex flex-col items-center justify-center xxs:gap-y-2 py-2">
                            <p className={`${doraefont.className} text-[#0168B7] text-3xl xss:text-5xl text-nowrap tracking-wider p-2`} style={{ textShadow: "-2px -2px 0 #4FBBE7, 2px -2px 0 #4FBBE7, -2px 2px 0 #4FBBE7, 2px 2px 0 #4FBBE7" }}>COUNT DOWN</p>
                        </div>
                        {/* <div className={`${britannic.className} flex items-center justify-center xxs:gap-6 gap-3`}> */}
                        <div className={`${britannic.className} flex items-center justify-center gap-3`}>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center leading-snug text-black">
                                {/* <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Days</p> */}
                                <h5 className="xxs:text-2xl text-sm font-normal" style={{
                                    background: "linear-gradient(to bottom, #FFFFFF, #3DA8DC, #0057B7)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>{days}</h5>
                            </div>

                            <p className="xxs:text-2xl text-sm " style={{
                                background: "linear-gradient(to bottom, #FFFFFF, #3DA8DC, #0057B7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center leading-snug text-black">
                                {/* <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Hours</p> */}
                                <h5 className="xxs:text-2xl text-sm font-normal" style={{
                                    background: "linear-gradient(to bottom, #FFFFFF, #3DA8DC, #0057B7)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>{hours}</h5>
                            </div>

                            <p className="xxs:text-2xl text-sm" style={{
                                background: "linear-gradient(to bottom, #FFFFFF, #3DA8DC, #0057B7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center leading-snug text-black">
                                {/* <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Minutes</p> */}
                                <h5 className="xxs:text-2xl text-sm font-normal" style={{
                                    background: "linear-gradient(to bottom,#FFFFFF, #3DA8DC, #0057B7)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>{minutes}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}