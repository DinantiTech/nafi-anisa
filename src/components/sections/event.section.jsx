import { CLOCK_EVENT, DETAIL_EVENT, FINISH_EVENT, INVITE_EVENT, MARRIAGE_CONTRACT_EVENT } from "../../contants/common.const";
import CustomAnimation from "../animations/custom.animation";
import HeadingCustom from "../commons/heading.common";
import FrameLayout from "../layouts/frame.layout";
 
import { DATE_AKAD, START_AKAD } from "../../contants/date.const";
import { convert_date } from "../../helpers/convert_date.helper";
import TextCustom from "../commons/text.common";

export default function Event() {
    return (
        <FrameLayout>
            <div className="mx-auto w-full flex justify-center items-center flex-col px-3 font-primary">
                <CustomAnimation>
                    <div className="pt-14 pb-4 border-b-4">
                        <HeadingCustom>{DETAIL_EVENT}</HeadingCustom>
                    </div>
                </CustomAnimation>

                <h2 className="py-5 capitalize text-xl">{MARRIAGE_CONTRACT_EVENT}</h2>

                <div className="text-sm xs:text-base">
                    <TextCustom>
                        {INVITE_EVENT}
                    </TextCustom>
                </div>

                <div className="text-center mt-8 font-bold text-sm xs:text-base">
                    <p>{convert_date(DATE_AKAD)}</p>
                    <p>{CLOCK_EVENT} {START_AKAD} - <span className="italic">{FINISH_EVENT}</span></p>
                </div>
            </div>
        </FrameLayout>
    )
}