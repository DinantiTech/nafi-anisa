import { Icon } from "@iconify/react";
import { BG_GRADIENT, COLOR_PRIMARY } from "../../contants/common.const";

export default function NavMobile() {
    return (
        <nav className={`${BG_GRADIENT} sm:hidden w-full fixed border-t border-${COLOR_PRIMARY} bottom-0 inset-x-0 flex text-xss z-40 rounded-t-2xl shadow-xl shadow-${COLOR_PRIMARY} items-center justify-center pt-0.5`}>
            <div className="w-full focus:outline-none block py-2 text-center group cursor-pointer items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <Icon icon="mdi:calendar-heart" className="text-xl" />

                    <div className="text-gray-500">
                        wkwkkw
                    </div>
                </div>
            </div>
        </nav>
    )
}