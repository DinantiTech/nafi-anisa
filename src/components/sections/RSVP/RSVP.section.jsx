import { useMemo } from "react";
import { ATTENDANCE_LABEL_RSVP, NAME_LABEL_RSVP, NAME_PLACEHOLDER_RSVP, RSVP_LABEL, SEND_RSVP, SHEET_NAME, WISH_AND_PRAY_RSVP, WISH_LABEL_RSVP, WISH_PLACEHOLDER_RSVP } from "../../../contants/common.const";
import { PAPER_ICON } from "../../../contants/icon.const";
import { useAppScript } from "../../../hooks/useAppScript.hook";
import CustomAnimation from "../../animations/custom.animation";
import CustomButton from "../../buttons/custom.button";
import AttendanceInput from "../../forms/attendance.form";
import CustomInput from "../../forms/input.form";
import CustomTextarea from "../../forms/textarea.textare";
import FrameLayout from "../../layouts/frame.layout";
import LoveLoader from "../../loaders/love.loader";
import ListRSVP from "./list_rsvp";
import { Formik } from "formik";
import HeadingCustom from "../../commons/heading.common";

export default function RSVP() {
    const [data, loading, error, createData, setStartFetching] = useAppScript(SHEET_NAME);

    return (
        <FrameLayout>
            { loading ? (<LoveLoader />) : null }
            <div className="w-full pt-10 flex flex-col justify-center items-center ">
                <CustomAnimation>
                    {/* <h2 className="uppercase sm:text-2xl text-xl font-primary">
                        Harapan & Doa
                    </h2> */}
                    <HeadingCustom>
                        { WISH_AND_PRAY_RSVP }
                    </HeadingCustom>
                    <p className="uppercase text-gray-500 mt-1 font-primary italic">- {RSVP_LABEL} -</p>
                </CustomAnimation>

                <Formik
                    initialValues={{ name: '', message: '', attendance: false }}
                    validate={values => {
                        let errors = {};

                        if(values.name.length < 1) {
                            errors.name = "Nama harus diisi"
                        } else if(values.message < 1) {
                            errors.message = "Ucapan & doa harus diisi"
                        }

                        return errors;
                    }}

                    onSubmit={async (values, {resetForm}) => {
                        if(values?.name?.length > 0 && values?.message?.length > 1) {
                            const time = new Date()
                            const query = `&name=${values.name}&message=${values.message}&attendance=${values.attendance}&createdAt=${time}`;
    
                            await createData(query);
                            
                            setStartFetching(true)
                            resetForm()
                        }
                    }}
                >
                    {({
                        errors,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit} className="relative mt-5 w-full px-4 flex flex-col justify-start items-start gap-y-4 font-primary">
                            <CustomInput error={errors.name} name="name" label={NAME_LABEL_RSVP} placeholder={NAME_PLACEHOLDER_RSVP} />
                            <CustomTextarea error={errors.message} name="message" label={WISH_LABEL_RSVP} placeholder={WISH_PLACEHOLDER_RSVP} />
                            
                            <AttendanceInput name="attendance" label={ATTENDANCE_LABEL_RSVP} />
                            <CustomButton type="submit"  label={SEND_RSVP} name={SEND_RSVP} icon={PAPER_ICON} />
                        </form>
                    )}

                </Formik>


                <ListRSVP data={data} />
            </div>
        </FrameLayout>
    )
}