/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import moment from "moment-timezone";
import { Field, Formik } from "formik";
import localFont from "next/font/local";
import { useMemo, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import MobileLayout from "../layouts/mobile.layout";
import { SPREADSHEET_ID } from "@/components/libs/constants/others.const";
import HeadingTitle from "../micro/heading_title.micro";

import rsvpAnimmationData from "@/assets/icon-animation/rsvp-animation.json";
import { useRSVPSubmitStore } from "@/components/libs/stores/rsvp_submit.store";
import ModalAvatar from "../modals/avatar.modal";
import { RSVP } from "@dinantitech/rsvp";
import Image from "next/image";
import { selectAvatar } from "@/components/libs/helpers/select_avatar.helper";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false }); 

type FormType = {
    name: string;
    message: string;
    attendance: boolean;
}

const Rsvp = new RSVP({ sheetName: 'RSVP', sheetID: SPREADSHEET_ID });

export default function RSVPSection() {
    const { isRSVPSubmit, setRSVPSubmit } = useRSVPSubmitStore();

    const [loading, setLoading] = useState<boolean>(false);
    const [dataRsvp, setDataRsvp] = useState<Record<string, any>>({})
    const [messageLimit, setMessageLimit] = useState<number>(5);
    const [modalAvatarRsvp, setModalAvatarRsvp] = useState<boolean>(false);
    const [listRsvp, setListRsvp] = useState<Record<string, any>[] | null>([]);

    const handleSendRSVP = async () => {
        try {
            setLoading(true);
            setModalAvatarRsvp(false)

            // send RSVP
            await Rsvp.createRSVP(dataRsvp);

            // update state list RSVP
            setListRsvp((prevList) => [{...dataRsvp, createdAt: new Date().toISOString()}, ...(prevList || [])]);
            setRSVPSubmit(true)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleLoadMore = () => {
        setMessageLimit(prevLimit => prevLimit + 5);
    };

    useMemo(() => {
        setLoading(true);
        Rsvp.getRSVP().then((val: any) => {
            const sortedData = val?.data?.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setListRsvp(sortedData);
            setLoading(false);
        });
    }, []);

    return (
        <MobileLayout className="px-4 py-5" id="rsvp">
            <div className='w-20 xxs:w-24 mt-3 xxs:mt-5 mx-auto'>
                <DynamicLottie
                    loop
                    animationData={rsvpAnimmationData}
                    autoplay
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
            </div>

            <HeadingTitle title="BEST WISHES" className={`${babyDoll.className} mx-auto flex items-center justify-center`} />
            <div className={`${babyDoll.className} w-full flex flex-col justify-center items-center py-6`}>
                <Formik
                    initialValues={{ name: '', message: '', attendance: false }}
                    validate={(values: FormType) => {
                        const errors: Record<string, any> = {};

                        if (values.name.length < 1) errors.name = "Name is required"
                        if (values.message.length < 1) errors.message = "Wish is required"

                        return errors;
                    }}

                    onSubmit={async (values, {}) => {
                        if (values?.name?.length > 0 && values?.message?.length > 1) {
                            setDataRsvp(values)
                            setModalAvatarRsvp(true)
                        }
                    }}
                >
                    {({
                        errors,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit} className="relative mt-10 w-full flex flex-col justify-start items-start gap-y-5 font-primary">

                            {/* Modal select Avatar RSVP */}
                            <ModalAvatar
                                isOpen={modalAvatarRsvp}
                                avatar={dataRsvp?.avatar}
                                selectAvatar={(val) => setDataRsvp(prev => ({ ...prev, avatar: val }))}
                                clickOutside={() => setModalAvatarRsvp(false)}
                                handleSubmit={handleSendRSVP}
                            />

                            <div className="relative w-full text-sm xxs:text-base" data-aos="fade-in">
                                <Field disabled={isRSVPSubmit} autoComplete="off" id="name" name="name" type="text" className={`${errors?.name ? "border-red-800" : `${isRSVPSubmit ? "border-gray-400" : "border-black"}`} peer h-10 w-full border-b text-[#565656] focus:outline-none focus:borer-rose-600 bg-transparent`} placeholder="Enter Your Name..." />

                                {errors.name ? <span className="text-red-800 text-xs">{errors?.name}</span> : null}
                            </div>
                            <div className="relative w-full text-sm xxs:text-base" data-aos="fade-in">
                                <Field disabled={isRSVPSubmit} as="textarea" type="textarea" autoComplete="off" id="message" name="message" className={`${errors?.message ? "border-red-800" : `${isRSVPSubmit ? "border-gray-400" : "border-black"}`} peer h-24 w-full border-b border-black text-[#565656] focus:outline-none focus:borer-rose-600 bg-transparent`} placeholder="Text here..." />
                                {errors.message ? <span className="text-red-800 text-xs">{errors?.message}</span> : null}
                            </div>

                            <div id="attendance" className="w-full flex justify-between items-center rounded-lg" data-aos="fade-in">
                                <div className="flex items-center">
                                    <Field
                                        disabled={isRSVPSubmit}
                                        name="attendance"
                                        id="default-checkbox"
                                        type="checkbox"
                                        className={`w-4 h-4 rounded`}
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className={`${isRSVPSubmit ? "text-gray-400" : ""} ml-2 text-sm`}
                                    >
                                        Attendance (Kehadiran)
                                    </label>
                                </div>

                                <button disabled={isRSVPSubmit} type="submit" className='flex items-center justify-center xxs:text-lg hover:bg-[#E8B787]/90 border-none btn btn-sm xxs:btn-md bg-[#E8B787] text-white font-normal gap-x-1'>
                                    <Icon icon="jam:paper-plane" />
                                    SEND
                                </button>
                            </div>
                        </form>
                    )}

                </Formik>

                <div className="w-full mt-10 flex flex-col items-start justify-center gap-y-4">
                    {loading ? (
                        <div className="flex flex-col items-start justify-center mx-auto">
                            <div className="loading loading-ring loading-lg mx-auto"></div>
                            <p>Loading Data</p>
                        </div>
                    ) : (
                        <>
                            {
                                listRsvp?.slice(0, messageLimit)?.map((data: Record<string, any>, index) => (
                                    <div key={index} className="flex items-start justify-center gap-x-2" data-aos="fade-left">
                                        <div className="w-10 h-10 flex-shrink-0 bg-gray-300 rounded-full flex items-center justify-center uppercase font-bold border-2 border-amber-700">
                                            <Image src={selectAvatar(data?.avatar)} alt={data?.name} className="" />
                                        </div>
                                        <div className="w-full flex flex-col items-start justify-center">
                                            <div className="flex items-start justify-center flex-col">
                                                <h5 className="text-black font-semibold sm:text-lg">
                                                    {data.name} <span className="md:text-xs text-[0.6rem] text-amber-900">{data?.attendance ? "(akan hadir) ✅" : null}</span>
                                                </h5>
                                                <span className="text-amber-700 text-xs">{moment(new Date(data?.createdAt)).tz('Asia/Jakarta').fromNow()}</span>
                                            </div>
                                            <p className="text-sm">{data.message}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )}
                </div>
                {listRsvp && listRsvp.length > messageLimit ? (
                    <button
                        onClick={handleLoadMore}
                        className="btn btn-sm text-sm bg-[#E8B787] hover:bg-[#E8B787]/90 w-full text-white mt-7 font-normal py-4 h-auto"
                        data-aos="fade-in"
                    >
                        LOAD MORE MESSAGES
                    </button>
                ) : null}
            </div>
        </MobileLayout>
    )
}