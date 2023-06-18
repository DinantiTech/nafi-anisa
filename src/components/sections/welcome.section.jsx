import PatternBatik from '../../assets/patterns/batik-side.svg';
import { DATE_RESEPSI } from '../../contants/date.const';
import { BOY_NAME_NO_TITLE, GIRL_NAME_NO_TITLE } from '../../contants/identity.const';

export default function Welcome() {
    return (
        <div className="bg-primary relative">
            <div className="absolute w-full">
                <img src={PatternBatik} className="h-[100px] absolute left-0" />
                <img src={PatternBatik} className="h-[100px] absolute right-0 transform rotate-90"/>
            </div>
            <div className="px-12">
                {/* Dear Section */}
                <div className="animate">
                <div>
                    <p className="text-center font-light text-main-color-text serif">
                        Kepada Yth.
                    </p>
                    <p className="text-center text-main-color-text serif font-bold">
                        Bapak/Ibu/Saudara/i
                    </p>
                </div>
                </div>
                {/* Greetings Text */}
                <div className="pt-20">
                <div className="animate">
                    <p className="text-uppercase font-body-alternative text-main-color-text text-sm text-center">
                        Assalamualaikum Warahmatullahi Wabarakatuh.
                        <br />
                        Dengan memohon anugerah dan berkat Tuhan, kami bermaksud mengumumkan kepada Bapak/Ibu/Saudara/i acara pernikahan kami:
                    </p>
                </div>
                </div>
                <div className="animate">
                <div className="pb-10 text-center text-main-color-text">
                    <h1 className="m-16 text-uppercase text-xl">{GIRL_NAME_NO_TITLE}</h1>
                    <p className="font-heading-alternative text-2xl">Dan</p>
                    <h1 className="m-16 text-uppercase text-xl">{BOY_NAME_NO_TITLE}</h1>
                    <p className="mt-16 text-center font-light text-main-color-text">
                        27-08-2025
                    </p>
                </div>
                </div>
                {/* Quotes Section */}
                <div className="font-heading">
                    {/* <p className="text-center mt-16 text-main-color-text text-xl">
                    {`وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ ٢١`}
                    </p> */}
                {/* {!MUSLIM_INVITATION && (
                    <p className="text-center font-light text-main-color-text text-lg">
                    {txt.ayat[lang]}
                    </p>
                )}
                {!MUSLIM_INVITATION && (
                    <p className="text-center mt-16 text-main-color-text text-md">
                    {txt.nameayat[lang]}
                    </p>
                )}
                {MUSLIM_INVITATION && (
                    <p className="text-center font-light text-main-color-text text-lg">
                    {txt.ayatquran[lang]}
                    </p>
                )}
                {MUSLIM_INVITATION && (
                    <p className="text-center mt-16 text-main-color-text text-md">
                    {txt.nameayatquran[lang]}
                    </p>
                )} */}

                    {/* <p className="text-center mt-16 text-main-color-text text-md">
                    {txt.nameayatquran[lang]}
                    </p> */}
                </div>
            </div>
            <div className="absolute w-full">
                <img
                src={PatternBatik}
                className="absolute h-[100px] left-0 -mt-100 transform rotate-[270deg]"
                />
                <img
                src={PatternBatik}
                height="100px"
                className="absolute h-[100px] right-0 -mt-100 transform rotate-180"
                />
            </div>
    </div>
    )
}