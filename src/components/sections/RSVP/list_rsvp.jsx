import { useState } from "react";
import { RSVPData } from "../../../datas/list_rsvp.data";

export default function ListRSVP() {  
    const [showFullList, setShowFullList] = useState(false);
    const limitedRSVPData = RSVPData.slice(0, 5);
  
    const handleShowFullList = () => {
      setShowFullList(true);
    };
  
    return (
      <div className="w-full px-4 mt-5 flex flex-col items-start justify-center gap-y-3 divide-y">
        {showFullList ? (
          RSVPData.map((data) => (
            <div className="w-full flex flex-col items-start justify-center gap-y-3 pt-2">
              <div className="flex items-start justify-center flex-col">
                <h5 className="text-amber-900 font-semibold sm:text-lg">
                  {data.name}
                </h5>
                <span className="text-sm text-amber-700">1 Jam yang lalu</span>
              </div>
              <p className="text-sm">{data.message}</p>
            </div>
          ))
        ) : (
          limitedRSVPData.map((data) => (
            <div className="w-full flex flex-col items-start justify-center gap-y-3 pt-2">
              <div className="flex items-start justify-center flex-col">
                <h5 className="text-amber-900 font-semibold sm:text-lg">
                  {data.name}
                </h5>
                <span className="text-sm text-amber-700">1 Jam yang lalu</span>
              </div>
              <p className="text-sm">{data.message}</p>
            </div>
          ))
        )}
  
        {!showFullList && RSVPData.length > 5 && (
          <button
            className="text-sm text-amber-900 underline pt-3"
            onClick={handleShowFullList}
          >
            Lihat Lebih Lengkap
          </button>
        )}
      </div>
    );
  }