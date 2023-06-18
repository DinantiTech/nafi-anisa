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
            <div className="sm:px-12 px-2">
                {/* Dear Section */}
                <div className="animate">
                <div className='sm:pt-20 pt-16'>
                    <p className="text-center font-light text-main-color-text serif">
                        Kepada Yth.
                    </p>
                    <p className="text-center text-main-color-text serif font-bold">
                        Bapak/Ibu/Saudara/i
                    </p>
                </div>
                </div>
                {/* Greetings Text */}
                <div className="sm:pt-16 pt-10">
                <div className="animate">
                    <p className="text-uppercase font-body-alternative text-main-color-text text-sm sm:text-base text-center">
                        Assalamualaikum Warahmatullahi Wabarakatuh.
                        <br />
                        Dengan memohon anugerah dan berkat Tuhan, kami bermaksud mengumumkan kepada Bapak/Ibu/Saudara/i acara pernikahan kami:
                    </p>
                </div>
                </div>
                <div className="animate">
                <div className="py-10 text-center text-main-color-text">
                    <h1 className="text-uppercase text-xl">{GIRL_NAME_NO_TITLE}</h1>

                    <p className="font-heading-alternative italic text-2xl sm:my-10 my-7">Dan</p>

                    <h1 className="text-uppercase text-xl">{BOY_NAME_NO_TITLE}</h1>
                    <p className="sm:mt-16 mt-7 text-center font-light text-main-color-text">
                        {DATE_RESEPSI}
                    </p>
                </div>
                </div>
                {/* Quotes Section */}
                <div className="font-heading text-sm sm:text-base">
                    {/* <p className="text-center mt-16 text-main-color-text text-xl">
                    {`وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ ٢١`}
                    </p> */}
                    <p className="text-center text-main-color-text text-md">
                         "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
                    </p>
                    <p className="text-center mt-10 text-main-color-text text-md">
                        [Matius 19:6]
                    </p>
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