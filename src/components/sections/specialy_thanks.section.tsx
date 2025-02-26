import Image from 'next/image';
import localFont from 'next/font/local';

import HeadingTitle from "../micro/heading_title.micro";

import IconDinanti from "@/assets/logo/logo_dinanti.svg";
import Doraemaon from "@/assets/doraemon.svg";
import { Icon } from '@iconify/react';
import { NEWLYWEDS_TITLE } from '@/components/libs/constants/others.const';
import Link from 'next/link';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });

export default function SpecialyThanksSection() {
    return (
        <div className={`${babyDoll.className} text-center px-4 mb-14`}>
            {/* <DotLottieReact
                src="https://lottie.host/b8ed8e7b-9790-4808-9c63-3fa4d8e26974/LiUTKcbyzh.lottie"
                loop
                autoplay
                className='-mb-16 -mt-10'
            /> */}

            <HeadingTitle title="Terima Kasih" className={`${babyDoll.className} flex flex-col items-center justify-center font-light text-4xl xxs:text-5xl sm:text-6xl xxs:mt-1`} />

            <div className='flex flex-col items-center justify-center gap-y-3 xxs:gap-y-2 text-xs xxs:text-sm sm:text-base mt-3'>
                <p>Merupakan sebuah kehormatan, dan kebahagiaan bagi kami
                    apabila Bapak, Ibu, Saudara/i berkenan hadir dan memberikan
                    do’a restunya untuk keberlangsungan pernikahan kami.</p>

                <br />
                <p className='text-balance'>Atas kehadiran dan do’a restunya, kami ucapkan terima kasih.</p>
            </div>

            <p className={`${shorelinesScript.className} my-5 text-xl xxs:text-2xl`}>{NEWLYWEDS_TITLE}</p>

            <footer className='flex flex-col items-center justify-center text-[0.6rem] xxs:text-xs sm:text-sm'>
                {/* <p>Turut berbahagia segenap keluarga besar</p>
                <p className={`${shorelinesScript.className} text-lg xxs:text-xl`}>Nafi &Alif</p> */}
                <div className='flex items-center flex-col justify-center gap-x-2'>
                    <p className='flex items-center gap-x-1'>Made with <span><Icon icon="icon-park-outline:oval-love-two" /></span> by</p>
                    <Link href="https://dinanti.id" target='_blank'>
                        <Image src={IconDinanti} alt='logo dinanti' sizes='100vw' className='w-14' />
                    </Link>
                    <p className='mt-2 text-xs'>Design by Asa & Animation assets from Lottie</p>
                </div>

                <Image src={Doraemaon} data-aos="fade-up" alt='doraemon illustration' sizes='100vw' className='w-full pt-16' />
            </footer>
        </div>
    );
}