import { INSTAGRAM_ICON, TWITTER_ICON } from "../../../contants/icon.const";
import { BOY_FATHER_NAME, BOY_MOTHER_NAME, BOY_NAME, BOY_NAME_SHORT, GIRL_FATHER_NAME, GIRL_MOTHER_NAME, GIRL_NAME, GIRL_NAME_SHORT } from "../../../contants/identity.const";
import { IMG_GIRL, IMG_MAN } from "../../../contants/images.const";
import { SocialType } from "../../../enums/social_type.enum";
import CustomAnimation from "../../animations/custom.animation"
import DetailCouple from "./detail.couple";

export default function Couples() {
    return (
        <div className="pt-32">
            <CustomAnimation>
                <h1 className="uppercase sm:text-2xl text-xl text-center font-semibold font-primary">
                    Sang Mempelai
                </h1>
            </CustomAnimation>

            <DetailCouple
                fullName={BOY_NAME}
                shortName={BOY_NAME_SHORT}
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