import CustomCheckbox from "./checkbox.form";

export default function AttendanceInput({ label }) {
    return (
        <div className="flex flex-col items-start justify-center gap-y-2 w-full">
            <label htmlFor={ label ?? "label" }>{label ?? "Label"} :</label>
            <div id={ label ?? "label" } className="w-full bg-amber-100 flex flex-col justify-center items-start py-3 px-2 rounded-lg">
                <CustomCheckbox />
            </div>
        </div>
    )
}