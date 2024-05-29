import Image, { StaticImageData } from "next/image";
import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";
import { Stories } from "@/constants/stories.const";

export default function StoriesSection() {
    return (
        <MobileLayout>
            <div className="flex flex-col items-center justify-center text-black mt-14 gap-y-10 md:gap-y-14 h-fit">
                <HeadingTitle title='OUR STORY' />
                {Stories?.map((data, idx) => (
                    <div key={data.chapter} className="relative flex items-center justify-center h-full gap-y-40">
                        <HeadingChapter isRight={idx % 2 === 0} title={data.chapter} />
                        <ImageStory isRight={idx % 2 === 0} ImgUrl={data.image} story={data.story} />
                    </div>
                ))}
            </div>
        </MobileLayout>
    );
}

function ImageStory({ story, ImgUrl, isRight }: { story: string, ImgUrl: StaticImageData, isRight: boolean }) {
    const orderPositionImg = !isRight ? "order-last" : "-order-1";
    const orderPosition = isRight ? "order-last" : "-order-1";
    const marginPosition = isRight ? "ml-0 mr-1 xxs:mr-2 md:mr-5" : "ml-0 ml-1 xxs:ml-2 md:ml-5";

    return (
        <div className={`${orderPosition} w-[80%] flex flex-col gap-x-5 xxs:gap-y-4 gap-y-2 items-center justify-center h-full`}>
            <div className="flex items-center justify-center">
                <div data-aos="fade-down" className={`${orderPositionImg} divider divider-horizontal divider-neutral`} />
                <Image src={ImgUrl} alt={story} sizes="100vw" />
            </div>
            <p data-aos="fade-down" className={` text-xs xxs:text-sm sm:text-base text-center px-2`}>{story}</p>
        </div>
    );
}

function HeadingChapter({ title, isRight }: { title: string, isRight: boolean }) {
    const orderPosition = isRight ? "xs:-left-24 xxs:-left-16 -left-[5rem]" : "xs:-right-24 xxs:-right-16 -right-[5rem]";
    const transtitionAnimation = isRight ? "fade-down": "fade-up"
    return (
        <div className="h-full w-[20%]">
            <div className={`${orderPosition} top-48 sm:top-56 lg:top-64 absolute flex items-center justify-start -rotate-90 font-bold text-4xl xs:text-5xl tracking-widest`}>
                <p data-aos={transtitionAnimation} className="w-full h-full">{title.toUpperCase()}</p>
            </div>
        </div>
    );
}