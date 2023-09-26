import React, { useRef } from 'react';

export default function ModalStory({ isOpen, children }) {

    const modalRef = useRef();

    const handleOutsideClick = (event) => {
        if (modalRef.current === event.target) {
            onClose();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={handleOutsideClick}
            className={`fixed z-40 inset-0 top-0 ${isOpen ? "block": "hidden"}`}>
            <div className="flex items-center justify-center text-center sm:block">
                <div
                    className={`inline-block align-bottom rounded-lg text-left overflow-y-auto shadow-xl transform transition-all w-[100%] sm:align-middle ${isOpen ? 'ease-out duration-300 opacity-100 translate-y-0' : 'ease-in duration-200 opacity-0 translate-y-4'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="w-full max-h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};