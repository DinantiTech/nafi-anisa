import { DATE_RESEPSI } from '../../contants/date.const';
import { BOY_NAME_NO_TITLE, GIRL_NAME_NO_TITLE } from '../../contants/identity.const';
import FrameLayout from '../layouts/frame.layout';

export default function Welcome() {
    return (
        <FrameLayout>
            <div className="sm:px-12 px-3.5">
                {/* Dear Section */}
                <div className='sm:pt-16 pt-10 xs:pt-16 font-primary'>
                    <p className="text-center font-light text-main-color-text serif">
                        Kepada Yth.
                    </p>
                    <p className="text-center text-main-color-text serif font-bold">
                        Bapak/Ibu/Saudara/i
                    </p>
                </div>
                {/* Greetings Text */}
                <div className="pt-7 font-primary">
                    <p className="text-uppercase font-body-alternative text-main-color-text text-sm sm:text-base text-center">
                        Assalamualaikum Warahmatullahi Wabarakatuh.
                        <br />
                        Dengan memohon anugerah dan berkat Tuhan, kami bermaksud mengumumkan kepada Bapak/Ibu/Saudara/i acara pernikahan kami:
                    </p>
                </div>
                <div className="xs:py-8 py-6 text-center text-main-color-text font-primary">
                    <h1 className="text-uppercase text-xl font-name">{GIRL_NAME_NO_TITLE}</h1>

                    <p className="font-heading-alternative italic text-xl xs:text-2xl sm:my-7 xs:my-5 my-4">Dan</p>

                    <h1 className="text-uppercase text-xl font-name">{BOY_NAME_NO_TITLE}</h1>
                    <p className="sm:mt-8 mt-7 text-center font-light text-main-color-text">
                        {DATE_RESEPSI}
                    </p>
                </div>
                {/* Quotes Section */}
                <div className="font-heading text-sm sm:text-base font-primary">
                    {/* <p className="text-center mt-16 text-main-color-text text-xl">
                    {`وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ ٢١`}
                    </p> */}
                    <p className="text-center text-main-color-text text-md">
                            "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
                    </p>
                    <p className="text-center xs:mt-7 mt-5 text-main-color-text text-sm">
                        [Matius 19:6]
                    </p>
                </div>
            </div>
        </FrameLayout>
    )
}