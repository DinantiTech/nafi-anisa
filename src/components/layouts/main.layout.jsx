import { BGWELCOME } from "../../contants/images.const";
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
                    <Event />
                </div>
            </div>
            <div className="w-3/5 hidden md:block mx-auto relative text-white">
                <div className="bg-primary h-full fixed bg-cover" style={{ backgroundImage: `url(${BGWELCOME})` }}>
                    <div className="animate-[animation-class]">
                        <p className="text-md text-mainColorText uppercase tracking-wider">
                            {/* {isInvitation ? 'THE WEDDING OF' : 'WEDDING ANNOUNCEMENT'} */}
                            WEDDING ANNOUNCEMENT
                        </p>
                    </div>
                    <div className="animate-[animation-class] h-screen max-h-screen">
                        <p className="italic max-w-600px text-mainColorText tracking-wider">
                            {"\"Indonesia’s diversity is formidable: some thirteen and a half thousand islands, two hundred and fifty million people, around three hundred and sixty ethnic groups, and more than seven hundred languages.\""}
                            <br />- Pankaj Mishra
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}