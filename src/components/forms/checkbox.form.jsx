import { Field } from "formik";

export default function CustomCheckbox({ label, name }) {
    return (
        <div className="flex items-center">
            <Field
                name={name}
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium dark:text-gray-300 text-amber-900"
            >
                {label ?? "Akan hadir"}
            </label>
        </div>
    );
}
