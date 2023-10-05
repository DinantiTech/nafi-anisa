import { Icon } from "@iconify/react";
import { useState } from "react";
import { CROSS_ICON } from "../../../contants/icon.const";
import { GREETINGS_RSVP, SEE_MORE_RSVP } from "../../../contants/common.const";
import CustomAnimation from "../../animations/custom.animation";

export default function ListRSVP({ data }) {
  const [showFullList, setShowFullList] = useState(false);
  const limitedRSVPData = data?.slice(0, 5);

  const handleShowFullList = () => {
    setShowFullList(!showFullList);
  };

  return (
    <div className="w-full px-4 mt-5 flex flex-col items-start justify-center gap-y-3 divide-y">
      <PopupListRsvp isOpen={showFullList} handleClose={handleShowFullList} data={data} />

      <CustomAnimation>
        {
          limitedRSVPData?.map((data, index) => (
            <div key={index} className="w-full flex flex-col items-start justify-center gap-y-3 pt-2">
              <div className="flex items-start justify-center flex-col">
                <h5 className="text-amber-900 font-semibold sm:text-lg">
                  {data.name} <span className="text-xs text-rose-400">{data?.attendance ? "(Akan hadir)" : null}</span>
                </h5>
                {/* <span className="text-sm text-amber-700">{moment(new Date(data?.createdAt) ?? new Date()).fromNow()}</span> */}
              </div>
              <p className="text-sm">{data.message}</p>
            </div>
          ))
        }
      </CustomAnimation>

      {data?.length > 5 && (
        <button
          onClick={handleShowFullList}
          className="text-sm text-amber-900 underline pt-3"
        >
          {SEE_MORE_RSVP}
        </button>
      )}
    </div>
  );
}

function PopupListRsvp({ isOpen, handleClose, data }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[60] transform transition-all duration-300 ease-in-out ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="sm:w-96 w-full mx-4 bg-amber-200 h-fit rounded-lg shadow-lg relative">
        <button onClick={handleClose} className="absolute right-1 top-1 p-2 border rounded-full bg-white">
          <Icon icon={CROSS_ICON} />
        </button>
        <div className="p-4 divide-y-2">
          <div className="w-44 py-2 font-semibold">{GREETINGS_RSVP}</div>
          <div className="h-96 overflow-y-auto overflow-x-hidden">
          {
            data?.map((data, index) => (
              <div key={index} className="w-full flex flex-col items-start justify-center pt-2">
                <div className="bg-white px-4 py-1 rounded-b-2xl rounded-tr-2xl shadow">
                  <div className="flex items-start justify-center flex-col divide-y-2">
                    <h5 className="text-amber-900 font-semibold sm:text-lg">
                      {data.name} <span className="text-xs text-rose-400">{data?.attendance ? "(Akan hadir)" : null}</span>
                    </h5>
                    {/* <span className="text-sm text-amber-700">{moment(new Date(data?.createdAt) ?? new Date()).fromNow()}</span> */}
                  </div>
                  <p className="text-sm">{data.message}</p>
                </div>
                </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}