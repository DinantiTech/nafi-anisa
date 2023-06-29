import { COLOR_PRIMARY } from "../../contants/common.const";
import { BGWELCOME } from "../../contants/images.const";
import Footer from "../commons/footer.common";
import RSVP from "../sections/RSVP/RSVP.section";
import CountingDown from "../sections/counting_down.section";
import Couples from "../sections/couples/couple.section";
import Cover from "../sections/cover.section";
import Event from "../sections/event.section";
import LiveStreaming from "../sections/live_streaming.section";
import PaymentSection from "../sections/payment.section";
import Welcome from "../sections/welcome.section";

export default function MainLayout() {
    return (
        <div className="flex relative w-full h-full justify-between antialiased">
            <div className={`bg-${COLOR_PRIMARY} w-full md:w-2/5`} >
                <div className="w-full ">
                    <Cover />
                    <Welcome />
                    <Couples />
                    <div className="mt-16">
                        <CountingDown />
                    </div>
                    <Event />
                    <div className="mt-[6.5rem]">
                        <LiveStreaming />
                    </div>
                    <RSVP />

                    <div className="mt-24">
                        <PaymentSection />
                    </div>

                    <Footer />
                </div>
            </div>
            <div className="w-3/5 hidden md:block mx-auto text-white fixed h-screen bg-cover right-0" style={{ backgroundImage: `url(${BGWELCOME})` }}>
                <div className="bg-primary relative bg-gradient-to-b from-transparent via-lime-300/5 to-amber-900/90 h-full" >
                    <div className="absolute top-[27rem]">
                        <div className="flex items-center justify-center text-center flex-col px-20">
                            <div className="relative w-full">
                                <p className="text-md text-mainColorText uppercase tracking-wider font-primary">
                                    {/* {isInvitation ? 'THE WEDDING OF' : 'WEDDING ANNOUNCEMENT'} */}
                                    WEDDING ANNOUNCEMENT
                                </p>
                            </div>
                            <div className="">
                                <p className="italic max-w-600px text-mainColorText tracking-wider font-secondary">
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