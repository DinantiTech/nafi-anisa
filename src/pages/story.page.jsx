import { Suspense, lazy, useMemo, useState } from "react";
import { GALERIES, STORIES } from "../contants/identity.const";

import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Icon } from "@iconify/react";

import { ARROW_ROUNDED_ICON, ARROW_TICK_ICON } from "../contants/icon.const";
import { BG_GRADIENT, COLOR_PRIMARY, COLOR_TERTIARY } from "../contants/common.const";
import PatternBatik from '../assets/patterns/pattern_side11.svg';
import { usePhotoBox } from "../providers/photobox.provider";

const Galeries = lazy(() => import('../components/sections/galeries'));

export default function Stories({ handleClose = () => { } }) {
  const { setPhoto } = usePhotoBox()

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(STORIES[currentIndex]);

  useMemo(() => {
    setSelectedStory(STORIES[currentIndex])
  }, [currentIndex])

  const handleBackStory = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  const handleNextStory = () => setCurrentIndex((prevIndex) => (prevIndex === STORIES.length - 1 ? prevIndex : prevIndex + 1));


  return (
    <section className="w-full z-[99] h-full">
      <div className="absolute w-full top-0 z-50">
        <img src={PatternBatik} className="h-[8rem] md:h-[10rem] absolute left-0 transform rotate-[270deg]" loading='lazy' />
      </div>
      <img src={PatternBatik} className="h-[8rem] md:h-[10rem] absolute right-0 bottom-6 md:bottom-0 z-10 rotate-[90deg]" loading='lazy' />

      <div className={`${BG_GRADIENT} text-${COLOR_PRIMARY} h-full flex flex-col items-center justify-center min-h-screen gap-y-7 overflow-hidden relative font-primary pt-14 xs:pt-20 md:pt-0`}>

        <button onClick={handleClose} className="absolute md:right-20 right-7 top-10 md:flex items-center justify-center gap-x-1 font-name">
          <Icon icon={ARROW_TICK_ICON} className="hidden md:block text-4xl" />
          <p className="text-xl md:text-2xl">Kembali</p>
        </button>

        <div className={`${selectedStory.desc.length >= 300 ? 'items-start md:py-14' : ''} w-full flex flex-col md:flex-row items-center justify-center md:gap-x-10 gap-x-4`}>

          <div id="left-side-img-span" className="aspect-auto w-60 md:w-72 h-[21rem] xs:h-[26rem]">
            <img
              src={selectedStory?.url}
              alt=""
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>


          <div className="right-side-container flex flex-col text-center items-center justify-center">
            <div className="flex flex-col items-start justify-center w-full md:w-[34rem] md:gap-y-4 gap-y-4 mt-3 px-6">
              <h6 className="md:text-7xl text-5xl md:leading-[5.5rem] w-full mt-7 md:mt-0 font-name">
                {selectedStory?.title}
              </h6>
              <span className={`text-${COLOR_TERTIARY} w-full font-title`}>{selectedStory.date}</span>
              <p className="md:text-lg xs:w-72 sm:w-80 md:w-full w-full">{selectedStory?.desc}</p>
            </div>

            <div className="flex items-center justify-center mt-7 gap-x-5 md:text-base text-md px-4 z-20">
              <button onClick={handleBackStory} className="flex items-center justify-center gap-x-2 hover:text-amber-800 duration-500">
                <Icon icon={ARROW_ROUNDED_ICON} rotate={2} />
                <span>Sebelumnya</span>
              </button>
              <button onClick={handleNextStory} className="flex items-center justify-center gap-x-2 hover:text-amber-800 duration-500">
                <span>Selanjutnya</span>
                <Icon icon={ARROW_ROUNDED_ICON} />
              </button>
            </div>


            <div className="md:block hidden">
              <Swiper
                modules={[Scrollbar, Autoplay]}
                spaceBetween={10}
                slidesPerView={3.5}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 3500
                }}
                className="flex items-center justify-center mt-5 gap-x-3 w-96 h-28"
              >
                {GALERIES.map((story, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-40 h-44"
                    onClick={() => setPhoto({ isOpen: true, currentIndexPhoto: index })}
                  >
                    <img
                      src={story}
                      alt={`Foto ${index}`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-7 w-full pb-14">
          <Suspense>
            <Galeries />
          </Suspense>
        </div>

      </div>
    </section>
  );
}
