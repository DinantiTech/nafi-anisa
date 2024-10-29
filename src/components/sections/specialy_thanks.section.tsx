import Image from 'next/image';
import localFont from 'next/font/local';

import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";

import IconDinanti from "@/assets/logo/logo_dinanti.svg";
import { Icon } from '@iconify/react';

const newYorkFont = localFont({ src: "../../assets/fonts/NewYork.otf" });
const creattionDemoFont = localFont({ src: "../../assets/fonts/CreattionDemo.otf" });

export default function SpecialyThanksSection() {
    return (
        <MobileLayout className='text-center px-4 mb-10'>
            <HeadingTitle title="Terima Kasih" className={`${creattionDemoFont.className} flex flex-col items-center justify-center font-light text-4xl xxs:text-5xl sm:text-6xl xxs:mt-1`} />
            
            <div className='flex flex-col items-center justify-center gap-y-3 xxs:gap-y-2 text-xs xxs:text-sm sm:text-base'>
                <p>Merupakan sebuah kehormatan, dan kebahagiaan bagi kami apabila Bapak, Ibu, Saudara/i berkenan hadir dan memberikan do’a dan restunya untuk keberlangsungan pernikahan kami.</p>
                <p>Atas kehadiran dan do’a restunya, kami ucapkan terima kasih.</p>
            </div>

            <p className={`${newYorkFont.className} my-5 text-xl xxs:text-2xl`}>Nafi & Alif</p>

            <footer className='flex flex-col items-center justify-center text-[0.6rem] xxs:text-xs sm:text-sm'>
                <p>Turut berbahagia segenap keluarga besar</p>
                <p className={`${creattionDemoFont.className} text-lg xxs:text-xl`}>Nafi &Alif</p>
                <div className='flex items-center justify-center gap-x-2'>
                    <p className='flex items-center gap-x-1'>Made with <span><Icon icon="icon-park-outline:oval-love-two" /></span> by</p>
                    <Image src={IconDinanti} alt='logo dinanti' sizes='100vw' className='w-14' />
                </div>
            </footer>
        </MobileLayout>
    );
}