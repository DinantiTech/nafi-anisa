import { Icon } from "@iconify/react";
import { ARROW_CLOCKWISE_ICON } from "../../contants/icon.const";

export default function CustomButton({ name, rounded, icon, onClick, type, loading }) {

  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`${
        rounded ? "rounded-full" : "rounded-lg"
      } font-cta group px-4 py-1 border-2 bg-amber-700 hover:bg-amber-100 hover:text-amber-800 hover:font-semibold duration-300 flex items-center justify-center shadow shadow-amber-900 text-white`}
      name={name}
    >
    <div className="flex items-center justify-center gap-x-2">
        { loading ? ( <Icon className="animate-spin" icon={ARROW_CLOCKWISE_ICON} />) : null }

        { icon && !loading && (
            <Icon className="group-hover:text-rose-700" icon={icon} />
        ) }
        <span className="group-hover:text-amber-800">
        {name ?? "Ini Button"}
        </span>
    </div>
    </button>
  );
}
