import React, { useEffect, useMemo, useState } from "react";
import { STORIES } from "../contants/identity.const";

import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Icon } from "@iconify/react";
import { ARROW_ROUNDED_ICON } from "../contants/icon.const";

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(STORIES[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % STORIES.length);
    }, 6000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelectStory = (data, index) => {
    setSelectedStory(data);
    setCurrentIndex(index)
  };

  useMemo(() => {
    setSelectedStory(STORIES[currentIndex])
  }, [currentIndex])

  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center bg-amber-100 min-h-screen gap-y-7">
        <div className={`${selectedStory.desc.length >= 300 ? 'items-start pt-14' : 'items-center'} section-container w-full flex justify-center gap-x-10`}>
          <div id="left-side-img-span" className="aspect-auto w-72 h-[26rem]">
            <img
              src={selectedStory?.url}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="right-side-container flex flex-col">
            <div className="flex flex-col items-start justify-center w-[30rem] gap-y-4">
              <h6 className="text-8xl leading-[5.5rem]">
                {selectedStory?.title}
              </h6>
              <span className="text-gray-500">20 Agustus 2010</span>
              <p>{selectedStory?.desc}</p>
            </div>
            <Swiper
              modules={[Scrollbar, Autoplay]}
              spaceBetween={10}
              slidesPerView={3.5}
              onActiveIndexChange={(index) => {
                console.log(index?.realIndex)
                console.log(index?.snapIndex)
              }}
              autoplay={{
                delay: 3000
              }}
              scrollbar={{ draggable: true }}

              className="flex items-center justify-center mt-5 gap-x-3 w-96 h-28"
            >
              {STORIES.map((story, index) => (
                <SwiperSlide
                  key={index}
                  className="w-40 h-44"
                >
                  <img
                    src={story.url}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-96 flex justify-between items-center">
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1))} className="flex items-center justify-center gap-x-2 text-xl hover:text-amber-800 duration-500">
                <Icon icon={ARROW_ROUNDED_ICON} rotate={2} />
                <span>
                    Sebelumnya
                </span>
            </button>
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex === STORIES.length - 1 ? prevIndex : prevIndex + 1))} className="flex items-center justify-center gap-x-2 text-xl hover:text-amber-800 duration-500">
                <span>Selanjutnya</span>
                <Icon icon={ARROW_ROUNDED_ICON} />
            </button>
        </div>
      </div>
    </section>
  );
}
