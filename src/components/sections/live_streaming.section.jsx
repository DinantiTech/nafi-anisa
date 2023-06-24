import { Link } from "react-router-dom";
import { YOUTUBE_EMBED, YOUTUBE_LINK } from "../../contants/common.const";
import { DATE_LIVE_STREAMING } from "../../contants/date.const";
import { THE_BRIDE } from "../../contants/identity.const";
import { IMG_PATTERN_SQUARE } from "../../contants/images.const";
import CustomAnimation from "../animations/custom.animation";
import CustomButton from "../buttons/custom.button";
import { YOUTUBE_ICON } from "../../contants/icon.const";

export default function LiveStreaming() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-repeat" style={{ backgroundImage: `url(${IMG_PATTERN_SQUARE})`}}>
            <div className=" w-full flex flex-col items-center justify-center border-8 border-amber-100 bg-black/50 sm:py-7 py-5">
                <CustomAnimation>
                    <h2 className="font-semibold text-white uppercase sm:text-2xl text-xl">Siaran Langsung</h2>
                </CustomAnimation>

                <CustomAnimation>
                    <p className="sm:text-lg text-white mt-2">Live pada {DATE_LIVE_STREAMING}</p>
                </CustomAnimation>

                {/* Video Streaming */}
                <CustomAnimation>
                    <iframe 
                        src={YOUTUBE_EMBED}
                        frameborder="0"
                        allowFullScreen
                        title={`Live wedding of ${THE_BRIDE}`}
                        className="aspect-video w-full p-4 rounded-lg"
                    />
                </CustomAnimation>
                <CustomAnimation>
                    <p className="sm:px-10 px-3.5 text-center text-white text-xs sm:text-sm mt-1">
                        Jika Anda menghadapi kesulitan saat memutar video live streaming di atas, mohon tekan tombol di bawah ini
                    </p>
                </CustomAnimation>
                <CustomAnimation>
                    <Link to={YOUTUBE_LINK}>
                        <div className="py-4">
                            <CustomButton label="Menuju Youtube" name="Menuju Youtube" icon={YOUTUBE_ICON}  />
                        </div>
                    </Link>
                </CustomAnimation>
            </div>
        </div>
    )
}