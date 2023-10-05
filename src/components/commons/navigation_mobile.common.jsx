import { Icon } from "@iconify/react";
import { BG_GRADIENT, COLOR_PRIMARY } from "../../contants/common.const";

export default function NavMobile() {
  const dataNavs = [
    { title: "Couple", icon: "emojione-monotone:couple-with-heart", id: "couple" },
    { title: "Stories", icon: "mingcute:love-fill", id: "stories" },
    { title: "Event", icon: "mdi:calendar-heart", id: "event" },
    { title: "RSVP", icon: "bi:chat-heart-fill", id: "rsvp" }
  ]

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


    return (
        <nav className={`${BG_GRADIENT} sm:hidden w-full shadow-xl shadow-${COLOR_PRIMARY} fixed border-t-2 border-${COLOR_PRIMARY}/50 bottom-0 inset-x-0 flex text-xss z-40 rounded-t-2xl shadow-xl shadow-${COLOR_PRIMARY} items-center justify-center`}>
            <div className="w-full focus:outline-none flex py-2 text-center group items-center justify-evenly">
              { dataNavs?.map((data, idx) => (
                <button onClick={() => scrollToElement(data?.id)} key={idx} className="flex items-center justify-center flex-col">
                    <Icon icon={data?.icon} className="text-xl" />

                    <p className={`text-${COLOR_PRIMARY} text-sm`}>
                      {data?.title}
                    </p>
                </button>
              )) }

            </div>
        </nav>
    )
}