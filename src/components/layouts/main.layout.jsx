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
import RightSection from "../sections/right.section";
import LoveStory from "../sections/stories.section";
import Welcome from "../sections/welcome.section";

export default function MainLayout() {
    return (
        <div className="flex relative w-full h-full justify-between antialiased">
            <div className={`bg-${COLOR_PRIMARY} w-full lg:w-2/5 overflow-hidden`} >
                <div className="w-full ">
                    <Cover />
                    <Welcome />
                    <Couples />
                    <div className="mt-14">
                        <LoveStory />
                    </div>
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
            <div className="w-3/5 hidden lg:block mx-auto text-white fixed h-screen bg-cover right-0" style={{ backgroundImage: `url(${BGWELCOME})` }}>
                <RightSection />
            </div>
        </div>
    )
}