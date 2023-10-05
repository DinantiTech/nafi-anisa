import { Suspense, lazy } from "react";

import { useCover } from "../../providers/cover.provider";
import MusicBtn from "../buttons/music.button";
import { BG_GRADIENT, BG_COLOR_PRIMARY, IS_BG_GRADIENT, COLOR_PRIMARY, IS_NAV_MOBILE } from "../../contants/common.const";
import Cover from "../sections/cover.section";


const Welcome = lazy(() => import("../sections/welcome.section"));
const LoveStory = lazy(() => import("../sections/stories.section"));
const RightSection = lazy(() => import("../sections/right.section"));
const Couples = lazy(() => import("../sections/couples/couple.section"));
const CountingDown = lazy(() => import("../sections/counting_down.section"));
const Event = lazy(() => import("../sections/event.section"));
const NavMobile = lazy(() => import("../commons/navigation_mobile.common"));
const PaymentSection = lazy(() => import("../sections/payment.section"));
const LiveStreaming = lazy(() => import("../sections/live_streaming.section"));
const RSVP = lazy(() => import("../sections/RSVP/RSVP.section"));
const Footer = lazy(() => import("../commons/footer.common"));

export default function MainLayout() {
  const { isOpen } = useCover();
  return (
    <div className="flex relative w-full h-full justify-between antialiased scroll-smooth">
      {isOpen ? (
        <MusicBtn />
      ) : null}
      <div className={`${IS_BG_GRADIENT ? BG_GRADIENT : BG_COLOR_PRIMARY} text-${COLOR_PRIMARY} w-full lg:w-2/5 overflow-hidden z-40`} >
        <Cover />
        <div id='couple' className="w-full">

          <Suspense>
            <Welcome />
          </Suspense>

          <Suspense>
            <Couples />
          </Suspense>

          <Suspense>
            <div id='stories' className="mt-14">
              <LoveStory />
            </div>
          </Suspense>

          <Suspense>
            <div className="mt-16">
              <CountingDown />
            </div>
          </Suspense>

          <Suspense>
            <div id="event"><Event /></div>
          </Suspense>

          <Suspense>
            <div className="">
              <LiveStreaming />
            </div>
          </Suspense>

          <Suspense>
            <div id="rsvp"><RSVP /></div>
          </Suspense>

          <Suspense>
            <div className="mt-5">
              <PaymentSection />
            </div>
          </Suspense>

          {IS_NAV_MOBILE ? (
            <Suspense>
              <NavMobile />
            </Suspense>
          ) : null}

          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>
      <Suspense>
        <div className="w-3/5 hidden lg:block mx-auto text-white fixed h-screen bg-cover right-0" >
          <RightSection />
        </div>
      </Suspense>
    </div>
  )
}