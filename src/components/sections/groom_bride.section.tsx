import Image from "next/image";
import localFont from "next/font/local";

import IconGroomBride from "@/assets/icon_groom_bride.svg";
import GroomImg from "@/assets/couple/groom.png";
import BrideImg from "@/assets/couple/bride.png";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

export default function GroomBrideSection() {
    return (
        <div data-aos="fade-down" data-aos-offset="300" className="flex flex-col justify-center py-10 px-7 text-black">
            <div className="flex flex-col gap-y-2 items-center">
                <Image src={IconGroomBride} className="w-28" sizes="100vw" alt="icon groom and bride" />
                <h3 className={` ${babyDoll.className} text-[#E8B787] tracking-widest font-semibold xxs:text-2xl text-lg`}>GROOM & BRIDE</h3>
                <svg className="w-fit -mt-3" width="220" viewBox="0 0 1664 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 106.402C5 81.8974 61.0263 77.2147 96.8889 70.1725C339.728 22.4877 728.039 -40.7568 956.403 54.4209C1116.92 121.319 712.093 157.733 774.039 100.889C795.098 81.5648 890.239 77.5779 924.596 74.8982C1166.39 56.0386 1415.83 59.2924 1659 56.7835" stroke="#E8B787" stroke-width="10" stroke-linecap="round" />
                </svg>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-y-10">
                {/* Groom */}

                <div className="flex items-end -ml-6 overflow-hidden">
                    <Image data-aos="fade-right" data-aos-duration="500" src={GroomImg} alt="groom" className="h-56 w-auto" />
                    <div className={`pl-14 p-10 -ml-12 bg-no-repeat bg-cover bg-center bg-fixed`} id="couple_texture">
                        <p className={`${babyDoll.className} text-left text-nowrap text-sm w-2/3 lg:w-1/3`}>
                            Abdul Hanif Alfata S. Pt. <br />
                            (Hanif) <br />
                            Putra dari <br />
                            Bapak Mustakim M.Pd. & <br />
                            Ibu Siti Nur Fajriyah A.Md. <br />
                            @anif_alfata
                        </p>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-end overflow-hidden">
                    <Image data-aos="fade-left" data-aos-duration="500" src={BrideImg} alt="Bride" className="h-56 w-auto -ml-12"/>
                    <div className={`pr-14 pl-5 p-10 bg-no-repeat bg-cover bg-center bg-fixed ml-24`} id="couple_texture">
                        <p className={`${babyDoll.className} text-right text-nowrap text-sm w-2/3 lg:w-1/3`}>
                            Shofi Putri Amelia S. Psi <br />
                            (Amelia) <br />
                            Putri dari <br />
                            Bapak M. Sunarto A. Md. & <br />
                            Ibu Laely Rosyada <br />
                            @ameliaaa.sp. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}