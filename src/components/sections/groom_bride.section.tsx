import Image from "next/image";

import IconGroomBride from "@/assets/icon_groom_bride.svg";

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
            
        </div>
    );
}