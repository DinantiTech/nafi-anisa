import { BOY_NAME_SHORT, GALERIES, GIRL_NAME_SHORT } from "../../contants/identity.const";
import "../../styles/image_fade.style.css";

export default function RightSection() {
  return (
    <div className="bg-primary relative bg-gradient-to-b from-transparent via-lime-300/10 to-orange-900/50 h-full" >
      <div className="slide">
        {GALERIES.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className="object-cover bg-contain"
            style={{ animationDelay: `${index * 7}s` }}
          />
        ))}
      </div>

      <div className="absolute top-[67%] right-0">
        <div className="flex flex-col justify-end px-20 gap-y-3 text-end">
          <div className="relative w-full">
            <h1 className="text-md md:text-5xl tracking-wider font-name">
              {/* {isInvitation ? 'THE WEDDING OF' : 'WEDDING ANNOUNCEMENT'} */}
              {/* WEDDING ANNOUNCEMENT */}
              Wedding Announcement
            </h1>
          </div>

          <div className="text-4xl md:text-5xl font-medium flex text-end justify-end gap-x-4 font-name-secondary">
            <h2>{BOY_NAME_SHORT}</h2>
            <span>&</span>
            <h2>{GIRL_NAME_SHORT}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}