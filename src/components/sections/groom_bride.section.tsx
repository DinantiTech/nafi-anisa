import Image from "next/image";
import { Icon } from "@iconify/react";

import IconGroomBride from "@/assets/icon_groom_bride.svg";
import GroomImg from "@/assets/couple/groom.png";
import BrideImg from "@/assets/couple/bride.png";

export default function GroomBrideSection() {
    return (
        <div data-aos="fade-down" data-aos-offset="300" className="flex flex-col justify-center py-10 px-7 text-black">
            <div className="flex flex-col gap-y-2 items-center">
                <Image src={IconGroomBride} className="w-28" sizes="100vw" alt="icon groom and bride" />
                <h3 className="border-b-2 border-black pb-1 font-semibold xxs:text-2xl text-lg">GROOM & BRIDE</h3>
            </div>

            <div className="flex flex-col xxs:mt-5 mt-4 xxs:gap-y-5 gap-y-3">
                <h5 className="text-right">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</h5>
                <p className="text-xs xxs:text-sm xs:text-base">“Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." </p>
                <p className="font-semibold text-left xxs:text-sm text-xs">(QS Ar Rum : 21)</p>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-y-10">
                {/* Groom */}
                <div className="flex justify-start items-start gap-x-2">
                    <div className="flex flex-col justify-start items-start w-[57%] gap-y-2 overflow-hidden">
                        <Image data-aos="fade-right" src={GroomImg} alt="groom" sizes="100vw" className="" />
                        <p data-aos="fade-right" className="xxs:text-lg text-sm">Annisa Fikri Annafi</p>
                    </div>
                    <div className="w-[43%] overflow-hidden">
                        <h2 data-aos="fade-right" className="sm:text-5xl xs:text-4xl xxs:text-3xl text-[1.5rem] leading-8 font-bold">BRIDE <br />/ NAFI</h2>
                        <p data-aos="fade-right" className="xxs:text-base text-xs">Putri Pertama dari Bapak Kristoni, & Ibu Fitriyani</p>
                        <div data-aos="fade-right" className="bg-[#945C5C] text-white xxs:text-sm text-[0.6rem] flex flex-col items-start justify-center w-full mt-3 px-2">
                            <div className="flex items-center justify-start gap-x-1">
                                <Icon icon="ri:instagram-fill" />
                                <p>@annisa_annafi</p>
                            </div>
                            <div className="flex items-center justify-start gap-x-1">
                                <Icon icon="ph:phone-fill" />
                                <p>08812861574</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bride */}
                <div className="flex justify-start items-start gap-x-2">
                    <div className="w-[43%] overflow-hidden">
                        <h2 data-aos="fade-left" className="sm:text-5xl xs:text-4xl xxs:text-3xl text-[1.5rem] leading-8 font-bold">GROOM <br />/ TIO</h2>
                        <p data-aos="fade-left" className="xxs:text-base text-xs">Putra Pertama dari Bapak Maskuri, & Ibu Waryati</p>
                        <div data-aos="fade-left" className="bg-[#945C5C] text-white xxs:text-sm text-[0.6rem] flex flex-col items-start justify-center w-full mt-3 px-2">
                            <div className="flex items-center justify-start gap-x-1">
                                <Icon icon="ri:instagram-fill" />
                                <p>@ridzkialiff</p>
                            </div>
                            <div className="flex items-center justify-start gap-x-1">
                                <Icon icon="ph:phone-fill" />
                                <p>081215210445</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-end w-[57%] gap-y-2 overflow-hidden">
                        <Image data-aos="fade-left" src={BrideImg} alt="bride" sizes="100vw" className="" />
                        <p data-aos="fade-left" className="xxs:text-lg text-sm">Ridzki Alif Kurniawan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}