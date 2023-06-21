import { BGWELCOME } from "../../contants/images.const";
import CountingDown from "../sections/counting_down.section";
import Couples from "../sections/couples/couple.section";
import Event from "../sections/event.section";
import LoveStory from "../sections/stories";
import Welcome from "../sections/welcome.section";

export default function MainLayout() {
    return (
        <div className="flex relative w-full h-full justify-between">
            <div className="w-full md:w-2/5">
                <div className="w-full ">
                    <Welcome />
                    <Couples />
                    <div className="mt-16">
                        <CountingDown />
                    </div>
                    <Event />
                </div>
            </div>
            <div className="w-3/5 hidden md:block mx-auto text-white fixed h-screen bg-cover right-0" style={{ backgroundImage: `url(${BGWELCOME})` }}>
                <div className="bg-primary relative bg-gradient-to-b from-transparent via-lime-300/5 to-amber-900/90 h-full" >
                    <div className="absolute top-[27rem]">
                        <div className="flex items-center justify-center text-center flex-col px-20">
                            <div className="relative w-full">
                                <p className="text-md text-mainColorText uppercase tracking-wider">
                                    {/* {isInvitation ? 'THE WEDDING OF' : 'WEDDING ANNOUNCEMENT'} */}
                                    WEDDING ANNOUNCEMENT
                                </p>
                            </div>
                            <div className="">
                                <p className="italic max-w-600px text-mainColorText tracking-wider">
                                    {"\"Indonesia’s diversity is formidable: some thirteen and a half thousand islands, two hundred and fifty million people, around three hundred and sixty ethnic groups, and more than seven hundred languages.\""}
                                    <br />- Pankaj Mishra
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}