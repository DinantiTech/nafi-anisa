"use client";

import { useEffect, useMemo, useState } from "react";
import { Field, Formik } from "formik";
import { Icon } from "@iconify/react/dist/iconify.js";

import MobileLayout from "../layouts/mobile.layout";
import { useAppScript } from "@/hooks/app_script.hook";
import { SHEET_NAME } from "@/constants/others.const";
import HeadingTitle from "../micro/heading_title.micro";
import ModalAvatar from "../commons/modal_avatar.common";
import moment from "moment-timezone";

type FormType = {
    name: string;
    message: string;
    attendance: boolean;
}

export default function RSVPSection() {
    const [data, loading, _, createData, setStartFetching] = useAppScript(SHEET_NAME);

    const [messageLimit, setMessageLimit] = useState<number>(5);

    const handleLoadMore = () => {
        setMessageLimit(prevLimit => prevLimit + 5);
    };

    return (
        <MobileLayout className="px-4">
            <div className="w-full flex flex-col justify-center items-center py-8">
                <HeadingTitle title="BEST WISHES" />

                <Formik
                    initialValues={{ name: '', message: '', attendance: false }}
                    validate={(values: FormType) => {
                        let errors: Record<string, any> = {};

                        if (values.name.length < 1) errors.name = "Name is required"
                        if (values.message.length < 1) errors.message = "Wish is required"

                        return errors;
                    }}

                    onSubmit={async (values, { resetForm }) => {
                        if (values?.name?.length > 0 && values?.message?.length > 1) {
                            const time = new Date().toISOString()
                            const query = `&name=${values.name}&message=${values.message}&attendance=${values.attendance}&createdAt=${time}`;
                            await createData(query);
                            setStartFetching(true)
                            resetForm()
                        }
                    }}
                >
                    {({
                        errors,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit} className="relative mt-10 w-full flex flex-col justify-start items-start gap-y-5 font-primary">
                            <div className="relative w-full text-sm xxs:text-base">
                                <Field autoComplete="off" id="name" name="name" type="text" className={`${errors?.name ? "border-red-800" : "border-black"} peer h-10 w-full border-b text-gray-900 focus:outline-none focus:borer-rose-600`} placeholder="Enter Your Name" />

                                {errors.name ? <span className="text-red-800 text-xs">{errors?.name}</span> : null}
                            </div>
                            <div className="relative w-full text-sm xxs:text-base">
                                <Field as="textarea" type="textarea" autoComplete="off" id="message" name="message" className={`${errors?.message ? "border-red-800" : "border-black"} peer h-24 w-full border-b border-black text-gray-900 focus:outline-none focus:borer-rose-600`} placeholder="Enter Your Wish" />
                                {errors.message ? <span className="text-red-800 text-xs">{errors?.message}</span> : null}
                            </div>

                            <div id="attendance" className="w-full flex justify-between items-center rounded-lg">
                                <div className="flex items-center">
                                    <Field
                                        name="attendance"
                                        id="default-checkbox"
                                        type="checkbox"
                                        className={`w-4 h-4 rounded`}
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className={`ml-2 text-sm`}
                                    >
                                        Attendance
                                    </label>
                                </div>

                                <button disabled={isSubmitting} type="submit" className='flex items-center justify-center xxs:text-lg hover:bg-[#945C5C]/90 border-none btn btn-sm xxs:btn-md bg-[#945C5C] text-white font-normal gap-x-1'>
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
                                data?.slice(0, messageLimit)?.map((data: Record<string, any>, index) => (
                                    <div key={index} className="flex items-start justify-center gap-x-2">
                                        <div className="w-10 h-10 flex-shrink-0 bg-gray-300 rounded-full flex items-center justify-center uppercase font-bold">{data?.name[0]}</div>
                                        <div className="w-full flex flex-col items-start justify-center">
                                            <div className="flex items-start justify-center flex-col">
                                                <h5 className="text-black font-semibold sm:text-lg">
                                                    {data.name} <span className="text-xs text-amber-900">{data?.attendance ? "🔥" : null}</span>
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
                {data && data.length > messageLimit ? (
                    <button
                        onClick={handleLoadMore}
                        className="btn btn-sm text-sm bg-[#945C5C] hover:bg-[#945C5C]/90 w-full text-white mt-7 font-normal py-4 h-auto"
                    >
                        LOAD MORE MESSAGES
                    </button>
                ) : null}
            </div>
        </MobileLayout>
    )
}