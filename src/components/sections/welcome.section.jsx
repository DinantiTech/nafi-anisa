import { useMemo } from 'react';
import { CONJUNCTION_WELCOME, GREETING_WELCOME, INVITE_TO_WELCOME, OPENING_WELCOME, QUOTE_WELCOME, REGARD_WELCOME, VERSE_WELCOME } from '../../contants/common.const';
import { DATE_RESEPSI } from '../../contants/date.const';
import { BOY_NAME_NO_TITLE, GIRL_NAME_NO_TITLE } from '../../contants/identity.const';
import TextCustom from '../commons/text.common';
import FrameLayout from '../layouts/frame.layout';

export default function Welcome() {
    return (
        <FrameLayout>
            <div className="sm:px-12 px-3.5">
                {/* Dear Section */}
                <div className='font-title font-bold'>
                    <TextCustom>{REGARD_WELCOME}</TextCustom>
                    <div className='font-primary font-medium'>
                        <TextCustom>{INVITE_TO_WELCOME}</TextCustom>
                    </div>
                </div>
                {/* Greetings Text */}
                <div className="pt-2 font-primary">
                    <TextCustom>
                        {GREETING_WELCOME}
                    </TextCustom>
                    <TextCustom>
                        {OPENING_WELCOME}
                    </TextCustom>
                </div>
                <div className="xs:py-16 py-6 text-center text-main-color-text font-primary">
                    <h1 className="text-uppercase text-4xl font-name">{GIRL_NAME_NO_TITLE}</h1>

                    <p className="font-heading-alternative italic text-xl xs:text-4xl sm:my-1 xs:my-5 my-4">{CONJUNCTION_WELCOME}</p>

                    <h1 className="text-uppercase text-4xl font-name">{BOY_NAME_NO_TITLE}</h1>
                    <p className="sm:mt-8 mt-7 text-center font-light text-main-color-text">
                        {DATE_RESEPSI}
                    </p>
                </div>
                {/* Quotes Section */}
                <div className="font-heading text-sm sm:text-base font-primary">
                    <TextCustom>
                        {QUOTE_WELCOME}
                    </TextCustom>
                    <p className="text-center xs:mt-7 mt-5 text-main-color-text text-sm">
                        [{VERSE_WELCOME}]
                    </p>
                </div>
            </div>
        </FrameLayout>
    )
}