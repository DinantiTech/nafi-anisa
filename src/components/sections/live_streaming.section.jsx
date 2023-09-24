import { Link } from "react-router-dom";
import { BROADCAST_LIVE, DISCLAIMER_LIVE, START_LIVE, TO_LIVE } from "../../contants/common.const";
import { DATE_LIVE_STREAMING } from "../../contants/date.const";
import { THE_BRIDE, YOUTUBE_EMBED, YOUTUBE_LINK } from "../../contants/identity.const";
import CustomAnimation from "../animations/custom.animation";
import CustomButton from "../buttons/custom.button";
import { YOUTUBE_ICON } from "../../contants/icon.const";
import HeadingCustom from "../commons/heading.common";
import { convert_date } from "../../helpers/convert_date.helper";

import PATTERN_BATIK from '../../assets/patterns/batik/pattern_batik2.png';

export default function LiveStreaming() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-repeat" style={{ backgroundImage: `url(${PATTERN_BATIK})`}}>
            <div className="font-primary w-full flex flex-col items-center justify-center border-8 border-amber-100 bg-black/50 sm:py-7 py-5">
                <CustomAnimation>
                    <div className="text-white">
                        <HeadingCustom>
                            {BROADCAST_LIVE}
                        </HeadingCustom>
                    </div>
                </CustomAnimation>

                <CustomAnimation>
                    <p className="sm:text-lg text-white mt-2">{START_LIVE} {convert_date(DATE_LIVE_STREAMING)}</p>
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
                    <p className="sm:px-10 px-3.5 text-center text-white text-xs sm:text-sm mt-1 font-secondary">
                        {DISCLAIMER_LIVE}
                    </p>
                </CustomAnimation>
                <CustomAnimation>
                    <Link to={YOUTUBE_LINK}>
                        <div className="py-4 font-cta">
                            <CustomButton label={TO_LIVE} name={TO_LIVE} icon={YOUTUBE_ICON}  />
                        </div>
                    </Link>
                </CustomAnimation>
            </div>
        </div>
    )
}