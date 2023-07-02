import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { GALERIES, STORIES } from "../contants/identity.const";

import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Icon } from "@iconify/react";
import { ARROW_ROUNDED_ICON, ARROW_TICK_ICON } from "../contants/icon.const";
import { useNavigate } from "react-router-dom";

const Galeries = lazy(() => import('../components/sections/galeries'));
const PhotoboxModal = lazy(() => import('../components/commons/modal_photobox.common'));

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(STORIES[currentIndex]);
  const [getPhoto, setGetPhoto] = useState({
    isOpen: false,
    currentIndexPhoto: null
  })

  const navigate = useNavigate();

  useMemo(() => {
    setSelectedStory(STORIES[currentIndex])
  }, [currentIndex])

  const handleBackStory = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  const handleNextStory = () => setCurrentIndex((prevIndex) => (prevIndex === STORIES.length - 1 ? prevIndex : prevIndex + 1));

  const handleClosePhoto = () => setGetPhoto({ ...getPhoto, isOpen: false })

  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center bg-amber-100 min-h-screen gap-y-7 overflow-hidden relative">

        <button onClick={() => navigate(-1)} className="hidden absolute right-20 top-10 md:flex items-center justify-center gap-x-1">
          <Icon icon={ARROW_TICK_ICON} className="text-4xl"/>
          <span>Kembali</span>
        </button>

        <div className={`${selectedStory.desc.length >= 300 ? 'items-start md:py-14' : 'items-center'} w-full flex justify-center md:gap-x-10 gap-x-4`}>
          
          <div id="left-side-img-span" className="aspect-auto w-72 md:w-72 h-[26rem]">
            <img
              src={selectedStory?.url}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>


          <div className="right-side-container flex flex-col">
            <div className="flex flex-col items-start justify-center w-full md:w-[30rem] md:gap-y-4 gap-y-4 mt-3">
              <h6 className="md:text-8xl text-4xl md:leading-[5.5rem]">
                {selectedStory?.title}
              </h6>
              <span className="text-gray-500">20 Agustus 2010</span>
              <p className="indent-8 md:text-base text-sm w-56 xs:w-72 sm:w-80 md:w-full">{selectedStory?.desc}</p>
            </div>

            <div className="flex items-center justify-center mt-7 gap-x-5 md:text-base text-sm px-4">
              <button onClick={handleBackStory} className="flex items-center justify-center gap-x-2 hover:text-amber-800 duration-500">
                  <Icon icon={ARROW_ROUNDED_ICON} rotate={2} />
                  <span>
                      Sebelumnya
                  </span>
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
                    onClick={() => setGetPhoto({ isOpen: true, currentIndexPhoto: index})}
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

        <div className="md:hidden w-full">
          <Suspense>
            <Galeries />
          </Suspense>
        </div>
        
        <Suspense>
          { getPhoto.isOpen ? (
            <PhotoboxModal isOpen={getPhoto.isOpen} indexPhoto={getPhoto.currentIndexPhoto} onClose={handleClosePhoto}/>
          ) : null }
        </Suspense>
      </div>
      
    </section>
  );
}
