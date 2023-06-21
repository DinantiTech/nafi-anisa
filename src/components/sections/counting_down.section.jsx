import { BG_COUNTING_DOWN, IMG_PATTERN_SQUARE } from "../../contants/images.const"
import useTimer from "../../hooks/timer.hook"
import EventButton from "../buttons/event.button"

export default function CountingDown() {
    const timeRemaining = useTimer(new Date("2023-08-19T00:00:00Z"))

    return (
        <div className="bg-repeat w-full" style={{ backgroundImage: `url(${IMG_PATTERN_SQUARE})`}}>
            <div className="xs:p-10 p-5">
                <div className="relative w-full border-8 border-amber-100 shadow-lg shadow-amber-600/40">
                    <img src={BG_COUNTING_DOWN} alt="" className="aspect-[1/1.2] w-full object-center object-cover" />
                    <div className="w-full absolute sm:bottom-10 xs:bottom-7 bottom-3 mx-auto flex flex-col justify-center items-center gap-y-3 xs:gap-y-4 sm:gap-y-5">
                        <div className="flex items-center justify-center w-full gap-x-0.5">
                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 border-2 leading-snug bg-gradient-to-b from-amber-600 to-amber-700 text-white">
                                <h5 className="xs:text-2xl text-sm">{timeRemaining.days}</h5>
                                <p className="text-sm xs:text-base">Hari</p>
                            </div>
                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 border-2 leading-snug bg-gradient-to-b from-amber-600 to-amber-700 text-white">
                                <h5 className="xs:text-2xl text-sm">{timeRemaining.hours}</h5>
                                <p className="text-sm xs:text-base">Jam</p>
                            </div>
                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 border-2 leading-snug bg-gradient-to-b from-amber-600 to-amber-700 text-white">
                                <h5 className="xs:text-2xl text-sm">{timeRemaining.minutes}</h5>
                                <p className="text-sm xs:text-base">Menit</p>
                            </div>
                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 border-2 leading-snug bg-gradient-to-b from-amber-600 to-amber-700 text-white">
                                <h5 className="xs:text-2xl text-sm">{timeRemaining.seconds}</h5>
                                <p className="text-sm xs:text-base">Detik</p>
                            </div>
                        </div>
                        <EventButton />
                    </div>

                </div>
            </div>
        </div>
    )
}