import { useRef, useEffect } from 'react';
import { BOY_NAME_SHORT, GALERIES, GIRL_NAME_SHORT } from '../../contants/identity.const';
import { Icon } from '@iconify/react';
import { ARROW_ROUNDED_ICON } from '../../contants/icon.const';
import { useState } from 'react';
import { usePhotoBox } from '../../providers/photobox.provider';

export default function PhotoboxModal({ indexPhoto }) {
  const { photo, handleClosePhoto } = usePhotoBox()

  const [currentIndex, setCurrentIndex] = useState(indexPhoto || 0);
  const selectedStory = GALERIES[currentIndex];

  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClosePhoto();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleBackPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex === GALERIES.length - 1 ? prevIndex : prevIndex + 1));
  };

  return (
  <div className={`${photo?.isOpen ? 'block' : 'hidden'} fixed w-full top-0 z-50 h-full flex flex-col items-center justify-center min-h-screen bg-black/40`}>
      <div className="flex items-center justify-center min-h-screen text-center sm:block">
        {/* <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203; */}
        <div
          ref={modalRef}
          className={`inline-block align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full bg-black/0 py-4 ${
            photo?.isOpen ? 'ease-out duration-300 opacity-100 translate-y-0' : 'ease-in duration-200 opacity-0 translate-y-4'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex items-center justify-center gap-x-5 w-full">
            <button onClick={handleBackPhoto} className={`${currentIndex === 0 ? 'text-white/30 cursor-default' : 'text-white'} text-2xl`}>
              <Icon icon={ARROW_ROUNDED_ICON} rotate={2} />
            </button>

            <div className="bg-white sm:p-4 p-2">
              <div className="sm:flex sm:items-start h-52 xxs:h-60 md:w-[26rem] w-52 xxs:w-60 xs:w-72 xs:h-72 sm:h-96 md:h-72">
                <img src={selectedStory} alt="" loading="lazy" className="w-full h-full object-cover object-center" />
              </div>

              <div className="flex items-center justify-center mt-3 gap-x-2">
                <h1>{BOY_NAME_SHORT}</h1>
                <span>&</span>
                <h1>{GIRL_NAME_SHORT}</h1>
              </div>

              <div className="w-full flex items-end justify-end text-xs">
                Moment, {new Date().toLocaleDateString()}
              </div>
            </div>

            <button
              onClick={handleNextPhoto}
              className={`${currentIndex === GALERIES.length - 1 ? 'text-white/30 cursor-default' : 'text-white'} text-2xl`}
            >
              <Icon icon={ARROW_ROUNDED_ICON} />
            </button>
          </div>
        </div>
      </div>
  </div>
  );
}
