import { Icon } from "@iconify/react";
import { BRAND } from "../../contants/brand.const";
import { CALENDAR_ICON } from "../../contants/icon.const";
import { GOOGLE_MAPS_ADDRESS, THE_BRIDE } from "../../contants/identity.const";

export default function EventButton({ rounded }) {
    const handleAddEvent = () => {
        const eventTitle = encodeURIComponent(`Wedding of ${THE_BRIDE} by ${BRAND}`);
        const eventDescription = encodeURIComponent('The wedding of invitation')
        const finalURL = `text=${eventTitle}&details=${eventDescription}`;
        const location = `location=${GOOGLE_MAPS_ADDRESS}`;
    
        const startDate = encodeURIComponent('2024-06-20T10:00:00Z');
        const endDate = encodeURIComponent('2024-07-20T12:00:00Z');    
    
        window.open(
          `https://www.google.com/calendar/render?action=TEMPLATE&${finalURL}&dates=${startDate}/${endDate}&${location}`,
          '_blank',
        );
      };

    return (
        <button onClick={handleAddEvent} className={`${rounded ? 'rounded-full' : 'rounded-lg'} group mx-auto px-4 py-1 border-2 bg-amber-700 hover:bg-amber-100 duration-300 w-fit flex items-center justify-center shadow shadow-amber-900`}>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center gap-x-2">
                    <Icon className="text-white group-hover:text-rose-600 text-sm xs:text-base" icon={CALENDAR_ICON} />
                    <span className="text-white group-hover:text-amber-900 text-sm xs:text-base">Ingatkan acara</span>
                </div>
            </div>
        </button>
    )
}