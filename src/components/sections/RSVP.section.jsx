import { PAPER_ICON } from "../../contants/icon.const";
import CustomAnimation from "../animations/custom.animation";
import CustomButton from "../buttons/custom.button";
import AttendanceInput from "../forms/attendance.form";
import CustomInput from "../forms/input.form";
import CustomTextarea from "../forms/textarea.textare";
import FrameLayout from "../layouts/frame.layout";

export default function RSVP() {
    return (
        <FrameLayout>
            <div className="w-full pt-10 flex flex-col justify-center items-center px-">
                <CustomAnimation>
                    <h2 className="uppercase sm:text-2xl text-xl">
                        Harapan & Doa
                    </h2>
                    <p className="text-gray-500 mt-1">- RSVP -</p>
                </CustomAnimation>

                <form className="relative mt-5 w-full px-4 flex flex-col justify-start items-start gap-y-4">
                    <CustomInput label="Nama" placeholder="Masukan Namamu ..." />
                    <CustomTextarea label="Ucapan & doa" placeholder="Masukan ucapan atau doa ..." />
                    
                    <AttendanceInput label="Kehadiran" />
                    <CustomButton label="Kirim ucapan" name="Kirim ucapan" icon={PAPER_ICON} />
                </form>
            </div>
        </FrameLayout>
    )
}