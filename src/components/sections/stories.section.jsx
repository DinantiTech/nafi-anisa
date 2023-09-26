import { HEADING_STORY, NOTE_STORY } from "../../contants/common.const";
import HeadingCustom from "../commons/heading.common";
import TextCustom from "../commons/text.common";

import GununganWayang from '../../assets/patterns/gunungan_wayang.png'
import { IMG_LOVE_STORY } from "../../contants/images.const";
import CustomButton from "../buttons/custom.button";
import CustomAnimation from "../animations/custom.animation";
import { BOOK_LOVE_ICON } from "../../contants/icon.const";
import ModalStory from "../commons/modal_stories";
import Stories from "../../pages/story.page";
import { useState } from "react";

export default function LoveStory() {

    const [isOpenStory, setIsOpenStory] = useState(false);

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <ModalStory isOpen={isOpenStory}>
                <Stories handleClose={() => setIsOpenStory(false)} />
            </ModalStory>

            <HeadingCustom>{HEADING_STORY}</HeadingCustom>
            <TextCustom>- {NOTE_STORY} -</TextCustom>

            <div className="mt-7 relative flex justify-center w-full">
                <div className="z-10 rounded-2xl relative flex justify-center items-center overflow-hidden shadow">
                    {/* Gunungan di sebelah kiri */}
                    <img
                        src={GununganWayang}
                        alt="gunungan left"
                        className="sm:w-48 xs:w-52 w-40 -rotate-12 absolute -bottom-8 z-40 left-0 gunungan-left"
                    />

                    {/* Container gambar cover story */}
                    <div className="xxs:h-80 xxs:w-64 w-52 h-64 relative flex items-center justify-center">
                        {/* Gambar cover story */}
                        <img
                            src={IMG_LOVE_STORY}
                            alt="cover story"
                            loading="lazy"
                            className="w-full h-full object-cover object-center aspect-auto"
                        />

                        {/* Tombol */}
                        <CustomAnimation>
                            <div className="absolute bottom-5 z-40">
                                <CustomButton onClick={() => setIsOpenStory(true)} name="Buka" icon={BOOK_LOVE_ICON} />
                            </div>
                        </CustomAnimation>
                    </div>

                    {/* Gunungan di sebelah kanan */}
                    <img
                        src={GununganWayang}
                        alt="gunungan right"
                        className="sm:w-48 xs:w-52 w-40 rotate-12 absolute -right-5 -bottom-8 gunungan-right"
                    />
                </div>
            </div>
        </div>
    )
}