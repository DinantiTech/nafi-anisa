import { FATHER_DAUGHTER_COUPLE, FATHER_SON_COUPLE, MOTHER_DAUGHTER_COUPLE, MOTHER_SON_COUPLE, THE_BRIDE_COUPLE } from "../../../contants/common.const";
import { INSTAGRAM_ICON, TWITTER_ICON } from "../../../contants/icon.const";
import { BOY_FATHER_NAME, BOY_MOTHER_NAME, BOY_NAME, BOY_NAME_SHORT, GIRL_FATHER_NAME, GIRL_MOTHER_NAME, GIRL_NAME, GIRL_NAME_SHORT } from "../../../contants/identity.const";
import { IMG_GIRL, IMG_MAN } from "../../../contants/media.const";
import { SocialType } from "../../../enums/social_type.enum";
import CustomAnimation from "../../animations/custom.animation"
import HeadingCustom from "../../commons/heading.common";
import DetailCouple from "./detail.couple";

export default function Couples() {
    return (
        <div className="mt-14">
            <CustomAnimation>
                <HeadingCustom>{THE_BRIDE_COUPLE}</HeadingCustom>
            </CustomAnimation>

            <DetailCouple
                fullName={BOY_NAME}
                shortName={BOY_NAME_SHORT}
                fatherOf={FATHER_SON_COUPLE}
                motherOf={MOTHER_SON_COUPLE}
                fatherName={BOY_FATHER_NAME}
                motherName={BOY_MOTHER_NAME}
                img={IMG_MAN}
                icon={INSTAGRAM_ICON}
                typeSocial={SocialType.instagram}
                accountSocial="Wkwkwkw"
            />

            {/* GIRL */}
            <DetailCouple
                fullName={GIRL_NAME}
                shortName={GIRL_NAME_SHORT}
                fatherOf={FATHER_DAUGHTER_COUPLE}
                motherOf={MOTHER_DAUGHTER_COUPLE}
                fatherName={GIRL_FATHER_NAME}
                motherName={GIRL_MOTHER_NAME}
                img={IMG_GIRL}
                icon={TWITTER_ICON}
                typeSocial={SocialType.twitter}
                accountSocial="awokwok"
            />

        </div>
    )
}