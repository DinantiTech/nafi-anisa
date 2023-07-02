import { Icon } from "@iconify/react";
import { BRAND } from "../../contants/brand.const";
import { CALENDAR_ICON } from "../../contants/icon.const";
import { GOOGLE_MAPS_ADDRESS, THE_BRIDE } from "../../contants/identity.const";
import { END_EVENT, START_EVENT } from "../../contants/date.const";
import { REMIND_EVENT_COUNTING } from "../../contants/common.const";

export default function EventButton({ rounded }) {
    const handleAddEvent = () => {
        const eventTitle = encodeURIComponent(`Wedding of ${THE_BRIDE} by ${BRAND}`);
        const eventDescription = encodeURIComponent('The wedding of invitation')
        const finalURL = `text=${eventTitle}&details=${eventDescription}`;
        const location = `location=${GOOGLE_MAPS_ADDRESS}`;
    
        const startDate = encodeURIComponent(START_EVENT);
        const endDate = encodeURIComponent(END_EVENT);    
    
        window.open(
          `https://www.google.com/calendar/render?action=TEMPLATE&${finalURL}&dates=${startDate}/${endDate}&${location}`,
          '_blank',
        );
      };

    return (
        <button onClick={handleAddEvent} className={`${rounded ? 'rounded-full' : 'rounded-lg'} font-cta group mx-auto px-4 py-1 border-2 bg-amber-700 hover:bg-amber-100 duration-300 w-fit flex items-center justify-center shadow shadow-amber-900`}>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center gap-x-2">
                    <Icon className="text-white group-hover:text-rose-600 text-sm xs:text-base" icon={CALENDAR_ICON} />
                    <span className="text-white group-hover:text-amber-900 text-sm xs:text-base">{REMIND_EVENT_COUNTING}</span>
                </div>
            </div>
        </button>
    )
}