import { Field } from "formik";
import { COLOR_PRIMARY, PRESENT_LABEL_RSVP } from "../../contants/common.const";

export default function CustomCheckbox({ label, name, isAttendance }) {
    return (
        <div className="flex items-center">
            <Field
                name={name}
                id="default-checkbox"
                type="checkbox"
                className={`accent-${COLOR_PRIMARY} w-4 h-4 bg-gray-100 border-gray-300 rounded`}
            />
            <label
                htmlFor="default-checkbox"
                className={`${isAttendance ? `text-${COLOR_PRIMARY}` : `text-gray-400`} ml-2 text-sm font-medium`}
            >
                {label ?? PRESENT_LABEL_RSVP}
            </label>
        </div>
    );
}
