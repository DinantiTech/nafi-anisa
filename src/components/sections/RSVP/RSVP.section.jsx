import { useMemo } from "react";
import { SHEET_NAME } from "../../../contants/common.const";
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

export default function RSVP() {
    const [data, loading, error, createData, setStartFetching] = useAppScript(SHEET_NAME);

    return (
        <FrameLayout>
            { loading ? (<LoveLoader />) : null }
            <div className="w-full pt-10 flex flex-col justify-center items-center ">
                <CustomAnimation>
                    <h2 className="uppercase sm:text-2xl text-xl font-primary">
                        Harapan & Doa
                    </h2>
                    <p className="text-gray-500 mt-1 font-primary">- RSVP -</p>
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
                            <CustomInput error={errors.name} name="name" label="Nama" placeholder="Masukan Namamu ..." />
                            <CustomTextarea error={errors.message} name="message" label="Ucapan & doa" placeholder="Masukan ucapan atau doa ..." />
                            
                            <AttendanceInput name="attendance" label="Kehadiran" />
                            <CustomButton type="submit"  label="Kirim ucapan" name="Kirim ucapan" icon={PAPER_ICON} />
                        </form>
                    )}

                </Formik>


                <ListRSVP data={data} />
            </div>
        </FrameLayout>
    )
}