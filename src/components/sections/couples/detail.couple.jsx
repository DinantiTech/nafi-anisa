import { Fragment } from "react";
import { IMG_GIRL, IMG_PATTERN_SQUARE } from "../../../contants/images.const";
import ButtonSocial from "../../buttons/social.button";
import { SocialType } from "../../../enums/social_type.enum";
import CustomAnimation from "../../animations/custom.animation";
import { GIRL_FATHER_NAME, GIRL_MOTHER_NAME, GIRL_NAME, GIRL_NAME_NO_TITLE } from "../../../contants/identity.const";

export default function DetailCouple({ 
    img,
    shortName,
    fullName,
    motherName,
    fatherName,
    icon,
    accountSocial,
    typeSocial = SocialType.instagram
 }) {
    return (
        <Fragment>
            <CustomAnimation>
                <div className="py-12 flex items-center justify-center">
                    <div className="aspect-[3/4]">
                        <div className="bg-contain p-7 w-[250px] sm:w-[300px] flex items-center justify-center rounded-xl" style={{ backgroundImage: `url(${IMG_PATTERN_SQUARE})` }}>
                            <img src={img ?? IMG_GIRL} alt="" className="rounded-md object-center"/>
                        </div>
                    </div>
                </div>
            </CustomAnimation>

            <CustomAnimation>
                <h4 className="text-4xl border-b-4 text-center pb-4 mx-28 sm:mx-40">
                    {shortName ?? GIRL_NAME_NO_TITLE}
                </h4>
            </CustomAnimation>

            <CustomAnimation>
                <h4 className="pt-6 text-xl text-center px-3 font-semibold">
                    {fullName ?? GIRL_NAME}
                </h4>
            </CustomAnimation>

            <CustomAnimation>
                <div className="pt-5 text-sm">
                    <h4 className="text-center px-3">Putra dari Bapak {fatherName ?? GIRL_FATHER_NAME}</h4>
                    <h4 className="text-center px-3">dan Ibu dari {motherName ?? GIRL_MOTHER_NAME}</h4>
                </div>
            </CustomAnimation>

            { icon ? (
                <CustomAnimation>
                    <div className="my-4">
                        <ButtonSocial typeSocial={typeSocial} icon={icon} username={accountSocial} />
                    </div>
                </CustomAnimation>
            ) : null }
        </Fragment>
    )
}