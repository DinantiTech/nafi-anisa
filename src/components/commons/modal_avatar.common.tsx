import React, { useState, useEffect, ReactNode } from 'react';

import Avatar1 from "@/assets/avatars/Avatar-1.svg";
import Avatar2 from "@/assets/avatars/Avatar-2.svg";
import Avatar3 from "@/assets/avatars/Avatar-3.svg";
import Avatar4 from "@/assets/avatars/Avatar-4.svg";
import Avatar5 from "@/assets/avatars/Avatar-5.svg";
import Avatar6 from "@/assets/avatars/Avatar-6.svg";
import Avatar7 from "@/assets/avatars/Avatar-7.svg";
import Avatar8 from "@/assets/avatars/Avatar-8.svg";
import Avatar9 from "@/assets/avatars/Avatar-9.svg";
import Avatar10 from "@/assets/avatars/Avatar-10.svg";
import Avatar11 from "@/assets/avatars/Avatar-11.svg";
import Avatar12 from "@/assets/avatars/Avatar-12.svg";
import Image from 'next/image';

const avatarData = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
    Avatar10,
    Avatar11,
    Avatar12,
]


interface ModalProps {
    avatar: number | null;
    selectAvatar?: (idx: number) => void;
    clickOutside?: () => void;
    isOpen: boolean;
    handleModal?: () => void;
}

export default function ModalAvatar({ avatar, selectAvatar, clickOutside, isOpen, handleModal }: ModalProps) {
    const handleSelectAvatar = (idx: number) => {
        if (selectAvatar) {
            selectAvatar(idx);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed z-[99] inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 transition-opacity" onClick={ clickOutside && clickOutside}>
                            <div className="absolute inset-0 bg-white/70 glass blur"></div>
                        </div>
                        <div className="z-50 bg-black p-8 max-w-lg mx-auto rounded shadow-lg animate__animated animate__zoomIn">
                            <h5 className='text-white text-center mb-5 text-xs'>Pilih avatar yang sesuai dengan personamu</h5>

                            <div className='grid gap-1 grid-cols-4'>
                                {avatarData?.map((data, idx) => (
                                    <Image onClick={() => handleSelectAvatar(idx + 1)} key={idx} src={data} alt={'avatar' + idx} sizes='100vw' className={`${avatar === idx + 1 ? "border-white opacity-100 border-dashed": "border-black opacity-80"} rounded-full border w-14 cursor-pointer `} />
                                ))}
                            </div>

                            { avatar ? (
                                <button onClick={handleModal && handleModal} className='btn btn-sm mx-auto w-fit flex items-center justify-center mt-5 border-4 border-dashed border-white'>Pilih Avatar</button>
                            ): null }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
