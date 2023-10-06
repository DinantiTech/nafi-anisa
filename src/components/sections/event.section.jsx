import { DETAIL_EVENT, FINISH_EVENT, MARRIAGE_CONTRACT_EVENT, RESEPSTION } from "../../contants/common.const";
import CustomAnimation from "../animations/custom.animation";
import HeadingCustom from "../commons/heading.common";
import FrameLayout from "../layouts/frame.layout";

import { DATE_AKAD, END_AKAD, PLACE_RECEPTION, START_AKAD, WEDDING_RESEPSI_LOC_NAME, WEDDING_RESEPSI_LOC_ROAD } from "../../contants/date.const";
import { convert_date } from "../../helpers/convert_date.helper";
import TextCustom from "../commons/text.common";

export default function Event() {
  return (
    <FrameLayout>
      <div className="mx-auto w-full flex justify-center items-center flex-col px-3 font-primary gap-y-1">
        <CustomAnimation>
          <HeadingCustom>{DETAIL_EVENT}</HeadingCustom>
        </CustomAnimation>

        <CustomAnimation>
          <div className="text-center mt-4 font-bold text-sm xs:text-base">
            <p>{convert_date(DATE_AKAD)}</p>
            {/* <p>{CLOCK_EVENT} {START_AKAD} - <span className="italic">{FINISH_EVENT}</span></p> */}
          </div>
        </CustomAnimation>

        <CustomAnimation>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mt-3 capitalize text-xl text-center mx-auto">{MARRIAGE_CONTRACT_EVENT}</h2>
            <p>{START_AKAD} - {END_AKAD}</p>
          </div>
        </CustomAnimation>

        <CustomAnimation>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mt-3 capitalize text-xl text-center mx-auto">{RESEPSTION}</h2>
            <p>{START_AKAD} - <span className="italic">{FINISH_EVENT}</span></p>
          </div>
        </CustomAnimation>

        <CustomAnimation>
        <h2 className="mt-3 capitalize text-xl text-center mx-auto">{PLACE_RECEPTION}</h2>
          <div className="text-sm xs:text-base text-center mt-2">
            <TextCustom>
              {WEDDING_RESEPSI_LOC_ROAD}, {WEDDING_RESEPSI_LOC_NAME} 
            </TextCustom>
          </div>
        </CustomAnimation>
      </div>
    </FrameLayout>
  )
}