import { BG_COUNTING_DOWN, IMG_PATTERN_SQUARE } from "../../contants/images.const"
import useTimer from "../../hooks/timer.hook"
import EventButton from "../buttons/event.button"

export default function CountingDown() {
    const timeRemaining = useTimer(new Date("2023-08-19T00:00:00Z"))

    return (
        <div className="bg-repeat w-full" style={{ backgroundImage: `url(${IMG_PATTERN_SQUARE})`}}>
            <div className="p-10">
                <div className="relative w-full border-8 shadow-lg shadow-amber-600/40">
                    <img src={BG_COUNTING_DOWN} alt="" className="aspect-[1/1.2] w-full object-center object-cover" />
                    <div className="w-full absolute bottom-10 mx-auto flex flex-col justify-center items-center gap-y-5">
                        <div className="flex items-center justify-center w-full gap-x-0.5">
                            <div className="w-16 font-semibold cursor-pointer rounded-xl text-center py-2 border-2 leading-snug bg-gradient-to-b from-amber-200 to-amber-600 text-amber-900">
                                <h5 className="text-2xl">{timeRemaining.days}</h5>
                                <p>Hari</p>
                            </div>
                            <div className="w-16 font-semibold cursor-pointer rounded-xl text-center py-2 border-2 leading-snug bg-gradient-to-b from-amber-200 to-amber-600 text-amber-900">
                                <h5 className="text-2xl">{timeRemaining.hours}</h5>
                                <p>Jam</p>
                            </div>
                            <div className="w-16 font-semibold cursor-pointer rounded-xl text-center py-2 border-2 leading-snug bg-gradient-to-b from-amber-200 to-amber-600 text-amber-900">
                                <h5 className="text-2xl">{timeRemaining.minutes}</h5>
                                <p>Menit</p>
                            </div>
                            <div className="w-16 font-semibold cursor-pointer rounded-xl text-center py-2 border-2 leading-snug bg-gradient-to-b from-amber-200 to-amber-600 text-amber-900">
                                <h5 className="text-2xl">{timeRemaining.seconds}</h5>
                                <p>Detik</p>
                            </div>
                        </div>
                        <EventButton />
                    </div>

                </div>
            </div>
        </div>
    )
}